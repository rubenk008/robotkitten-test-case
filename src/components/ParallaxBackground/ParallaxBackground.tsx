import * as React from 'react'

import useMousePosition from '../input/MousePosition'
import unityImage from '../../static/bg-element-unity.png'
import unityImageBlue from '../../static/bg-element-unity-blue.png'

import styles from './ParallaxBackground.module.scss'

interface Props {
    heightParrent?: number
}



const ParallaxBackground = ({heightParrent}:Props) => {
    let xMoved = 0;
    let yMoved = 0;

    const { x, y } = useMousePosition();

    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    if(hasMovedCursor){
        xMoved = x / 40;
        yMoved = y / 40;
    }

    let inlineStyle = {
        height: heightParrent,
        transform: `translate(${xMoved}px, ${yMoved}px)`
    }

    return (
        <div className={styles.parallaxBackgroundWrapper} style={inlineStyle}>
            <div className={styles.unityImage}>
                <img src={unityImage} alt="unity"/>
                <img src={unityImageBlue} alt="unity"/>
                <img src={unityImage} alt="unity"/>
            </div>
        </div>
    )
}

export default ParallaxBackground