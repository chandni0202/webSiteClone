import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const arrayItems = props.item ? props.item : null;
  const [showToolT, setShowToolTip] = useState(false);
  const showToolTip = () => setShowToolTip(!showToolT);
  const showToolTipText = () => {
    return (<ul><li>Contact</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Blog</li>
      <li>Media Kit</li>
    </ul>)
  }
  const showToolTipTextSupport = () => {
    return (<ul><li>Documentation</li>
      <li>Knowledge Base</li>
      <li>Community</li>
      <li>Getting Started</li>
    </ul>)
  }
  return arrayItems && arrayItems.map((item, _) => {
    return (
      <div className="navigation-container" key={item.name}>
        <div className="link">
          <Link className="linkTo" to={item.url}>
            {item.name}{item.arrow ? <div className="tooltip"><div className="tooltip-content"><div className="arrown"></div>
              {item.name === "Company" ? showToolTipText() : showToolTipTextSupport()}</div><div className="arrow" onClick={showToolTip}></div></div> : ""}
          </Link>
        </div>
      </div>
    )
  })
}
export default NavigationBar;