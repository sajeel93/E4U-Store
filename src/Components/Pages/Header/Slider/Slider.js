import React from 'react'
import Imgone from '../../../../Assests/images/1.png';
import Img2 from '../../../../Assests/images/2.png';
import Img3 from '../../../../Assests/images/3.jpg';

function Slder() {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={Imgone} alt="First slide" />
                <div className="carousel-caption d-none d-md-block ">
                    <h5 className="align-items-center d-flex justify-content-center">Web Development</h5>
                    <p>Descripion ..........</p>
                    <button>BUY NOW</button>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Img2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={Img3} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slder;