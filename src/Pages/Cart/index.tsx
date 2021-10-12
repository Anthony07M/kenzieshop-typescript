import { useCart } from "../../Providers/Cart";
import { CartVazio, Container} from './styled'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ListProductCart from "../../Components/ListProductCart";

const PageCart = ( ) => {
    
    const { cart } = useCart()
    const history = useHistory()

    return(
        <Container>
            {cart.length < 1?
            (
            <CartVazio>
                <h3>O sue carrinho está vazio  :/</h3>
                <Button
                    onClick={() => history.push("/")}
                    variant="contained"
                    color="secondary"
                >Continuar Comprando
                </Button>
            </CartVazio>
            )
            :
            (
                <ListProductCart list={cart}/>
            )}   
        </Container>
    )
}

export default PageCart;