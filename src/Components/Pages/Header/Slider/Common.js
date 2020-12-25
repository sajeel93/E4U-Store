import React from 'react'



function Common(props) {
    return(
       
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={props.imgsrc} alt="First slide" />
                <h2>{props.title}</h2>
                
                </div>
               
            </div>
         
    )
}

export default Common;