import { useEffect, useState } from "react";
import uniqid from 'uniqid';

import {db, auth, googleProvider} from './firebase'
import {signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import {set, ref, onValue, get} from 'firebase/database'

import SideBar from "./components/sideBar/SideBar";
import Body from "./components/body/Body";
import NavBarDash from "./components/navBarDash/NavBarDash";
import './dashboard.css'

const defaultDeviceData = {
    'Example_ID_3': 
    {"readings":{"1681479145210":{"timeStamp":1681479145210,"waterLevel":150},"1681479145240":{"timeStamp":1681479145240,"waterLevel":145},"1681479145270":{"timeStamp":1681479145270,"waterLevel":140},"1681479145300":{"timeStamp":1681479145300,"waterLevel":130},"1681479145330":{"timeStamp":1681479145330,"waterLevel":110},"1681479145360":{"timeStamp":1681479145360,"waterLevel":80},"1681479145390":{"timeStamp":1681479145390,"waterLevel":70},"1681479145420":{"timeStamp":1681479145420,"waterLevel":65},"1681479145450":{"timeStamp":1681479145450,"waterLevel":60},"1681479145480":{"timeStamp":1681479145480,"waterLevel":58},"1681479145510":{"timeStamp":1681479145510,"waterLevel":59},"1681479145540":{"timeStamp":1681479145540,"waterLevel":62},"1681479145570":{"timeStamp":1681479145570,"waterLevel":65},"1681479145600":{"timeStamp":1681479145600,"waterLevel":70},"1681479145630":{"timeStamp":1681479145630,"waterLevel":73},"1681479145660":{"timeStamp":1681479145660,"waterLevel":74},"1681479145690":{"timeStamp":1681479145690,"waterLevel":74.3},"1681479145720":{"timeStamp":1681479145720,"waterLevel":73},"1681479145750":{"timeStamp":1681479145750,"waterLevel":70},"1681479145780":{"timeStamp":1681479145780,"waterLevel":69},"1681479145810":{"timeStamp":1681479145810,"waterLevel":68},"1681479145840":{"timeStamp":1681479145840,"waterLevel":68},"1681479145870":{"timeStamp":1681479145870,"waterLevel":67},"1681479145900":{"timeStamp":1681479145900,"waterLevel":65},"1681479145930":{"timeStamp":1681479145930,"waterLevel":66.5},"1681479145960":{"timeStamp":1681479145960,"waterLevel":72},"1681479145990":{"timeStamp":1681479145990,"waterLevel":79},"1681479146020":{"timeStamp":1681479146020,"waterLevel":86},"1681479146050":{"timeStamp":1681479146050,"waterLevel":95},"1681479146080":{"timeStamp":1681479146080,"waterLevel":100}},"metaData":{"volume":5000,"height":30}}
    ,
}

const defaultDeviceList = {
    1234: {
        deviceName: 'Example 1',
        deviceID: 'Example_ID_1'
    },
    1235: {
        deviceName: 'Example 2',
        deviceID: 'Example_ID_2'
    },
    1236: {
        deviceName: 'Example 3',
        deviceID: 'Example_ID_3'
    },
}

export default function Dashboard() {

    const [deviceList, setDeviceList] = useState(defaultDeviceList);
    const [deivceData, setDeviceData] = useState(defaultDeviceData);
    const [currDevice, setCurrDevice] = useState(1234);

    const [user, setUser] = useState(auth.currentUser || null);

    function handleAddDevice(deviceInput) {
        if(deviceInput === '') return;
        const newKey = uniqid();
        setDeviceList(x => ({
            ...x,
            [newKey]: {
                deviceName: deviceInput,
                deviceID: deviceInput
            }
        }));
    }

    function handleRemoveDevice(e, deviceKey) {
        e.stopPropagation();
        setDeviceList(x => {
            let curr = {...x};
            delete curr[deviceKey];
            return curr;
        })
        setCurrDevice(null);
    }

    function handleSelectDevice(deviceKey) {
        setCurrDevice(deviceKey);
    }

    function changeDeviceName(deviceKey, newName) {
        setDeviceList(x => ({
            ...x,
            [deviceKey]: {
                deviceName: newName,
                deviceID: x[deviceKey].deviceID
            }
        }))
    }

    function parseFirebaseData(data) {
        if(!data) return null;
        let dataX = [], dataY = [];
        for(let key in data.readings) {
            dataX.push(key * 1000);
            dataY.push(Math.floor(data.readings[key].waterLevel));
        }
        return {dataX: dataX, dataY: dataY};
    }

    function handleSignIn() {
        signInWithPopup(auth, googleProvider);
    }

    function handleSignOut() {
        signOut(auth);
        // setUser(null);
    }

    useEffect(() => {
        if(auth.currentUser) {
            set(ref(db, 'UsersData/' + auth.currentUser.uid), deviceList);

            const toDeleteRef = [];
            for(let key in deviceList) {
                const newRef = ref(db, 'meterData/' + `${deviceList[key].deviceID}`);
                // toDeleteRef.push(newRef);
                const unsub = onValue(newRef, (snap) => {
                    // console.log(key, deviceList[key], snap.val());
                    if(snap.val()) {
                        setDeviceData(prev => ({
                            ...prev,
                            [deviceList[key].deviceID]: snap.val(),
                        }));
                    }
                    // fix maybe later i can remove it from the if
                });
                toDeleteRef.push(unsub);

            }
            return () => {
                for(let i=0; i<toDeleteRef.length; i++) {
                    toDeleteRef[i]();
                }
            }
        }
    }, [deviceList]);

    function onAuthChangeFunc(user) {
        if(user) {
            setUser(auth.currentUser);
            get(ref(db, 'UsersData/' + auth.currentUser.uid)).then((snapshot) => {
                console.log('userData', snapshot.val());
                if(snapshot.val()) {
                    setDeviceList(snapshot.val());
                    for(let key in snapshot.val()) {
                        setCurrDevice(key);
                        break;
                    }
                } else {
                    setDeviceList({});
                    setCurrDevice(null);
                }
              }).catch((error) => {
                console.error(error);
            });
        } else {
            setUser(undefined);
            setDeviceList(defaultDeviceList);
            setDeviceData(defaultDeviceData);
            setCurrDevice(1234);
        }
    };

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(onAuthChangeFunc);
        return () => unsub();
    }, [])
    
    return <div className="dashboard-page">
        <NavBarDash user={user} onClickSignIn={handleSignIn} onClickSignOut={handleSignOut} />
        <div className="bottom-dash-page">
            <SideBar 
            deviceList={deviceList} 
            onClickAddDevice={handleAddDevice} 
            onClickDelete={handleRemoveDevice}
            onClickDeviceSelect={handleSelectDevice}
            changeDeviceName={changeDeviceName}
            />
            {
                currDevice?
                <Body 
                deviceItem={deviceList[currDevice]}
                data = {parseFirebaseData(deivceData[deviceList[currDevice].deviceID])}
                />
                : <div className="body"><h1>No device selected</h1></div>
            }
            
        </div>
    </div>;
}