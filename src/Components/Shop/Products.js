import React, { useEffect, useState, useContext } from 'react'
import CommonCart from './Common'
import {CartContext} from '../Pages/Global/CartContext'

function Products() {

    const [apidata, setApidata] = useState([]);

    const {dispatch} = useContext(CartContext)

    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(data => setApidata(data))


//   https://reqres.in/api/products/
// https://gorest.co.in/public-api/products/
// https://fakestoreapi.com/products

    }, [])
    return(
        <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">

                <div className="text-center mt-5 gy-5">
                    <h1 className="display-2">Featured Products</h1>
                    <h6 className="">Through Api Fetch Data</h6>
                    <hr />
                </div>
                
                <div className="row d-flex flex-column-reverse flex-sm-row">
        

        <CommonCart apiData={apidata} dispatch={dispatch} />

        
        </div>
        

             </div>
           </div>
        </div>

        </>
    )

}

export default Products;