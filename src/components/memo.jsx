import { useState } from "react";
import DemoMemo from './React Memo'

const memo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
            <DemoMemo todos={todos} />
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}