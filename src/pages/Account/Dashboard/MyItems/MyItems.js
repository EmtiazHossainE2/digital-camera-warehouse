import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import ManageItem from '../../ManageItem/ManageItem';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [products, setProducts] = useState([])
    useEffect(() => {
        const handleDonations = async () => {
            const email = user.email
            const url = `http://localhost:5000/product?email=${email}`
            const { data } = await axios.get(url)
            setProducts(data)
        }
        handleDonations()
    }, [user])
    return (
        <div className='py-5 '>
            <div className='text-center'>
                <h1>Welcome to your stoke page</h1>
                <div className='hr-style mx-auto  mb-3 '>
                </div>
                <h5>Your Name : {user?.displayName} </h5>
                <p className='pt-3'>Email : <span className='fw-bold text-warning '>{user?.email}</span></p>

            </div>
            <div>
                <h2 className='text-center mt-3'> You Stoke :  {products?.length}</h2>
            </div>
            <div className='hr-style mx-auto  mb-3 '>
            </div>
            <div>
                {
                    products.map((product, index) => <ManageItem
                        key={product._id}
                        product={product}
                        index={index}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;