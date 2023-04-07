import './body.css'
import Chart from './chart'

const defaultData = {
  dataX: [Date.now(), Date.now()+100000, Date.now()+200000, Date.now()+300000, Date.now()+400000, Date.now()+500000, Date.now()+600000, Date.now()+700000, Date.now()+800000, Date.now()+900000],
  dataY: [5, 2.0, 5, 2.0, 5, 2.0, 5, 2.0, 5, 2.0],
};

export default function Body(props) {
  console.log(props.data);
  return <div className="body">
    <div className="device-info-display">
      <h1>{props.deviceItem.deviceName}</h1>
      <p>{props.deviceItem.deviceID}</p>
    </div>
    <div className="chart-box">
      {
        (props.data && props.data.dataX && props.data.dataY)?
        <Chart dataX={props.data.dataX} dataY={props.data.dataY}/>:
        <Chart dataX={defaultData.dataX} dataY={defaultData.dataY}/>
      }
    </div>
  </div>
}