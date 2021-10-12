import { useForm } from 'react-hook-form'
import { Data } from '../../Types/data'
import { useAuth } from '../../Providers/Auth'
import {Button, TextField} from '@material-ui/core'
import { Form } from './styled'
import { Link } from 'react-router-dom'

const FormLogin = () => {

    const { register, handleSubmit, reset} = useForm<Data>()
    const { singIn } = useAuth()
   
    const onSubmit = (data: Data) => {
        singIn(data)
        reset()
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit" variant="contained" color="secondary">Login</Button>
            <span>
                Não tem conta? Faça seu <Link to="/register">cadastro</Link> 
            </span>
        </Form>
    )
}

export default FormLogin;   