import { Link } from 'react-router-dom'
import './footerBar.css'
import logoPath from '../../images/logo.png'

export default function FooterBar(props) {
    return <footer>
        <div className="logo-box">
            <img src={logoPath} alt="Logo" />
        </div>
        <div className="footer-links">
            {/* <p className="footer-link">Credits</p> */}
            <p className="footer-link" onClick={() => props.onLinkClick('about')}>About</p>
            <p className="footer-link" onClick={() => props.onLinkClick('faq')}>FAQ</p>
            <Link to={'/dashboard'} className='footer-link' >Dashboard</Link>
        </div>
    </footer>
}