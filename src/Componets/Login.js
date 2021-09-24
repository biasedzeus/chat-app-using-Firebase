import React from 'react'

function Login() {
    return (<div className="login-container">
        <div className="container login ">
            <div className="heading"><h1>Login / Register</h1></div>
            <div>
            <input type="text" class="form-control" id="text" placeholder="Enter Username"></input>
           
            
           </div>

           <div class="d-grid gap-2 col-4 mx-auto buttony">
  <button class="btn btn-outline-light" type="button">Log In</button>
  <button class="btn btn-outline-light" type="button">Register!</button>
</div>
        
            
        </div>
        
        </div>
    )
}

export default Login
