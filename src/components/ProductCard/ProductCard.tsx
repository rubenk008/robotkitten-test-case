import * as React from 'react'

import Button from '../input/Button'
import classNames from 'classnames'
import styles from './ProductCard.module.scss'

interface Props {
    productId: string
    productName: string
    position: string
}

const ProductCard = ({productId, productName, position}:Props) => {

    const imageLink = `../../static/productImg/${productId}.png`
    const productLink = `/catalog/${productId}`
    const productPos = (position === 'left') ? styles.productPosLeft : styles.productPosRight
 
    return (
        <div className={classNames(styles.productContainer, productPos)}>
                <div className={styles.productImageWrapper}>
                    <div className={styles.productRadial}>
                        <div className={classNames(styles.outerCircle, styles.circle)}></div>
                        <div className={classNames(styles.secondCircle, styles.circle)}></div>
                        <div className={classNames(styles.innerCircle, styles.circle)}></div>
                    </div>
                    <picture className={styles.productImage}>
                            <img src={imageLink} alt={productId}/>
                    </picture>
                    <div className={styles.productCTA}>
                        <Button link={productLink} text="shop now"/>
                     </div>
                </div>
                <div className={styles.productNameWrapper}>
                    <span className={styles.productName}>{productName}</span>
                </div>
        </div>
    )
}

export default ProductCard