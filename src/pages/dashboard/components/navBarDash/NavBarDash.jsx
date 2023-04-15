import { Link } from 'react-router-dom'
import './navBarDash.css'

export default function NavBarDash(props) {
    // console.log(props.user && props.user.photoURL);

    return <nav className='dashboard-nav'>
        <Link to={'/'} className='logo'>SMART H<sub>2</sub>0 TRACKER</Link>
        <div className="user">
            {
                props.user?
                <>
                <div className="sign-button sign-out" onClick={props.onClickSignOut}>Sign out</div>
                <div className="user-img">
                    <img src={props.user.photoURL} alt="profile-pic" className='profile-pic'/>
                </div>
                </>
                :<div className="sign-button sign-in" onClick={props.onClickSignIn}>Sign in</div>
            }
        </div>
    </nav>
}