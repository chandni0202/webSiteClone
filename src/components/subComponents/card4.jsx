import React from "react";

const Card4 = (props) => {
    return (<section>
    <h1 style={{color: "#fff"}}>Secure networks for teams of any size</h1>
    <div style={props.isMob === true ? {display: "flex", color: "#fff", flexDirection: "column"} : {display: "flex", color: "#fff"}} >
        <div>
            <img src="icon.png" alt="icon" />
            <h2>Individuals</h2>
            <h3>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere</h3>
            <h3>Conveniently share files and data, or even play LAN games with others</h3>
            <h3>Manage secure network access to users of choice</h3>
        </div>
        <div className= {props.isMob === true ? "container-width-mweb" : "container-width"}>
            <img src="icon.png" alt="icon" />
            <h2>Individuals</h2>
            <h3>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere</h3>
            <h3>Conveniently share files and data, or even play LAN games with others</h3>
            <h3>Manage secure network access to users of choice</h3>
        </div>
        <div>
            <img src="icon.png" alt="icon" />
            <h2>Individuals</h2>
            <h3>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere</h3>
            <h3>Conveniently share files and data, or even play LAN games with others</h3>
            <h3>Manage secure network access to users of choice</h3>
        </div>
        <div>
            <img src="icon.png" alt="icon" />
            <h2>Individuals</h2>
            <h3>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere</h3>
            <h3>Conveniently share files and data, or even play LAN games with others</h3>
            <h3>Manage secure network access to users of choice</h3>
        </div>
    </div>
    </section>
    )
}

export default Card4;