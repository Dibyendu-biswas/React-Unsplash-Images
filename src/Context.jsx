import { createContext, useContext } from "react";

const Appcontext = createContext()

export const AppProvider = () => {
    const toggle = "hellow world"
    return (
        <Appcontext.Provider value={{ toggle }}>

        </Appcontext.Provider>
    )
}

export const useGlobalContext = () => useContext(Appcontext)