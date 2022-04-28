import React from 'react';
import './Banner.css'

import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.jpg'
import banner4 from '../../../images/banner/banner-3.jpg'


const Banner = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className="row  px-4 banner">
                <div className="col-lg-6 ">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src={banner1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src={banner2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src={banner3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src={banner4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6 ps-5  d-flex justify-content-center align-items-center ">
                    <div>
                        <h3>Mirrorless Digital Camera for {currentYear}</h3>
                        <p style={{ textAlign: 'justify' }}> An excellent choice for the modern content maker or storyteller. It combines a 24.2-megapixel high-resolution sensor capable of producing razor-sharp pictures and ultra-high definition 4K video with an articulating LCD touch screen ideal for capturing unique angle images and vlogs.</p>
                        <p>Available for quick and convenient pairing with a smartphone or tablet for wireless image sharing, and Bluetooth is also featured for image sharing to and remote camera control from a mobile device. It comes with no parts warranty.</p>
                        <button className='btn btn-success  mt-3 mb-5'>Manage More </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;