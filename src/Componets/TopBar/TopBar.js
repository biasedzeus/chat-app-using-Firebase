import React from "react";
import "./TopBar.css"
function TopBar() {
  return (
    <div>
      {/* <div class="topbar container-fluid">
            <div className="username-container">
            <h2 className="username">@Username</h2>
            </div>
            </div> */}
      <nav class="navbar navbar-light sticky-top " >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            @UserName
          </a>
        </div>
      </nav>
    </div>
  );
}

export default TopBar;
