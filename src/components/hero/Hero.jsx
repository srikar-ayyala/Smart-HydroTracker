import './hero.css'
import down_arrow_path from '../../images/down-arrow.png'

export default function Hero() {
    return <section className="hero-section">
        <h1 className='waves wave1'>SMART HYDRO TRACKER</h1>
        <h1 className='waves wave2'>SMART HYDRO TRACKER</h1>
        <h1 className='waves wave3'>SMART HYDRO TRACKER</h1>
        <h1 className='behind'>SMART HYDRO TRACKER</h1>
        <img src={down_arrow_path} alt="down-arrow" className='down-arrow'/>
    </section>
}