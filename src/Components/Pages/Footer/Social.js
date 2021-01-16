import React from 'react'
import { Link } from 'react-router-dom'

export const Social = () => {
    return (
        <>
            <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                    <a href="https://www.facebook.com/sajeel.no1" className="btn-floating btn-fb mx-1">
                        <i className="fa fa-facebook-f"> </i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-tw mx-1">
                        <i className="fa fa-twitter"> </i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-gplus mx-1">
                        <i className="fa fa-instagram"> </i>
                    </Link>
                    </li>
                </ul> 
        </>
    )
}

export default Social
