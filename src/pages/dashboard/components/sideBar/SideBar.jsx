import './sideBar.css'
import { useState } from 'react';

function DeviceItem(props) {
    return <div className="device-item" onClick={() => props.onClickDeviceSelect(props.deviceKey)}>
        {props.toRename?
            <input className='rename-input' type="text" placeholder='New name' value={props.renameInput} onChange={(e) => props.onChangeRenameInput(e)}/>
            :<p>{props.deviceName}</p>
        }
        {
            props.toRename?
            <button className='device-btn done-btn' onClick={(e) => {
                e.stopPropagation();
                props.onClickDone(props.deviceKey, props.renameInput);
            }}>Done</button>
            : <div className="device-control">
            <button className='device-btn rename-btn' onClick={() => props.onClickRename(props.deviceKey)}>Rename</button>
            <button className='device-btn delete-btn' onClick={(e) => props.onClickDelete(e, props.deviceKey)}>Delete</button>
        </div>
        }
    </div>
}

export default function SideBar(props) {
    const [deviceInput, setDeviceInput] = useState('');
    const [toRename, setToRename] = useState(null);
    const [renameInput, setRenameInput] = useState('');

    
    function handleDeviceInput(e) {
        setDeviceInput(e.target.value);
    }
    
    function handleClickRename(deviceKey) {
        setToRename(x => x?x:deviceKey);
    }

    function handleRenameInput(e) {
        setRenameInput(e.target.value);
    }

    function handleClickDone(deviceKey, newName) {
        if(newName === '') return;
        props.changeDeviceName(deviceKey, newName);
        setRenameInput('');
        setToRename(null);
    }

    function handleClickAdd() {
        props.onClickAddDevice(deviceInput);
        setDeviceInput('');
    }
    
    
    const deviceListElement = props.deviceList.map(x => (
        <DeviceItem 
        key={x.key} 
        deviceName={x.deviceName} 
        deviceKey={x.key} 
        onClickDelete={props.onClickDelete}
        onClickDeviceSelect={props.onClickDeviceSelect}
        onClickRename={handleClickRename}
        onClickDone={handleClickDone}
        toRename={x.key === toRename}
        renameInput={renameInput}
        onChangeRenameInput={handleRenameInput}
        />
    ));
    
    return <div className="sidebar">
        <p className='device-manager-title'>Device manager</p>
        <div className="add-device">
            <input type="text" placeholder='Device ID' value={deviceInput} onChange={(e) => handleDeviceInput(e)}/>
            <button onClick={handleClickAdd}>+</button>
        </div>
        <div className="device-list">
            {deviceListElement}
        </div>
    </div>
}