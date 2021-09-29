import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//Import Components
import HomePage from "./Componets/Homepage/HomePage";
import TopBar from "./Componets/TopBar/TopBar";
import Login from "./Componets/Login";

//REACT ROUTER IMPORTS
import { Switch, Route } from "react-router";

// Initialize Firebase    
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./Config";

// INitailize firbase
import { collection, addDoc } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const userRef = collection(db, "users");
console.log("UserCollection ===>", userRef);

function App() {

  const [user, setUser] = useState(null)

   


  async function addNewUser(username,fullname) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username: "",
        userID: "",
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // function ChatRoom() {

  //   const messagesRef = firestore.collection('messages');
  //   const query = messagesRef.orderBy('createdAt').limitToLast(25);
  
  //   const [messages] = useCollectionData(query, { idField: 'id' });
  
  //   return (<>
  //     <main>
  //       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  //     </main>
  
  //   </>)
  // }

  
  // function ChatMessage(props) {
  //   const { text, uid, photoURL } = props.message;
  
  //   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  //   return (<>
  //     <div className={`message ${messageClass}`}>
  //       <img src={photoURL} />
  //       <p>{text}</p>
  //     </div>
  //   </>)
  // }

  

  return (
    <div>
      <TopBar />
      {/* <button onClick={() =>addNewUser()}>Clik me</button> */}

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login addNewUser ={addNewUser()} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
