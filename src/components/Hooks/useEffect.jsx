import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(
        () => {
            return setCalculation(()=> count * 2);
        }, [count]
    )

    function handleCount() {
        setCount((c) => c + 1);
    }

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={handleCount}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
};

export default Counter;