import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/useProductDetail';
import './ProductDetail.css'
const ProductDetail = () => {
    const { inventoryId } = useParams()
    const [detail] = useProductDetail(inventoryId)
    console.log(detail);
    // {description,afPoints , brand,brandId,modes,movieType,quantity,price,sold,supplier,description,ratings}
    return (
        <div className=' py-5'>
            <div className="row ">
                <div className="col-lg-6  pt-3 d-flex  justify-content-center align-items-center text-center">
                    <div className='container px-5'>
                        <img className='w-100 ' src={detail?.img} alt="" />
                    </div>
                </div>

                <div className="col-lg-6  d-flex pt-5  justify-content-center">
                    <div className='container mx-3'>
                        <h2 className='text-success text-center '>{detail?.name}</h2>
                        <div className='hr-style mx-auto pt-1 '>
                            <hr />
                        </div>
                        <div className='mt-3 pill-btn '>
                            <button className='btn btn-outline-success pe-4 me-3 w-25'>Price : ${detail?.price}</button>
                            <button className='btn btn-outline-success me-3'>Product Code : {detail?.brandId}</button>
                            <button className='btn btn-outline-success w-25'>Brand : {detail?.brand}</button>
                        </div>
                        <div className='mt-3 pill-btn '>
                            <button className='btn btn-outline-success me-3'>Total Sold : {detail?.sold}</button>
                            <button className='btn btn-outline-success '>Supplier : {detail?.supplier}</button>
                        </div>

                        <div>
                            <h4 className='pt-5 '>Key Features</h4>
                            <div className='w-25 '>
                                <hr />
                            </div>
                            <ul>
                                <li><p>{detail?.afPoints}</p></li>
                                <li><p>{detail?.movieType}</p></li>
                                <li><p>{detail?.modes}</p></li>
                            </ul>
                        </div>
                        <div className='mt-5 pill-btn text-center'>
                            <button className='btn btn-warning pe-4 me-3 w-75 py-3 fs-5'>In Stoke Product : {detail?.quantity}</button>
                        </div>
                        {/* <div className="   pt-3 text-justify" style={{ textAlign: 'justify' }}>
                            <p>{detail?.description}</p>
                        </div> */}
                        <div className='pt-5 d-flex justify-content-evenly'>
                            <button className='btn btn-success py-2 px-5 fw-bold'>Restoke </button>
                            <button className='btn btn-danger py-2 px-5 fw-bold'>Delivered</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;