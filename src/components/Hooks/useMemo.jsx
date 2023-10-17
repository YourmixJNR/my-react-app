import { useState, useMemo } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <div key={index}>{todo}</div>;
            })}
            <button onClick={addTodo}>Add Todo</button>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
};

export default UseMemo;