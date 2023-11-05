import React, { useState, useEffect } from "react";
import Card from "./subComponents/card";
import Card2 from "./subComponents/card2";
import Card3 from "./subComponents/card3";
import Card4 from "./subComponents/card4";
import Footer from "./subComponents/footer";

const Home = () => {
  const onClickLi = () => window.location.href = "https://www.zerotier.com/";
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
  return (
    <div id="webresp-cont">
      <section className={isMob ? "home-container-mweb" : "home-container"} >
        {isMob ? <h2>Securely connect any device, anywhere.</h2> : <h1>Securely connect any device, anywhere.</h1>}
        {isMob ? <h3>ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.</h3> :
          <h2>ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.</h2>
        }
        <div><button className="button-signup" style={{ marginBottom: "1em" }} onClick={onClickLi}>Get Zero Tier</button> <span onClick={onClickLi} className="learn-more">Learn More {">"} </span></div>
      </section>
      <section className={isMob ? "section2-mweb" : "section2"} >
        <div className={isMob ? "section2-div-mweb" : "section2-div"}>
          <img src="https://dummyimage.com/200x100/000/fff" alt="placeholder" width={isMob ? { width: "100%" } :{ width: "40%" }}></img>
          <div style={isMob ? { width: "100%" } :{ width: "40%" }}>
            <h1>It just works</h1>
            <h2>ZeroTier combines the capabilities of VPN and SD-WAN, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.</h2>
          </div>
        </div><div className={isMob ? "section2-div-mweb" : "section2-div"}>
          <div style={isMob ? { width: "100%" } :{ width: "40%" }}>
            <h1>It just works</h1>
            <h2>ZeroTier combines the capabilities of VPN and SD-WAN, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.</h2>
          </div>
          <img src="https://dummyimage.com/200x100/000/fff" alt="placeholder" width={isMob ? { width: "100%" } :{ width: "40%" }}></img></div>
      </section>
      <Card />
      <Card4 isMob={isMob}/>
      <Card3 isMob={isMob}/>
      <Card2 isMob={isMob}/>
      <section className={isMob ? "section4-mweb":"section4"} style={{ display: "flex", flexDirection: "column" }}> <h3>Open Source Community Edition</h3>
        Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for non-Commercial Use cases.
        <span onClick={onClickLi} style={{ cursor: "pointer" }}><button className="button-signup" style={{ color: "#fff", background: "#000", border: "1px solid #fff", marginTop: "1em" }}>ZeroTier Github</button> Read Documentation</span>
      </section>
      <section className={isMob ? "section4-mweb":"section4"}> Newsletter Signup
        Join over 350,000 community members worldwide and receive the latest news from Team ZeroTier.
        <input type="email" placeholder="Email Address" style={{ borderRadius: "16px" }} /><button className="button-signup">Subscribe</button>
      </section>
      <Footer isMob={isMob} />
    </div>
  )
}
export default Home;