import { memo } from "react";

const Todos = ({ todos, addTodo}) => {
    return (
        <>
            <h2>My Todo</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}></button>
        </>
    )
}

export default memo(Todos);