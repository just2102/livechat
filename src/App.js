import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
// import Chatbox from "./Components/Chatbox/Chatbox";
//import SendMessage from "./Components/Message/SendMessage";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Preloader from "./Components/Common/Preloader";
import Footer from "./Components/Footer/Footer";

import { lazy, Suspense } from "react";

const Chatbox = lazy(()=> import('./Components/Chatbox/Chatbox'))
const SendMessage = lazy(()=> import('./Components/Message/SendMessage'))

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app_container">
    <Suspense fallback={<Preloader/>}>
      <Navbar user={user} />
      {!user && <Welcome />}

      {user && <Chatbox user={user} />}
      {user && <SendMessage user={user} />}
    </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
