import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
// import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Banner />
            <Products />
            <div className='container pb-5'>
                <Link to='/manage-inventories'>
                    <button className='btn btn-success'>Manage Inventories</button>
                </Link>
            </div>
            {/* <Testimonial /> */}
        </div>
    );
};

export default Home;