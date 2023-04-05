import { Link } from 'react-router-dom'
import logoPath from '../../images/logo.png'
import './navBar.css'
export default function NavBar(props) {
    return <nav className='main-page-nav'>
        <div className="logo-box">
            <img src={logoPath} alt="Logo" />
        </div>
        <div className="nav-links">
            <p className="nav-link" onClick={() => props.onLinkClick('about')}>About</p>
            <p className="nav-link" onClick={() => props.onLinkClick('faq')}>FAQ</p>
            <Link to={'/dashboard'} className='nav-link' >Dashboard</Link>
        </div>
    </nav>;
}