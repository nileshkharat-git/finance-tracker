import { createContext, useState, useContext } from "react"

const TokenContext = createContext();

export const TokenProvider = ({children}) => {
    const [token, setToken] = useState(null)

    const login = (token) => setToken(token);
    const logout = ()=> setToken(null)
    
    return (
        <TokenContext.Provider value={{token, login, logout}}>
            {children}
        </TokenContext.Provider>
    )
}

export const useAuth = ()=> useContext(TokenContext)