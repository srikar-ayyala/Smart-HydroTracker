import './body.css'
import labels from './data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Water level in the past week",
    }
  },
  tension: 0.2,
};
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Body(props) {
  return <div className="body">
    <div className="device-info-display">
      <h1>{props.deviceItem.deviceName}</h1>
      <p>{props.deviceItem.deviceID}</p>
    </div>
    <div className="chart-box">
      <Line options={options} data={data} className='graph'/>
    </div>
  </div>
}