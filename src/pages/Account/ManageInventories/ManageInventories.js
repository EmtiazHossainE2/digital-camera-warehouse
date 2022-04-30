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
        <div className='py-5 container'>
            <h2 className='text-center '>Manage All Items : {products.length}</h2>
            <div className='hr-style mx-auto  mb-3 '>
            </div>

            <div>
                <div className="row">
                    {
                        products.map((product, index) => <ManageItem
                            key={product._id}
                            index={index}
                            product={product}
                            handleDelete={handleDelete}
                        ></ManageItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;