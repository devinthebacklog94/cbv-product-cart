import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    /*
        const isMaxReaced = useCallback(
            () => !!maxCount && counter === maxCount,
            [counter, maxCount]
        )
    */


    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                disabled={maxCount}
                className={`${styles.buttonAdd} ${maxCount && styles.disabled}`}
                onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
}