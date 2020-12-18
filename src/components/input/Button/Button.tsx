import * as React from 'react'

import { ReactComponent as ButtonIcon } from './btn.svg'
import styles from './Button.module.scss'

interface Props{
    link: string
    text: string
}

const Button = ({link, text}:Props) => {
    return (
        <a className={styles.btn} href={link}>
            <ButtonIcon  className={styles.btnIcon}/>
            <span>{text}</span>
        </a>
    )
}

export default Button