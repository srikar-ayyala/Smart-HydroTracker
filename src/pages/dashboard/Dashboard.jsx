import { useState } from "react";
import uniqid from 'uniqid';
import SideBar from "./components/sideBar/SideBar";
import Body from "./components/body/Body";
import NavBarDash from "./components/navBarDash/NavBarDash";
import './dashboard.css'

export default function Dashboard() {

    const [deviceList, setDeviceList] = useState([]);
    const [currDevice, setCurrDevice] = useState(null);

    function handleAddDevice(deviceInput) {
        if(deviceInput === '') return;
        setDeviceList(x => [...x, {
            deviceID: deviceInput,
            deviceName: deviceInput,
            key: uniqid(),
        }]);
    }

    function handleRemoveDevice(e, deviceKey) {
        e.stopPropagation();
        if(currDevice === deviceKey) {
            setCurrDevice(null);
        }
        setDeviceList(x => x.filter(y => y.key != deviceKey));
    }

    function handleSelectDevice(deviceKey) {
        setCurrDevice(deviceKey);
    }

    // function changeName(deviceKey, newName) {
    //     // console.log(newName);
    //     setDeviceList(prevList => prevList.map(preItem => ({
    //         ...preItem,
    //         deviceName: preItem.key===deviceKey? newName: preItem.deviceName,
    //     })))
    // }

    return <div className="dashboard-page">
        <NavBarDash />
        <div className="bottom-dash-page">
            <SideBar 
            deviceList={deviceList} 
            onClickAddDevice={handleAddDevice} 
            onClickDeviceDelete={handleRemoveDevice}
            onClickDeviceSelect={handleSelectDevice}
            // changeName={changeName}
            />
            {
                currDevice?
                <Body 
                deviceItem={deviceList.find(x => x.key === currDevice)}
                />
                : <div className="body"><h1>No device selected</h1></div>
            }
            
        </div>
    </div>;
}