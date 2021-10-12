import { ReactNode, useState, createContext, useContext, useEffect } from "react"
import { api } from "../../Services/api"
import { IProduct } from "../../Types/product"

interface IProductProps {
    children: ReactNode;
}

interface IProductData {
    products: IProduct[];
    loading: boolean;
}

const ProductContext = createContext<IProductData>({} as IProductData)


export const ProductProvider = ({ children }: IProductProps) => {
    
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        api.get("/products")
        .then((response) => {
            setProducts(response.data)
            setLoading(false)
        })
        .catch((err) => console.log("Não conseguimos pegar os produtos"))
    }, [])

    return (
        <ProductContext.Provider value={{ loading, products }} >
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)