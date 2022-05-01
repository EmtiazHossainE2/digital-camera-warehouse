import React from 'react';
import playstore from '../../../images/app/playstore-badge.svg'
import appstore from '../../../images/app/appstore.svg'
import mobileRight from '../../../images/app/mobile-app-2x.png'
import mobileLeft from '../../../images/app/mobile-app-so-2x.png'
import './MobileApp.css'
const MobileApp = () => {
    return (
        <div className='py-4'>
            <div className="container text-center fw-bold">
                <h2 className=' text-success text-capitalize fst-italic '>Go mobile with our iOS and Android app. </h2>
                <p className=' pt-3 '>Stay connected and get real-time updates on the order status, no matter where you are.</p>
            </div>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="row mt-3">
                <div className="col-md-6 d-flex justify-content-end playstore">
                    <img className='w-25' src={playstore} alt="" />
                </div>
                <div className="col-md-6  d-flex justify-content-start appstore">
                    <img className='w-25' src={appstore} alt="" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 d-flex justify-content-end mobileRight">
                    <img className='w-50' src={mobileRight} alt="" />
                </div>
                <div className="col-md-6  d-flex justify-content-start mobileLeft">
                    <img className='w-50' src={mobileLeft} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;