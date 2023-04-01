import logoPath from '../../public/logo.png'

export default function NavBar() {
    return <nav>
        <img src={logoPath} alt="Logo" />
        <div className="navLinks">
            <a href="#" className='navLink'>About</a>
            <a href="#" className='navLink'>FAQ</a>
            <a href="#" className='navLink'>Dashboard</a>
        </div>
    </nav>;
}