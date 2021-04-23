/* eslint-disable react/jsx-no-comment-textnodes */
import React,{ useState } from "react";
import "./styles/navBar.css";
import logo from "../logo.svg";

const NavBar=() => {
    
    const [collapseBar, setcollapseBar] = useState(false);
    let classNavbar= collapseBar ? 'menu-expanded' : 'menu-collapsed'



function handleClick (){
  setcollapseBar(!collapseBar)
   classNavbar= collapseBar ? 'menu-expanded' : 'menu-collapsed'
}
    
  return (
    <div>
      <div className={classNavbar} id="sidemenu">
      
        <div id="header">
          <div id="title">
            <span>Djoker</span>
          </div>
          <div id="menu-btn" onClick={handleClick}>
            <i className="fas fa-align-justify"></i>
          </div>
        </div>

        <div id="profile">
          <div id=" ">
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          <div id="name">
            <span>Isai Monroy</span>
          </div>
        </div>

        <div id="menu-items">
          <div className="item">
            <a href="/">
              <div className="icon">
              <i class="fas fa-gamepad"></i>
              </div>
              <div className="title">
                <span>Empieza a jugar</span>
              </div>
            </a>
          </div>
          <div className="item-separator"></div>
          <div className="item">
            <a href="/customize">
              <div className="icon">
              <i class="fas fa-users-cog"></i>
              </div>
              <div className="title">
                <span>Perosnaliza Verdad/Reto</span>
              </div>
            </a>
          </div>
          <div className="item-separator"></div>
          <div className="item">
            <a href="/MakeChallenge">
              <div className="icon">
              <i class="fas fa-terminal"></i>
              </div>
              <div className="title">
                <span>Codigo Verdad/Reto</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
