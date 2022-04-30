import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../images/delete.png'
import './ManageItem.css'

const ManageItem = ({ product, index, handleDelete }) => {
    const { name, img, description, price, quantity, supplier, _id, sold } = product

    // {name,description,price,quantity,img,supplier,afPoints , brand,brandId,modes,movieType,sold,ratings}

    return (
        <div className='container'>
            <div className="row border">
                <div className="col-md-1  d-flex justify-content-center pb-1  align-items-center">
                    <span className='pe-5'>{index + 1}</span>
                </div>
                <div className="col-md-1 d-flex justify-content-center pb-1  align-items-center">
                    <h5>  <img className=' table-img ' src={img} alt="" /></h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                    <h5>{name}</h5>
                </div>
                <div className="col-md-6 d-flex justify-content-center pb-1  align-items-center">
                    <h5>{name}</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                    <div onClick={() => handleDelete(_id)} className='text-center' style={{cursor: 'pointer'}}>
                        <img className='bg-danger w-50 p-2 rounded-circle' src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;

{/* 
<h3 className='text-center rounded-circle p-2'>{index}</h3>
<img className='product-img p-1 w-100' src={img} alt="" />
<h5 className=' text-capitalize'>{name}</h5>
<p className='mb-0'>{description.slice(0, 100)}</p>
<h6 className='mt-2 mb-0 fw-bolder'>Price : $ {price}</h6>
<h6 className='mt-2 mb-0 fw-bolder'>Quantity : {quantity}</h6>
<h6 className='mt-2 mb-0 fw-bolder'>Supplier : {supplier}</h6>
<h6 className='mt-2 mb-0 fw-bolder'>Supplier : {sold}</h6>
<button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>                     */}