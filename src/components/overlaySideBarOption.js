import React, {useState} from "react";
import { Link } from "react-router-dom";

const arrayItems = [{
  name: "Features", url: "./features"
},
{ name: "Pricing", url: "./pricing" },
{ name: "Download", url: "./download" },
{ name: "Company", url: "./company" , arrow: true},
{ name: "Support", url: "./support" , arrow: true},{
  name: "Login", url: "./login"
}];

const SideNavigationOverlay = (props) => {
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
         <div className="navigation-container" style={{marginBottom: "0.5em"}} key={item.name}>
           <div className="link">
             <Link className="linkTo" to={item.url}>
             {item.name}{item.arrow ? <div className="tooltip"><div className="tooltip-content-mweb">
              {item.name === "Company" ? showToolTipText() : showToolTipTextSupport()}
              </div>
              <span className="arrow" onClick={showToolTip}></span>
              </div>
               : ""}
             </Link>
           </div>
         </div>
       )
       })

}
export default SideNavigationOverlay;