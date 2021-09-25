import React from 'react';
import "./Contact.css"

function Contact({image}) {
    return (
        <div className="contact-container col-8">
        <img
        className="contact-image" 
        src = {image}/>            
        <span className="user">Slvester Stuart</span>
        <div class="contact-msg"><h6><i>You were crazyy</i></h6>
        <span class="time">6 min. ago</span>
        </div>
        </div>
        
    )
}

export default Contact
