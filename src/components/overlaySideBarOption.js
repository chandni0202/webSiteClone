import React from "react";
import { Link } from "react-router-dom";

const SideNavigationOverlay = (props) => {
    const arrayItems = props.item ? props.item : null;
    return arrayItems && arrayItems.map((item, _) => {
       return (
         <div className="navigation-container"  key={item.name}>
           <div className="link">
             <Link className="linkTo" to={item.url}>
               {item.name}
             </Link>
           </div>
         </div>
       )
       })

}
export default SideNavigationOverlay;