import {  createContext,useContext, useState } from "react"

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    return(
        <Context.Provider value={{count, setCount}}>
            {children}
            </Context.Provider>
    )
}
export default Context