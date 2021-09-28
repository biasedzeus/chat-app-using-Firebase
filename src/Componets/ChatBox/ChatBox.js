import React from "react";
import "./ChatBox.css";

function ChatBox() {
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    
  }
  return (
    <div className="col-9  fluid-container message-box">
      <div className="container-left">
        <div className="message-container">well hello There steven</div>
      </div>
      <div className="container-right">
        <div className="message-container">hello There ,Mike</div>
      </div>
    </div>
  );
}

export default ChatBox;
