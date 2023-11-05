import React from "react";
import { useState } from "react";
import SideNavigationOverlay from "./overlaySideBarOption";

const NavigationBarMob = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const style = {
    "zIndex": 1,
    "position": "absolute",
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    top: 0
  }
  const removeExtraItem = () => {
    window.document.getElementById("webresp-cont").style.display = "none"
    setShowMenu(false);

  }
  const showMenuOnClickCross = () => {
    window.document.getElementById("webresp-cont").style.display = "block"
    setShowMenu(true);
  }
  return (<div className="navbar">
    {showMenu ? <div><div className="menu-icon" onClick={removeExtraItem}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    </div>
      : <div style={style}>
        <div style={{ display: "flex", justifyContent: "space-between", margin: "1em" }}><a className="home-header" href="/">* ZEROTIER</a>
          <button className="button-signup">Sign Up</button>
          <div className="cross-icon" onClick={showMenuOnClickCross}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div style={{ margin: "1.5em" }}>
          {props.isMob ? <SideNavigationOverlay item={props.item} /> : null}
        </div>
      </div>
    }
  </div>)

}
export default NavigationBarMob;