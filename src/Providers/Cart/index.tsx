import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { IProduct } from '../../Types/product'


interface ICartProps {
    children: ReactNode;
}

interface ICartData {
    cart: IProduct[];
    addFromCart: (product: IProduct) =>  void;
    removeFromCart: (product: IProduct) =>  void;
    finish: (token: string) => void;
}

const CartContext = createContext<ICartData>({} as ICartData)

export const CartProvider = ({ children }: ICartProps) => {
    
    const [cart, setCart] = useState<IProduct[]>(() => {
        const LocalList =  JSON.parse(`${localStorage.getItem("@kenzieshop:cart")}`) || [];
        return LocalList;
    })
    const history = useHistory()
    
    useEffect(() => {
        localStorage.setItem("@kenzieshop:cart", JSON.stringify(cart))
    }, [cart])


    const addFromCart = (product: IProduct) => {
        setCart([...cart, product])
        localStorage.setItem("@kenzieshop:cart", JSON.stringify(cart))
        toast.success("Produto Adicionado ao carrinho")
    }
    
    const removeFromCart = (product: IProduct) => {
        const {id} = product
        const newList = cart.filter(( p ) => p.id !== id)
        setCart(newList)
        localStorage.setItem("@kenzieshop:cart", JSON.stringify(newList))
        toast.warning("Produto Removido")
    }

    const finish = (token: string) => {
        if(token !== "" && token !== undefined) {
            toast.success("Compra finalizada com sucesso")
            localStorage.removeItem("@kenzieshop:cart")
            setCart([])
        }else{
            history.push("/login")
        }
    }

    return (
        <CartContext.Provider value={{addFromCart, cart, removeFromCart, finish}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)