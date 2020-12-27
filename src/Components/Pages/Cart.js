import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from './Global/CartContext'

export default function Cart() {

    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext)
    const shopping = 5;
    const totalAmount = totalPrice + shopping;

    return (

    <div class="container-fluid">
      <div class="col-md-10 col-11 mx-auto">
        <div className="row">
        

          <div className="col-lg-8">

            <div className="mb-3">
              <div className="pt-4 wish-list">

                <h5 className="mb-4">Cart (<span>{shoppingCart.length}</span> items)</h5>

                
                  {
                  shoppingCart.length > 0 
                  ?
                    shoppingCart.map(item => 
                      <div className="row mb-4" key={item.id}>
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img className="img-fluid w-100"
                        src={item.image} alt="Sample" />
                      
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>{item.title}</h5>
                          <p className="mb-3 text-muted text-uppercase small">Price - {item.price}</p>
                          <p className="mb-2 text-muted text-uppercase small">Category - {item.category}</p>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <button onClick={() => dispatch({type: 'DEC', id: item.id, item})}
                              className="fa fa-minus minus decrease"></button>
                            <input className="quantity" min="0" name="quantity" type="number" value={item.qty} />
                            <button onClick={() => dispatch({type: 'INC', id: item.id, item: item})}
                              className="fa fa-plus plus increase"></button>
                          </div>

                          <small id="passwordHelpBlock" className="form-text text-muted text-center">
                            Total price: {item.price * item.qty}
                          </small>
                        </div>
                        </div>
                        
                          
                      <br />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <Link onClick={() => dispatch({type: 'DELETE', id: item.id, item: item})} to="" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                              className="fas fa-trash-alt mr-1"></i> Remove item </Link>
                          <Link to="" type="button" className="card-link-secondary small text-uppercase"><i
                              className="fas fa-heart mr-1"></i> Move to wish list </Link>
                        </div>
                        
                      </div>
                      <hr />
                      <br /><br />
                    </div>
                  </div>
                </div>
                    ) 
                  :
                  'Your Cart is currently empty'
                  }

                

                <hr className="mb-4" />
                
                <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                  items to your cart does not mean booking them.</p>

              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">

                <h5 className="mb-4">Expected shipping delivery</h5>

                <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
              </div>
            </div>

            <hr className="mb-4" />

            <div className="mb-3">
              <div className="pt-4">

                <h5 className="mb-4">We accept</h5>

                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </div>
            </div>

          </div>

          <div className="col-lg-4">

            <div className="mb-3">
              <div className="pt-4">

                <h5 className="mb-3">The total amount of</h5>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                   ( {shoppingCart.length} ) Products Amount
                    <span>{totalPrice}</span>
                  </li>
                  <small>with total item qty({qty})</small>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>{shopping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>{totalAmount}</strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-block">go to checkout</button>

              </div>
            </div>

            <div className="mb-3">
              <div className="pt-4">

                <Link className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" to="#collapseExample"
                  aria-expanded="false" aria-controls="collapseExample">
                  Add a discount code (optional)
                  <span><i className="fas fa-chevron-down pt-1"></i></span>
                </Link>

                <div className="collapse" id="collapseExample">
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input type="text" id="discount-code" className="form-control font-weight-light"
                        placeholder="Enter discount code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        </div>
    </div>

    )
}


