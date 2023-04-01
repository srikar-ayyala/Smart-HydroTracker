import logoPath from '../../../public/logo.png'
import './navBar.css'
export default function NavBar() {
    return <nav>
        <div className="logo-box">
            <img src={logoPath} alt="Logo" />
        </div>
        <div className="nav-links">
            <a href="#" className='nav-link'>About</a>
            <a href="#" className='nav-link'>FAQ</a>
            <a href="#" className='nav-link'>Dashboard</a>
        </div>
    </nav>;
}