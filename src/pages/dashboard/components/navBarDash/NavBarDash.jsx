import './navBarDash.css'
export default function NavBarDash() {
    return <nav className='dashboard-nav'>
        <p className="logo">IOT HYDROMETER</p>
        <div className="user">
            <div className="sign-button sign-out">Sign out</div>
            <div className="user-img">
                <img src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-pic" className='profile-pic'/>
            </div>
        </div>
    </nav>
}