import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text"
                value={name}
                onChange={handleChange}
                />
                <input
                type="submit"
                />
            </form>
        </div>
    )
}

export default MyForm;