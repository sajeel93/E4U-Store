import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../Global/CartContext'

function Navbar() {
  const {qty} = useContext(CartContext)
    return(

        <div className="Container-fluid">
           
                <div className="col-10 mx-auto">

        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">E4U Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shop
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/products">products</Link>
                        </div>
                    </li>
                </ul>
                
                
    <ul className="navbar-nav d-flex flex-row ml-auto">
      
      <li className="nav-item mr-3 mr-lg-0">
        <Link className="nav-link" to="/cart">
          <i className="fa fa-shopping-cart">({qty}) Cart</i>
        </Link>
      </li>
     
      <li className="nav-item mr-3 mr-lg-0 dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to=""
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-user"></i>
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="">Action</Link></li>
          <li><Link className="dropdown-item" to="">Another action</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <Link className="dropdown-item" to="">Something else here</Link>
          </li>
        </ul>
      </li>
    </ul>
            </div>
            </nav>

                  </div>
               
            </div>

    )
}

export default Navbar;