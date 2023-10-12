import { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("");

    return(
        <div>
            <form action="">
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    )
}

export default MyForm;