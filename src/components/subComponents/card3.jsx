import React from "react";

const Card3 = (props) => {
    const onClickLi = () => window.location.href = "https://www.zerotier.com/";
    return (<><section className="section6">
        <h1>Pricing</h1>
        <h3>ZeroTier makes networking easy for everyone - anywhere.</h3>
        <div className={props.isMob ? "section7-container-mweb" : "section7-container"}>
            <span className="section7">
                <img src="icon.png" alt="icon"/>
                <h1>Basic</h1>
                <div>For Everyone / ZeroTier Hosted Controller</div>
                <div>✓ 1 Admin</div>

                <div>✓ 25 Nodes</div>

                <div>✓ Unlimited Networks</div>

                <div>✖ Business SSO: n/a</div>

                <div>✓ Community Support </div>

                <div>FREE</div>
                <button className="button-section7" onClick={onClickLi}>Free Sign up</button></span>
                <span className="section7">
                <img src="icon.png"  alt="icon"/>
                <h1>Basic</h1>
                <div>For Everyone / ZeroTier Hosted Controller</div>
                <div>✓ 1 Admin</div>

                <div>✓ 25 Nodes</div>

                <div>✓ Unlimited Networks</div>

                <div>✖ Business SSO: n/a</div>

                <div>✓ Community Support </div>

                <div>FREE</div>
                <button className="button-section7" onClick={onClickLi}>Sign up</button>
                </span>
                <span className="section7">
                <img src="icon.png"  alt="icon"/>
                <h1>Basic</h1>
                <div>For Everyone / ZeroTier Hosted Controller</div>
                <div>✓ 1 Admin</div>

                <div>✓ 25 Nodes</div>

                <div>✓ Unlimited Networks</div>

                <div>✖ Business SSO: n/a</div>

                <div>✓ Community Support </div>

                <div>FREE</div>
                <button className="button-section7" onClick={onClickLi}>Contact Sales</button></span>
        </div>
    </section>
    </>
    )
}

export default Card3;