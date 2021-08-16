import { useState } from 'react'
import { useProductsContext } from '../contexts/ProductsContext'

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useProductsContext();

    function createProduct() {
        const id = Math.floor(Math.random() * 99999999999);

        setProducts([ ...products, { id, name, price } ]);
    }

    return (
        <div className="CreateProduct">
            <h3>Enter new product</h3>
            <div className="wrapper">
                <label for="name">Product name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="wrapper">
                <label for="price">Price</label>
                <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <button onClick={createProduct}>Add product!</button>
        </div>
    )
}