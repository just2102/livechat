import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");

  const { uid, displayName, photoURL } = props.user;

  const onMessageSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Message cannot be blank!");
      return;
    }
    addDoc(collection(db, "messages"), {
      body: message,
      sender: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid: uid,
    }).then(setMessage(""));
  };

  return (
    <div className="send_message">
      {/* <img src={photoURL} alt="" /> */}
      <form onSubmit={onMessageSubmit}>
        <textarea
          onKeyDown={(e)=>{
            if (e.key==='Enter') {
                onMessageSubmit(e)
            }
          }}
          id="message_textarea"
          placeholder="Hi!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button
          type="primary"
          icon={<SendOutlined />}
          htmlType={"submit"}
        ></Button>
      </form>
    </div>
  );
};

export default SendMessage;
