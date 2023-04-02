import './hero.css'
import down_arrow_path from '../../images/down-arrow.png'

export default function Hero() {
    return <section className="hero-section">
        <h1>IOT HYDROMETER</h1>
        <img src={down_arrow_path} alt="down-arrow" className='down-arrow'/>
    </section>
}