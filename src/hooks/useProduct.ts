import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount && newValue > initialValues?.maxCount) {
            return
        }

        // Other Solution
        // let newValue = Math.max(counter + value, 0);

        // if(initialValues?.maxCount) {
        //     newValue = Math.min(newValue, initialValues.maxCount)
        // }

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if (!isMounted.current) return; // Avoid re renders

        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, [])

    const reset = () => {
        setCounter(initialValues?.count || value);
    }


    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }

}