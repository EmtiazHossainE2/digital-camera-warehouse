import React from 'react';
import { Link } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = ({ product, index, handleDelete }) => {
    const { name,img,description,price,quantity,supplier , _id , sold} = product

    // {name,description,price,quantity,img,supplier,afPoints , brand,brandId,modes,movieType,sold,ratings}

    return (
        <div className='col-lg-4 col-md-6 rounded-1'>
            <h3 className='text-center rounded-circle p-2'>{index}</h3>
            <div className="cart mx-2 my-4 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-1 w-100' src={img} alt="" />
                </div>
                <div className='p-3'>
                    <h5 className=' text-capitalize'>{name}</h5>
                    <p className='mb-0'>{description.slice(0, 100)}</p>
                    <h6 className='mt-2 mb-0 fw-bolder'>Price : $ {price}</h6>
                    <h6 className='mt-2 mb-0 fw-bolder'>Quantity : {quantity}</h6>
                    <h6 className='mt-2 mb-0 fw-bolder'>Supplier : {supplier}</h6>
                    <h6 className='mt-2 mb-0 fw-bolder'>Supplier : {sold}</h6>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;