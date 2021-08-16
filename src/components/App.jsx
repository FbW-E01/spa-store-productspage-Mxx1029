import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import { ProductsContextProvider } from '../contexts/ProductsContext'

export default function App() {
    return (
        <ProductsContextProvider>
            <Header />
            <CreateProduct />
            <Products />
        </ProductsContextProvider>
    )
}