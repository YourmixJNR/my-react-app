import React from "react";
class Car extends React.Component {
    constructor() {
        super();
        this.state = {color : 'red'};
    }

    render() {
        return (
            <div>Car Component is {this.state.color}</div>
        );
    }
}

export default Car;
