import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function SlideMenu() {
  var element = document.getElementById("sidebar");
  element.classList.toggle("active");
}

function SlideMenuBar() {
  return (
    <div className="navbar">
        <div className="menuBar" id="sidebarCollapse" onClick={SlideMenu}><FontAwesomeIcon icon={faBars} /> Menu</div>
      {/* <button id="sidebarCollapse" onClick={SlideMenu} className="btn btn-info">
        <FontAwesomeIcon icon={faBars} />
      </button> */}
      <div className="nav ml-auto">Logout</div>
    </div>
  );
}

export default SlideMenuBar;
