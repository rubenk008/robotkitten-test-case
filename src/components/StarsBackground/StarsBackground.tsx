import * as React from 'react'
import starsImage from '../../static/stars-tile-2.jpg'

import styles from './StarsBackground.module.scss'

const StarsBackground = () => {
    return (
        <div className={styles.starsContainer}>
            <img className={styles.starsBackgroundImg} src={starsImage} alt=""/>
        </div>
    )
}

export default StarsBackground