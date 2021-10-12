import ListProduct     from '../../Components/ListProducts'
import SyncLoader      from 'react-spinners/SyncLoader'
import { useProducts } from '../../Providers/Products'
import { Container } from './styled'

const PageHome = () => {
    const { loading, products } = useProducts()
    
    return (
        <Container>
             {loading?(<span className="spnner"><SyncLoader margin={10} size={25} color={"#18618F"}/></span>):(<ListProduct listProduct={products}/>)}
        </Container>
    )
}

export default PageHome;