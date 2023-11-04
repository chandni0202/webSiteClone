import React from "react";
import { useState } from "react";
import SideNavigationOverlay from "./overlaySideBarOption";

const NavigationBarMob = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const showMenuOnClick = () => setShowMenu(false);
  const showMenuOnClickCross = () => setShowMenu(true);
  return (<div className="navbar">
    {showMenu ? <div><div className="menu-icon" onClick={showMenuOnClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
     </div>
      : <div><div className="cross-icon" onClick={showMenuOnClickCross}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div>
      <SideNavigationOverlay item={props.item}/>
      </div>
      </div>
    }
  </div>)

}
export default NavigationBarMob;