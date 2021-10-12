import { ReactNode, createContext, useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../Services/api'
import { Data } from '../../Types/data'

interface IAuthProps {
    children: ReactNode;
}

interface IAuthData {
    token: string;
    singIn: (data: Data) => void;
}



const AuthContext = createContext<IAuthData>({} as IAuthData)


export const AuthProvider = ({ children}: IAuthProps) => {
    
    const [token, setToken] = useState("")
    const history = useHistory()

    const singIn = async (data: Data) => {

        api.post("/login", data)
        .then((response)  => {
            setToken(response.data.accessToken)
            localStorage.setItem("@kenzieshop:token", JSON.stringify(response.data.accessToken))
            toast.success("Seja bem vindo")
            history.push("/") 
        })
        .catch((_) =>  toast.error("Email ou senha inválidos :/"))


    }


    return (
        <AuthContext.Provider value={{token, singIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)