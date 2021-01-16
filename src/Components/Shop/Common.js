import React from 'react'
import { Link } from 'react-router-dom';



// function CommonCart(props) {

//     console.log(props, "Props Data")

    
//     return(
//         <>           
            

//         {
//             props.apiData.map((item) => (
//             <>
//                     {item.data.map((i) => (
//                         <>
//                         <div className="col-lg-4 col-md-4 col-10 mx-auto gy-5">
//                         <div className="card cart-block">
//                         <img src={i.image} className="card-img-top" alt="" />
//                         <div className="card-body">
//                         <h5 className="card-title">{i.name}</h5>
//                     <p className="card-text">{i.description}</p>
//                         <Link to="" className="btn btn-primary">Buy Now</Link>
//                         </div>
//                         </div>
//                         </div>
//                         </>

//                     ))}
//             </>

//             ))
//         }
    
//         </>
//     )
// }

function CommonCart(props) {
    

    const apiData = props.apiData.slice(0,6)
    const dispatch = props.dispatch
    return(
        <>
        {
            apiData.map((item) => (
                <>
                        <div key={item.title} className="col-lg-4 col-md-4 col-10 mx-auto gy-5">
                        <div className="card cart-block text-center">
                        <img src={item.image} className="card-img-top c-img-description" alt="" />
                        <div className="card-body">
                        <h6 className="card-category text-center">{item.category}</h6>
                        <h3 className="card-title featured-c-t">{item.title}</h3>
                        <h5 className="card-price">{item.price}</h5>
                        
                    
                        <Link to="" className="btn btn-primary" onClick={() => dispatch({type: 'ADD_TO_CART', id: item.id, product: item})}>Add to Cart</Link>
                        </div>
                        </div>
                        </div>
                        </>
            ))
        }
        </>

    )
}

function CommonTrending(props) {

    const fdata = props.tdata.apidata.slice(14,20);
    

   
    return(
        <>
        {
            

            fdata.map((item) => (
                <div key={item.id} className="col-md-4">
                    <div className="product">
            <div className="product-card"> <span className="sale">Sale</span> <span className="price">{item.price}</span> <img src={item.image} alt="" className="rounded img-fluid" />
                            <div className="buttons d-flex flex-row"> <span className="search"><i className="fa fa-search"></i></span> <button className="btn btn-primary btn-sm">Add to cart</button> </div>
                        </div>
                    </div>
                </div>

            ))
        }

        
        </>

    )
}

export default CommonCart;
export { CommonTrending };
