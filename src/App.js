import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Chatbox from './Components/Chatbox/Chatbox';

import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Preloader from './Components/Common/Preloader';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="app_container">
      <Navbar user={user}/>
      {!user && <Welcome/>}
      {user===null && <Preloader/> }
      {user  && <Chatbox user={user}/>}
    </div>
  );
}

export default App;
