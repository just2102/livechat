import { useEffect, useState } from "react";
import Message from "./../Message/Message";
import SendMessage from "./../Message/SendMessage";
import { db } from "../../firebase";
// import { collection, getDocs } from 'firebase/firestore';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

const Chatbox = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        limit(50)
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe;
    };
    getMessages();
    console.log(messages);
  }, []);
  return (
    <div className="chatbox">
      {messages.map((message) => {
        return <Message message={message} user={props.user}></Message>;
      })}
        <SendMessage user={props.user} />
    </div>
  );
};

export default Chatbox;
