import {createContext,useState} from "react"
export const AuthContext=createContext()

 const AuthProvider=({children})=>{
    const initialAuthUser=JSON.parse(localStorage.getItem("authUser"))
    const [authUser, setAuthUser] = useState(initialAuthUser??null)
    
    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider