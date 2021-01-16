import React, { useContext } from 'react'
import { CommonTrending } from './Common'
import {ProductsContext} from '../New/Global/ProductsContext'
import {CartContext} from '../Pages/Global/CartContext'

function Trending() {

    const data = useContext(ProductsContext)
    const {dispatch} = useContext(CartContext)

    return(
        <>

        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                <div className="text-center mt-5 gy-5">
                    <h1 className="display-2">Trending Products</h1>
                    <h6 className="">Through (useContext) Api Fetch Data</h6>
                    <hr />
                </div>

                
        <div className="p-trending mt-5">
            <div className="row g-2">

                <CommonTrending tdata={data} dispatch={dispatch}/>
                
               
            </div>
        </div>

                </div>
            </div>
        </div>

        </>
    )
}

export default Trending;