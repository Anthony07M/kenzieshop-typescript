import { IProduct } from "../../Types/product";
import { useCart } from '../../Providers/Cart'
import { Container } from './styled'

interface IProductProps {
    product: IProduct;
    isRomove?: boolean;
}

const Product = ({product, isRomove=false}: IProductProps) => {
    
    const { id, price, name, description, image_url } = product
    const { addFromCart, removeFromCart } = useCart()

    return(
        <Container key={id} className="product">
            <img src={image_url} alt={name}/>
            <span className="span-name">{name}</span>
            <p>{description}</p>
            <span className="span-price">R${price}, 00</span>
            {isRomove ?
            (
                <button className="button-remove"  onClick={() => removeFromCart(product)} >REMOVER</button>
            )
            : 
            (
                <button onClick={() => addFromCart(product)} >ADICIONAR</button>

            )}
        </Container>
    )
}

export default Product;