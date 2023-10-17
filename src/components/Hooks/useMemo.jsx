import { useState, useMemo } from "react";
import todo from "./todo";

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const addTodo = () => {
        setCount((t) => [...t, "New Todo"]);
    }

    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <div key={index}>{todo}</div>;
            })}
            <button onClick={addTodo}></button>
        </>
    )
}