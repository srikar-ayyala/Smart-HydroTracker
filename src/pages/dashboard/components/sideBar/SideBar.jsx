import './sideBar.css'
import { useState } from 'react';

function DeviceItem(props) {
    return <div className="device-item" onClick={() => props.onClickDeviceSelect(props.deviceKey)}>
        {/* {props.toRename?
            <input type="text" />
            :<p>{props.deviceName}</p>
        } */}
        <p>{props.deviceName}</p>
        <div className="device-control">
            {/* {
                props.toRename?
                <button className='device-btn done-btn' onClick={(e) => {
                    console.log(e.target);
                    console.log(e.target.value);
                    props.onClickDeviceDoneRename(props.deviceKey, e.target.value)
                }}>Done</button>
                :<>
                <button className='device-btn rename-btn' onClick={() => props.onClickDeviceToRename(props.deviceKey)}>Rename</button>
                <button className='device-btn delete-btn' onClick={(e) => props.onClickDeviceDelete(e, props.deviceKey)}>Delete</button>
                </>
            } */}
            <button className='device-btn rename-btn'>Rename</button>
            <button className='device-btn delete-btn' onClick={(e) => props.onClickDeviceDelete(e, props.deviceKey)}>Delete</button>
        </div>
    </div>
}

export default function SideBar(props) {
    const [deviceInput, setDeviceInput] = useState('');
    // const [toRename, setToRename] = useState(null);

    
    function handleDeviceInput(e) {
        setDeviceInput(e.target.value);
    }
    
    // function handleDeviceToRename(deviceKey) {
    //     setToRename(x => x?x:deviceKey);
    // }

    // function renameDevice(deviceKey, newName) {
    //     props.changeName(deviceKey, newName);
    //     setToRename(null);
    // }

    function addDevice() {
        props.onClickAddDevice(deviceInput);
        setDeviceInput('');
    }
    
    
    const deviceListElement = props.deviceList.map(x => (
        <DeviceItem 
        key={x.key} 
        deviceName={x.deviceName} 
        deviceKey={x.key} 
        onClickDeviceDelete={props.onClickDeviceDelete}
        onClickDeviceSelect={props.onClickDeviceSelect}
        // onClickDeviceToRename={handleDeviceToRename}
        // onClickDeviceDoneRename={renameDevice}
        // toRename={x.key === toRename}
        />
    ));
    
    return <div className="sidebar">
        <p className='device-manager-title'>Device manager</p>
        <div className="add-device">
            <input type="text" placeholder='Device ID' value={deviceInput} onChange={(e) => handleDeviceInput(e)}/>
            <button onClick={addDevice}>+</button>
        </div>
        <div className="device-list">
            {deviceListElement}
        </div>
    </div>
}