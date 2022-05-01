import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JoinForm from '../JoinForm/JoinForm';
import Products from '../Products/Products';
import Showup from '../Showup/Showup';
// import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Banner />
            <Products />
            <div className='container'>
                <Link to='/manage-inventories'>
                    <button className='btn btn-success'>Manage Inventories</button>
                </Link>
            </div>
            <Showup/>
            <JoinForm/>
            {/* <Testimonial /> */}
        </div>
    );
};

export default Home;