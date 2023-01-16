const Message = (props) => {

  let message = props.message;
    
  return (
    <div className={props.user.uid===message.uid ? "message_me" : "message_else"}>
      <div className="message_sender">
        <img src={message.avatar} alt="" style={{width: '40px'}}/>
        {message.sender}
      </div>
      <div className="message_body">{message.body}</div>
    </div>
  );
};

export default Message;
