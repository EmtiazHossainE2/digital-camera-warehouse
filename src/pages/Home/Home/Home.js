import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Integration from '../Integration/Integration';
import JoinForm from '../JoinForm/JoinForm';
import MobileApp from '../MobileApp/MobileApp';
import Products from '../Products/Products';
import Showup from '../Showup/Showup';

const Home = () => {
    return (
        <div >
            <Banner />
            <Integration/>
            <Showup/>
            <Products />
            <div className='container d-flex justify-content-end'>
                <Link to='/manage-inventories'>
                    <button className='btn btn-success'>Manage Inventories</button>
                </Link>
            </div>
            <Business/>
            <MobileApp/>
            <JoinForm/>
        </div>
    );
};

export default Home;