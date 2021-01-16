import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'

function Footer() {
    return (
        <>
            <footer className="page-footer font-small stylish-color-dark pt-4">

                <div className="container text-center text-md-left">

                    <div className="row">

                    <div className="col-md-4 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.</p>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <Link to="">Link 1</Link>
                        </li>
                        <li>
                            <Link to="">Link 2</Link>
                        </li>
                        <li>
                            <Link to="">Link 3</Link>
                        </li>
                        <li>
                            <Link to="">Link 4</Link>
                        </li>
                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <Link to="">Link 1</Link>
                        </li>
                        <li>
                            <Link to="">Link 2</Link>
                        </li>
                        <li>
                            <Link to="">Link 3</Link>
                        </li>
                        <li>
                            <Link to="">Link 4</Link>
                        </li>
                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <Link to="">Link 1</Link>
                        </li>
                        <li>
                            <Link to="">Link 2</Link>
                        </li>
                        <li>
                            <Link to="">Link 3</Link>
                        </li>
                        <li>
                            <Link to="">Link 4</Link>
                        </li>
                        </ul>

                    </div>

                    </div>

                </div>

                <hr />

                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                    <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn btn-danger btn-rounded">Sign up!</Link>
                    </li>
                </ul>

                <hr />

                <Social />


                <div className="footer-copyright text-center py-3">Designed by:  
                      <a href="https://www.fiverr.com/sajeel_expert/">  Sajeel Siddiqui </a>
                </div>

        </footer>
            
        </>
    )
}

export default Footer;
