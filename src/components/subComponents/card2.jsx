import React from "react";

const Card2 = () => {
    return (<><section className="section5">
        <div><h1>ZeroTier Enterprise</h1>
            <div>For high-volume VPN, IoT, IIoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.</div>
            <button className="button-signup" style={{marginTop: "8px", marginLeft:0}}>Contact Sales</button>
        </div>
        <img src="https://dummyimage.com/200x100/000/fff" alt="placeholder"></img>
    </section>
        <section className="section5">
            <img src="https://dummyimage.com/200x100/000/fff" alt="placeholder"></img>
            <div style={{marginLeft: "3em"}}>
                <h1>Service Providers</h1>
                <div>For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.</div>
                <button className="button-signup" style={{marginTop: "8px", marginLeft:0}}>Contact SP Sales</button>
            </div>
        </section>
    </>
    )
}

export default Card2;