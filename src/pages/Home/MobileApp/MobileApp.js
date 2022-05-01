import React from 'react';
import playstore from '../../../images/app/playstore-badge.svg'
import appstore from '../../../images/app/appstore.svg'
import mobileRight from '../../../images/app/mobile-app-2x.png'
import mobileLeft from '../../../images/app/mobile-app-so-2x.png'

const MobileApp = () => {
    return (
        <div className='py-4'>
            <h2 className='text-center text-success text-capitalize fst-italic fw-bold'>Go mobile with our iOS and Android app. </h2>
            <p className='text-center pt-3 fw-bold'>Stay connected and get real-time updates on the order status, no matter where you are.</p>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="row mt-3">
                <div className="col-md-6 d-flex justify-content-end">
                    <img className='w-25' src={playstore} alt="" />
                </div>
                <div className="col-md-6  d-flex justify-content-start">
                    <img className='w-25' src={appstore} alt="" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 d-flex justify-content-end">
                    <img className='w-50' src={mobileRight} alt="" />
                </div>
                <div className="col-md-6  d-flex justify-content-start">
                    <img className='w-50' src={mobileLeft} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;