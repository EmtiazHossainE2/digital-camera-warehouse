import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useProducts()
    const sliceProduct = products.slice(0,6)

    return (
        <div className='container mb-5'>
            <div className='text-center mt-3 mb-5'>
                <h1 className='text-success '>Feature Inventories</h1>
                <h5 className='fst-italic mt-3'>An able 4K-capable video machine. </h5>
                <div className='hr-style mx-auto pt-1 '>
                    <hr />
                </div>
            </div>
            <div>
                <div className="row ">
                    {
                        sliceProduct.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;