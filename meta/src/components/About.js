import React from "react";
import Button from "./Button";

export default function About() {
    return (
        <div class="about">
            <div className="about-h1">
                <h1 >Creating next generation intelligent sensors using cutting-edge optical technologies.</h1>
            </div>
            <div className="text">
                <p>MetaEdge Technologies LLC. is an optical instrumentation company that designs,<br />
                    develops and commercializes intelligent optical sensors that make use of high -<br />precision
                    nanoscale featured components. </p>
            </div>
            <div className="second-text">
                <p>We combine intelligent platforms with active, diffractive and meta optics to create
                    low <br /> cost optical instruments with new sensing capabilities, improved performance,<br />
                    increased efficiency and decreased size.</p>
            </div>
            <Button styleName={"intelligentBtn"} name={"Intelligent "} />
            <Button styleName={"sensorsBtn"} name={"Sensors "} />
        </div >
    )
}