import Motor from "../components/Hooks/useState";
import Counter from "../components/Hooks/useEffect";
import Testing from "../components/Hooks/useRef";
import MyUseCallback from "../components/Hooks/useCallback";
import UseMemo from "../components/Hooks/useMemo";

const Hooks = () => {
    return (
        <>
            <MyUseCallback />
            <UseMemo />
            <Motor />
            <Counter />
            <Testing />
        </>
    )
}

export default Hooks;