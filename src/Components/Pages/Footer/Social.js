import React from 'react'
import { Link } from 'react-router-dom'

export const Social = () => {
    return (
        <>
            <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-fb mx-1">
                        <i className="fab fa-facebook-f"> </i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-tw mx-1">
                        <i className="fab fa-twitter"> </i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-gplus mx-1">
                        <i className="fab fa-google-plus-g"> </i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-li mx-1">
                        <i className="fab fa-linkedin-in"> </i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link to="" className="btn-floating btn-dribbble mx-1">
                        <i className="fab fa-dribbble"> </i>
                    </Link>
                    </li>
                </ul> 
        </>
    )
}

export default Social
