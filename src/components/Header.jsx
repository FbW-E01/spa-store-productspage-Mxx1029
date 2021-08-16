import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Header() {
    const [ products ] = useProductsContext();
    const [ locale, setLocale ] = useLocaleContext();

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
            <p>Switch currency 
                {/* {locale} helper to see the current currency */}
                </p>
            <select onChange={(e) => setLocale(e.target.value)}>
                <option value="en-us">USD ($)</option>
                <option value="en-gb">GBP (£)</option>
                <option value="de-de">EUR (€)</option>
            </select>
        </header>
    )
}