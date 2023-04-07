import { useState } from "react";
import uniqid from 'uniqid';
import SideBar from "./components/sideBar/SideBar";
import Body from "./components/body/Body";
import NavBarDash from "./components/navBarDash/NavBarDash";
import './dashboard.css'

let allData = {
    'test': {
        dataX: [Date.now(), Date.now()+100000, Date.now()+200000],
        dataY: [1, 3, 2],
    },
}

export default function Dashboard() {

    const [deviceList, setDeviceList] = useState([{
        deviceID: 'test',
        deviceName: 'test name',
        key: 1234,
    }]);
    const [currDevice, setCurrDevice] = useState(1234);

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

    function changeDeviceName(deviceKey, newName) {
        setDeviceList(prevList => prevList.map(preItem => ({
            ...preItem,
            deviceName: preItem.key===deviceKey? newName: preItem.deviceName,
        })))
    }
    
    function getCurrDeviceItem() {
        return deviceList.find(x => x.key === currDevice);
    }
    
    return <div className="dashboard-page">
        <NavBarDash />
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
                deviceItem={getCurrDeviceItem()}
                data = {allData[getCurrDeviceItem().deviceID]}
                />
                : <div className="body"><h1>No device selected</h1></div>
            }
            
        </div>
    </div>;
}