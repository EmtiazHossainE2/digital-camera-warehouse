import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('inventories.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
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
                <div className="row g-5">
                    {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;