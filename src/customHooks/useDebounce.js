import { useEffect, useState } from "react";


const useDebounce = (val, delay) => {
    const [debValue, setDebValue] = useState(val);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebValue(val);
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [val, delay])

    return debValue;
}

export default useDebounce