import { Container, SectionProducts, SectionResume } from './styled'
import Product from "../Product";
import { IProduct } from '../../Types/product';
import { Button } from '@material-ui/core';
import { useCart } from '../../Providers/Cart';

interface Props {
    list: IProduct[];
}

const ListProductCart = ({ list }: Props) => {

    const { finish } = useCart()
    const frete = 25.40;
    const servicos = 2.58;
    const token = localStorage.getItem("@kenzieshop:token") || ""

    return(
        <Container>
            <SectionResume>
              <h3>Resumo</h3>
                <p><span className="left">Produtos:              </span> <span  className="right"> {list.length} </span> </p>
                <p><span className="left">Frete:              </span> <span  className="right"> R${frete},00    </span> </p>
                <p><span className="left">Serviços:           </span> <span  className="right">  R${servicos},00 </span> </p>
                <hr/>
                <p><span className="left total" > VALOR TOTAL:       </span> <span  className="right"> R${list.map((product) => product).reduce((acc, currentValue) => acc + currentValue.price, 0)}, 00</span></p>
                
                <p className="contentButton">
                        <Button
                        variant='contained'
                        color="secondary"
                        onClick={() => finish(token)}
                        >
                            Finalizar Compra</Button>
                </p>
                </SectionResume>


            <SectionProducts>
                {list.map((product) => {
                    return <Product isRomove key={product.id} product={product}/>
                })}
            </SectionProducts>
        </Container>
    )
}

export default ListProductCart;