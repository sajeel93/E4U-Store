import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './flashProducts.css'

import {ProductsContext} from '../../Components/New/Global/ProductsContext'

export default function FlashProducts() {
    const data = useContext(ProductsContext)
    const dataSlice = data.apidata.slice(0,4)
    return (
        <>

<div className="flast-products">
<div className="container">
    <div className="row">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="text-center mt-5 gy-5">
                    <h1 className="display-2">Flash Products Sale!</h1>
                    <h6 className="">Through Context Api Fetch Data</h6>
                    <hr />
                </div>
            </div>
            
        </div>
        <div id="carousel-example" className="carousel slide hidden-xs" data-ride="carousel">
      
            <div className="carousel-inner">
                <div className="item active">
                    <div className="row">
                       

                    {dataSlice.map(item => (
                        <div className="col-sm-3">
                        <div className="col-item">
                            <div className="photo">
                                <img src={item.image} className="img-responsive" alt="a" width="350px" height="260" />
                            </div>
                            <div className="info">
                                <div className="row">
                                    <div className="price col-md-6">
                                        <h5 >{item.title}</h5>
                                        <h6 className="price-text-color">
                                        {item.price}</h6>
                                    </div>
                                    <div className="rating hidden-sm col-md-6">
                                        <i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
                                        </i><i className="price-text-color fa fa-star"></i><i className="price-text-color fa fa-star">
                                        </i><i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="separator clear-left">
                                    <p className="btn-add">
                                        <i className="fa fa-shopping-cart"></i><Link to="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</Link></p>
                                    <p className="btn-details">
                                        <i className="fa fa-list"></i><Link to="http://www.jquery2dotnet.com" className="hidden-sm">More details</Link></p>
                                </div>
                                <div className="clearfix">
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                     
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
        <div>
            
        </div>
        </>
    )
}
