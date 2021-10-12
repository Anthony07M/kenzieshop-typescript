import { useForm } from 'react-hook-form'
import { Data } from '../../Types/data'
import { useAuth } from '../../Providers/Auth'
import {Button, TextField} from '@material-ui/core'
import { Form } from './styled'
import { useHistory } from 'react-router'
import { api } from '../../Services/api'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const FormLogin = () => {

    const { register, handleSubmit, reset} = useForm<Data>()
    const { singIn } = useAuth()
    const history = useHistory()

    const onSubmit = (data: Data) => {
        singIn(data)
        api.post("/register", data)
        .then((_) => {
            toast.success("Conta criada com sucesso ^^")
            history.push("/login")
        }).catch((_) => toast.error("Erro ao criar conta :("))
        reset()
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
           <TextField
                type="text"
                label="Nome"
                variant="outlined"
                required
                {...register("username")}
                />

            <TextField
                type="email"
                label="Email"
                variant="outlined"
                required
                {...register("email")}
                />
            <TextField
                type="password"
                label="Senha"
                variant="outlined"
                required
                {...register("password")}
            />
            <Button type="submit" variant="contained" color="secondary">Register</Button>
            <span>
                Já tem conta? Faça <Link to="/login">login</Link> 
            </span>
        </Form>
    )
}

export default FormLogin;   