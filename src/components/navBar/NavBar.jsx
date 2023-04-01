import logoPath from '../../../public/logo.png'
import './navBar.css'
export default function NavBar() {
    return <nav>
        <img src={logoPath} alt="Logo" />
        <div className="nav-links">
            <a href="#" className='nav-link'>About</a>
            <a href="#" className='nav-link'>FAQ</a>
            <a href="#" className='nav-link'>Dashboard</a>
        </div>
    </nav>;
}