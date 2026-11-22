import React, { useState } from 'react';

function expandable(props) {
    const [setActive, setActiveState] = useState("");

    function activeAcordion() {
        setActiveState(setActive === "" ? "active" : "");
    }

    return (
        <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay} >
            <div className={`expandable ${setActive}`} onClick={activeAcordion}>
                <div className="expandable-heading">
                    <h3>{props.title}</h3>
                    <i className="fas fa-angle-down"></i>
                </div>
                <p className="accordioin-content">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default expandable
