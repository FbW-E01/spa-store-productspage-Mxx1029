import { useProductsContext } from '../contexts/ProductsContext';

export default function Header() {
    const [ products ] = useProductsContext();

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
        </header>
    )
}