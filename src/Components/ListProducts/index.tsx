import { IProduct } from '../../Types/product';
import Product from '../Product'

interface IProductListProps {
    listProduct: IProduct[]
}

const ProdcutList = ({ listProduct}: IProductListProps) => {
    return(
        <div className="container-product-list">
            {listProduct.map((product) => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default ProdcutList;