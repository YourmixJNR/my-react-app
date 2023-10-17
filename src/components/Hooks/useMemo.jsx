import { useState, useMemo } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <>
            
        </>
    )
}