import React from 'react'
import Men from '../../Assests/images/men.jpg'
import Women from '../../Assests/images/women.jpg'
import {Link} from 'react-router-dom'

function HomeCategories() {
    return(
        <>

       <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                <div className="text-center mt-5 gy-5">
                    <h1 class="display-2">Categories</h1>
                    <h6 class="">Collection List</h6>
                    <hr />
                </div>

        <div class="home-cat">
            
            <div class="row mt-40">
                <div class="col-md-6 col-sm-6">
                    <div class="box1">
                        <img src={Men} alt="" />
                        <h3 class="title">Men</h3>
                        <ul class="icon">
                            <li><Link to=""><i class="fa fa-search"></i></Link></li>
                            <li><Link to=""><i class="fa fa-link"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="box1">
                        <img src={Women} alt="" class="img-thumbn" />
                        <h3 class="title">Women</h3>
                        <ul class="icon">
                            <li><Link to=""><i class="fa fa-search"></i></Link></li>
                            <li><Link to=""><i class="fa fa-link"></i></Link></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>

               </div>
           </div>
        </div>
        </>
    )

}

export default HomeCategories;