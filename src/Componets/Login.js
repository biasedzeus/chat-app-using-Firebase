import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
// const register = false;

function Login({addNewUser}) {
  const [type, setType] = useState(false);
  const [username, setUser] = useState("");
  const [fullName,setFullName] =useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    addNewUser(username,fullName);






     setType(true);
  };

  return (
    <div className="login-container">
      <div className="container login ">
        {!type && (
          <div className="heading">
            <h1>Login / Register</h1>
          </div>
        )}
        {type && (
          <div className="heading">
            <h1>Register Here</h1>
          </div>
        )}
        <div>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Enter Username"
            onChange={(e) => setUser(e.target.value)}
          />
          {type && (
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter full Name:"
              onChange={e => setFullName(e.target.value)}
            />
          )}
        </div>

        <div className="d-grid gap-2 col-4 mx-auto buttony">
          <button
            disabled={type}
            className="btn btn-outline-light"
            type="button"
          >
            Log In
          </button>
          <button
            className="btn btn-outline-light"
            onClick={handleRegister}
            type="button"
          >
            Register!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
