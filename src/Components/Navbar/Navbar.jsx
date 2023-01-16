import { Button } from "antd";
import { auth } from './../../firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Navbar = (props) => {
    let user = props.user

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }
    const googleSignOut = () => {
        auth.signOut()
    }
    return ( 
        <div className="navbar">
            <h3>LiveChat</h3>
            {!user && <Button type="primary" onClick={googleSignIn}>Sign in</Button>}
            {user && 
            <div>
                <span>Hi, {user.displayName}</span>
                <Button type="link" onClick={googleSignOut}>Sign out</Button> 
            </div>} 
        </div>
     );
}
 
export default Navbar;