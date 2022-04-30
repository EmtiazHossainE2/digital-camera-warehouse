import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventories = () => {
    const [products, setProducts] = useProducts()

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
                    const exists = products.filter(charity => charity._id !== id)
                    setProducts(exists)
                })

        }
    }

    return (
        <div className='mt-5 py-5 '>
            <h2 className='text-center '>Manage Items : {products.length}</h2>
            <div className='hr-style mx-auto  mb-3 '>
            </div>
            <div className='container py-3  text-light' style={{ backgroundColor: '#578295' }}>
                <div className="row ">
                    <div className="col-md-1  d-flex justify-content-center pb-1  align-items-center">
                        <span className='pe-5'>List</span>
                    </div>
                    <div className="col-md-1 d-flex justify-content-center pb-1  align-items-center">
                        <h5> Image</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Name</h5>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Product Info</h5>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center pb-1  align-items-center">
                        <h5>Delete</h5>
                    </div>
                </div>
            </div>
            <div>
                {
                    products.map((product, index) => <ManageItem
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

export default ManageInventories;