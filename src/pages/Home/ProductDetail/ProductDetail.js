import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../../hooks/useProductDetail';

const ProductDetail = () => {
    const { inventoryId } = useParams()
    const [detail] = useProductDetail(inventoryId)
    console.log(detail);
    // {description,af-points , brand,brandId,modes,movie-type,quantity,price,sold,supplier,description,ratings}
    return (
        <div className=' py-5'>
            <div className="row ">
                <div className="col-lg-6 order-lg-1 order-2 d-flex pt-5  justify-content-center">
                    <div className='container mx-3'>
                        <h2 className='text-warning text-center '>{detail?.name}</h2>
                        {/* <hr className='w-25 mx-auto border border-warning' /> */}
                        <div className='hr-style mx-auto pt-1 '>
                            <hr />
                        </div>
                        <div className="   pt-3 text-justify" style={{ textAlign: 'justify' }}>
                            <p>{detail?.description}</p>
                        </div>
                        <div className='my-5'>
                            <Link to={'/inventory/' + inventoryId}>
                                <button className=' py-2 fs-5 btn btn-warning'>Restoke Here </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-first pt-3 d-flex  justify-content-center align-items-center text-center">
                    <div className='container px-5'>
                        <img className='w-100 ' src={detail?.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;