import React from 'react'
import Contact from '../Contact/Contact'
import {Link} from "react-router-dom"

function NewChat({handleNewChat}) {
    return (
        <div>
        
           <Link onClick={handleNewChat}> <Contact/></Link>
            
        </div>
    )
}

export default NewChat
