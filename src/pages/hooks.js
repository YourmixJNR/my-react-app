import Motor from "../components/Hooks/useState";
import Counter from "../components/Hooks/useEffect";
import Testing from "../components/Hooks/useRef";
import MyUseCallback from "../components/Hooks/useCallback";

const Hooks = () => {
    return (
        <>
            <MyUseCallback />
            <Motor />
            <Counter />
            <Testing />
        </>
    )
}

export default Hooks;