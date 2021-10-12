import { Container, } from "./styled";
import { Link, useHistory } from "react-router-dom";
import { Badge } from '@material-ui/core'
import { useCart } from "../../Providers/Cart";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {

    const history = useHistory()
    const { cart } = useCart()

    return(
        <Container>
            <div className="title" onClick={() => history.push("/")}>
                <h2>KenzieShop</h2>
            </div>

            <div className="nav-bar">
                <Link to="/cart">  <LocalGroceryStoreIcon/> <Badge badgeContent={cart.length} color="secondary"/></Link>   
                <Link to="/login"> <ExitToAppIcon/>Login</Link>   
            </div>
        </Container>
    )
}

export default Header;