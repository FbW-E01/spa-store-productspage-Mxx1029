import { useLocaleContext } from '../contexts/LocaleContext';
import { useProductsContext } from '../contexts/ProductsContext';

export default function Products() {
    const [ products, setProducts ] = useProductsContext();
    const [ locale ] = useLocaleContext();

    // all 3 functions work with whatever, because they are given the right argument (item) in the return
    function editName(productName) {
        const newName = prompt("Enter new name", productName.name);
        const updatedListWithNewName = 
            products.map(prod => {
                if (prod.id === productName.id) {
                    prod.name = newName;
                }
                return prod
            });
        setProducts(updatedListWithNewName);
    }

    function editPrice(productPrice) {
        const newPrice = prompt("Enter new price", productPrice.price);
        const updatedListWithNewPrice = 
            products.map(product => {
                if (product.id === productPrice.id) {
                    product.price = newPrice;
                }
                return product
            })
        setProducts(updatedListWithNewPrice);
    }

    function deleteProduct(toDelete) {
        const remainingProducts = products.filter(element => {
            return element.id !== toDelete.id
            
        })
        setProducts(remainingProducts);
    }


    return (
        <table className="Products">
            <tbody>  
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                {products.map(item => {
                    return (
                        // keys are only given to the parent element
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price} {locale === "en-us" 
                                ? "$" : 
                                locale === "en-gb" 
                                ? "£" : 
                                locale === "de-de" 
                                ? "€" : null}
                            </td>
                            <td>
                                {/* all 3 button functions need to be given "item" from the products.map above to work outside of the return, here they are called, it's not a reference */}
                                <button onClick={() => editName(item)}>
                                    Edit name
                                </button>
                                <button onClick={() => editPrice(item)}>
                                    Edit price
                                </button>
                                <button onClick={() => deleteProduct(item)}>
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}