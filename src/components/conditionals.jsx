import Country from './conditionals/conditional1'

const DisplayConditionals = () => {
    const state = ['Oyo', 'Lagos', 'Abuja']

    return (
        <div>
            <Country state={state} />
        </div>
    )
}

export default DisplayConditionals;