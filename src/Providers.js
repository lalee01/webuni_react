import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./Hooks/UseAuth";
import {ModalContextProvider} from "./Hooks/UseModal";

export default function Providers({children}) {
    return (
    <AuthContextProvider>
        <ModalContextProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ModalContextProvider>
    </AuthContextProvider>
    )
}