import { useProductsContext } from '../contexts/ProductsContext';

export default function Products() {
    const [ products ] = useProductsContext();

    return (
        <div className="Products">
            {products.map(prod => <div>{prod.name}: {prod.price} &euro;</div>)}
        </div>
    )
}