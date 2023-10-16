import { useState, useEffect, useRef } from "react";

const Testing = () => {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);

    useEffect(()=> {count.current = count.current + 1});

    return (
        <form>
        <input
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <h1>Count: {count.current}</h1>
    </form>
    )
};

export default Testing;