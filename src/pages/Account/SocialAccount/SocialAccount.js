import React from 'react';
import google from '../../../images/Google.png'
const SocialAccount = () => {
    return (
        <div >
            <div className=' d-flex align-items-center justify-content-center'>
                <div style={{ height: '2px', width: '40%' }} className='line-left d-block bg-dark'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{ height: '2px', width: '40%' }} className='line-right d-block bg-dark'></div>
            </div>
            <div className='social-icon d-flex align-items-center justify-content-center container'>
                <img src={google} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;