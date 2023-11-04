import React from "react";
import { useEffect, useState } from "react";
import NavigationBar from "./navigationBar";
import NavigationBarMob from "./navigationBarMob";
// const isMobile = window.navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/); // no need

const UserAgent = (props) => {
    const [isMob, setIsMob] = useState(false);
    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 990) {
                setIsMob(true);
            } else {
                setIsMob(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (isMob) {
        return <><div className="header-page"> <button className="button-signup">Sign Up</button><NavigationBarMob item={props.item} /></div><div>
        </div></>
    } else {
        return <><div className="header-page"><NavigationBar item={props.item} /></div><div><button className="button-signin">Login</button>
            <button className="button-signup">Sign Up</button>
        </div></>

    }
}
export default UserAgent;