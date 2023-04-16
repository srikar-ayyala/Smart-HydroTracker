import { Link } from 'react-router-dom'
import './navBarDash.css'

export default function NavBarDash(props) {
    // console.log(props.user && props.user.photoURL);

    return <nav className='dashboard-nav'>
        <Link to={'/'} className='logo'>SMART HYDRO TRACKER</Link>
        <div className="user">
            {
                props.user?
                <>
                <div className="sign-button sign-out" onClick={props.onClickSignOut}>Sign out</div>
                <div className="user-img">
                    <img src={props.user.photoURL} alt="profile-pic" className='profile-pic' referrerPolicy="no-referrer"/>
                </div>
                </>
                :<div className="sign-button sign-in" onClick={props.onClickSignIn}>Sign in</div>
            }
        </div>
    </nav>
}