import {
    Chart as ChartJS,
    LineElement,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip
)

export default function Chart(props) {
    const data = {
        labels: props.dataX,
        datasets: [
            {
                label: 'Water level (cm)',
                data: props.dataY,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0.3,
            }
        ]
    }
    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
    return <Line data={data} options={options}></Line>
}