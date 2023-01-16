import { Button } from "antd"
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { auth } from './../../firebase';
import {GoogleCircleFilled} from '@ant-design/icons'

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }

    return ( 
        <div className="welcome">
            {<Button type="primary" onClick={googleSignIn} icon={<GoogleCircleFilled />}>Sign in</Button>}
            <p>Sign in with Google to chat with your friends!</p>
        </div>
     );
}
 
export default Welcome;