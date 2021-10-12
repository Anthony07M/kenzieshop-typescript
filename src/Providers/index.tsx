import { ReactNode } from 'react'
import { AuthProvider } from '../Providers/Auth'
import { ProductProvider } from '../Providers/Products'
import { CartProvider } from '../Providers/Cart'

interface IProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <AuthProvider>
            <ProductProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProductProvider>
        </AuthProvider>
    )
}


export default Providers;