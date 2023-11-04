import React from "react";

const Footer = () => {
    const onClickLi = () => window.location.href = "https://www.zerotier.com/";
    return (<div>
        <div className="footer-first-item">
            <div className="footer-first-item-sub">
                <div  onClick={onClickLi} style={{ fontSize: "24px", cursor: "pointer",  marginBottom: "8px"}}>
                <img src="github.png" alt="istImage" width="3%" />zerotier</div>
                <div>Securely Connecting The World's Devices.</div>
            </div>

            <div className="footer-first-item-sub">
                <ul className="ul-list">
                    <li style={{cursor: "none", color: "#fff"}}>GET STARTED</li>
                    <li onClick={onClickLi}>Download</li>
                    <li onClick={onClickLi}>GitHub</li>
                    <li onClick={onClickLi}>SDK</li>
                    <li onClick={onClickLi}>Partners</li>
                </ul>
            </div>
            <div className="footer-first-item-sub">
                <ul className="ul-list">
                    <li style={{cursor: "none", color: "#fff"}}>SUPPORT</li>
                    <li onClick={onClickLi}>Documentation</li>
                    <li onClick={onClickLi}>Knowledge Base</li>
                    <li onClick={onClickLi}>Community</li>
                    <li onClick={onClickLi}>Getting Started</li>
                </ul>
            </div>
            <div className="footer-first-item-sub">
                <ul className="ul-list">
                    <li style={{cursor: "none", color: "#fff"}}>COMPANY</li>
                    <li onClick={onClickLi}>Contact</li>
                    <li onClick={onClickLi}>About Us</li>
                    <li onClick={onClickLi}>Careers</li>
                    <li onClick={onClickLi}>Blog</li>
                    <li onClick={onClickLi}>Media Kit</li>
                </ul>
            </div>
        </div>
        <div style={{ display: "flex", color: "#fff" }}>
            <div className="image-link"><div><img src="github.png" alt="istImage" width="5%" />
                <img src="github.png" alt="istImage" width="5%" />
                <img src="github.png" alt="istImage" width="5%" />
                <img src="github.png" alt="istImage" width="5%" />
                <img src="github.png" alt="istImage" width="5%" /></div>
                <div style={{marginTop: "1em"}}>© XXXX ZeroTier, Inc. All rights reserved.</div>
            </div>
            <div className="tnc"><span className="tnc-span" style={{marginRight: "8px"}} onClick={onClickLi}>Terms</span><span className="tnc-span" onClick={onClickLi}>Privacy Policy</span></div>
        </div>
    </div>
    )
}

export default Footer;