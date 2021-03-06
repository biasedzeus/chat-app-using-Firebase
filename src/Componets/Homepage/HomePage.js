import React,{useState} from "react";
import "./HomePage.css";
import ChatBox from "../ChatBox/ChatBox";
import SideBar from "../SideBar/SideBar";
import NewChat from "../NewChat/NewChat";
import {Link} from "react-router-dom"
function HomePage() {
  const [newChat, setnewChat] = useState(false);


 





  return (<div class="contakiner">
    <div className="row">
     {newChat ? (<div className="col-3"><SideBar /></div>):(<div className="col-3"><NewChat /></div>)}

      <div class="col-9">
        <ChatBox />
      </div>
    </div>
    <div className="row end-row">
    <div className="col-3">
      <div class="box-blue">
           <div className="newchat">
             <Link className="button-newchat" >

                NEW CHAT +
                </Link>
            </div>
      </div>
    </div>
    <div class="col-9">
    <div class="input-container">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter message...."/>
    <button class="btn btn-outline-secondary bg-outline" type="button" id="button-addon2">SEND</button>
  </div>
    </div>
  </div>
  </div>
  );
}

export default HomePage;
