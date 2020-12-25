import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext();

function ProductsContextProvider(props) {
    const [apidata, setApidata] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(data => setApidata(data))


//   https://reqres.in/api/products/
// https://gorest.co.in/public-api/products/
// https://fakestoreapi.com/products

    }, [])

    return (
        <ProductsContext.Provider value={{apidata: [...apidata]}}>
            {props.children}
            
        </ProductsContext.Provider>
    )
}


export default ProductsContextProvider;
