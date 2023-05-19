import { Link } from 'react-router-dom'
import './goToDashboard.css'

export default function GoToDashboard() {
    return <section className="go-to-dashboard-section">
        <h2>Start managing your water today</h2>
        {/* <p>what gets measured gets managed</p> */}
        {/* <div className="go-to-dashboard-btn">Dashboard</div> */}
        <Link to={'/dashboard'} className='go-to-dashboard-btn'>Dashboard</Link>
    </section>
}