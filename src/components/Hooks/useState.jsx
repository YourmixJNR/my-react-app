import { useState } from "react";

const Motor = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    function updateBrand() {
        setCar(previousState => ({...previousState, brand: 'Toyota'}))       
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateBrand}
            >Blue</button>
        </>
    )
};

export default Motor;