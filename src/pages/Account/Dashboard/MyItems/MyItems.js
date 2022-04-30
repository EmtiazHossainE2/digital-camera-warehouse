import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import ManageItem from '../../ManageItem/ManageItem';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myItems , setMyItems] = useState([])
    useEffect(() => {
        const handleItems = async () => {
            const email = user.email
            const url = `https://camera-warehouse.herokuapp.com/my-items?email=${email}`
            const { data } = await axios.get(url)
            console.log(data);
            setMyItems(data)
        }
        handleItems()
    }, [user])

    const handleDelete = (id) => {
        const deleteItem = window.confirm('Be Careful Before deleting this item ')
        if (deleteItem) {
            const url = `https://camera-warehouse.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const afterDelete = myItems.filter(product => product._id !== id)
                    setMyItems(afterDelete)
                })

        }
    }



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
                <h2 className='text-center mt-3'> You Stoke :  {myItems?.length} items</h2>
            </div>
            <div className='hr-style mx-auto  mb-3 '>
            </div>
            <div>
                {
                    myItems.map((product, index) => <ManageItem
                        key={product._id}
                        product={product}
                        index={index}
                        handleDelete={handleDelete}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;