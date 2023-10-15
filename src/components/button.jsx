const DefaultButton = () => {
    function toAlert(alertThis) {
        alert(alertThis);
    }

    return (
        <button onClick={() => toAlert('Hello World')}>Button</button>
    )
}

export default DefaultButton;