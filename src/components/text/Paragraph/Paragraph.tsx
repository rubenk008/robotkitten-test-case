import * as React from 'react'

import classNames from 'classnames'
import styles from './Paragraph.module.scss'

interface Props{
    text: string
    /** For custom styling */
    className?: string
}

const Paragraph = ({text, className}: Props) => {
    return (
        <p className={classNames(className, styles.text)}>{text}</p>
    )
}

export default Paragraph