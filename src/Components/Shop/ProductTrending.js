import React, { useEffect, useState } from 'react'
import { CommonTrending } from './Common'

function Trending() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(val => setData(val.slice(14,20)))

    }, [])
    return(
        <>

        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                <div className="text-center mt-5 gy-5">
                    <h1 className="display-2">Trending Products</h1>
                    <h6 className="">Through Api Fetch Data</h6>
                    <hr />
                </div>

                
        <div className="p-trending mt-5">
            <div className="row g-2">

                <CommonTrending tdata={data} />
                
               
            </div>
        </div>

                </div>
            </div>
        </div>

        </>
    )
}

export default Trending;