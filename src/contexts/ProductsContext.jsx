import React, { useState, useContext } from 'react';

export const ProductsContext = React.createContext();

export function ProductsContextProvider(props) {
    const [products, setProducts] = useState([{id:1, name:"iPad", price:10}]);

    return (
        <ProductsContext.Provider value={[ products, setProducts ]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}