// Using Logical && Operator

const Country = (props) => {
    const state = props.state;
    return (
        <>
        <h2>Your State</h2>
        {state.length > 0 &&
            <h3>You have {state.length} state in your Country</h3>
        }
        </>
    )
}

export default Country;