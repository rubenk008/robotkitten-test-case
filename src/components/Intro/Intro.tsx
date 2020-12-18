import * as React from 'react'

import Copy from '../Api/Copy'
import Paragraph from '../text/Paragraph';
import styles from './Intro.module.scss'


const Intro = () => {
    return (
        <div className={styles.introContainer}>
            <Paragraph text={Copy.intro.content} className={styles.introParagraph}/>
        </div>
    )
}

export default Intro