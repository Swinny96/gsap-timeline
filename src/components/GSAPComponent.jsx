import React, { useEffect } from "react";
import './GSAPComponent.css';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

function GSAPComponent(props) {
    const header = React.createRef();
    const circle = React.createRef();
    const star = React.createRef();

    useEffect(() => {
        gsap.to(header.current, {color: '#888', duration: 2})

        gsap.to(circle.current, {morphSVG: star.current, duration: 2})
    }, [header, circle, star]);

    return (<>
        <h1 ref={header}>
            Hello GSAP World!
        </h1>

        <svg>
            <path ref={circle} className="circle" d="M490 281a80 80 0 11-161 0
            80 80 0 01161 0z"/>
            <path ref={star} className="star" d="M410 198l26 54 60 9-43 42 10
            60-53-28-54 28 10-60-43-42 60-9 27-54z" />
        </svg>
    </>);
}

export default GSAPComponent;