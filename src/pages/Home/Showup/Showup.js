import React from 'react';
import img1 from '../../../images/extra/1.webp'
import img2 from '../../../images/extra/2.webp'

const Showup = () => {
    return (
        <div className='container my-5'>
            <div className="row ">
                <div className="col-md-6">
                    <img className='w-100 rounded' src={img1} alt="" />
                </div>
                <div className="col-md-6">
                    <img className='w-100 rounded' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Showup;