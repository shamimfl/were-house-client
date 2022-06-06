import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Allinventory = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState([]);
    const [DeleteProduct,setDeleteProduct] = useState(false)
    useEffect(() => {
        fetch('https://dry-tundra-70363.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [DeleteProduct])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://dry-tundra-70363.herokuapp.com/inventory/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        setDeleteProduct(!DeleteProduct)
    }
    if(product.length ==0){
        return <Loading></Loading>
    }
    return (
        <div>
            <button onClick={() => navigate('/additem')} className='bg-black text-white font-bold sticky top-32 px-4 py-2 rounded-r-2xl'>Add New Item</button>
            <div className='md:grid md:grid-cols-3 p-5 md:gap-10 '>
                {
                    product.map(data =>
                        <div className='bg-white font-bold shadow-xl shadow-slate-400 rounded-md mt-3'>
                            <div className=' rounded-lg flex justify-center'><img className='h-60 w-60 p-5 overflow-hidden' src={data.img} alt="" /></div>
                            <div className='pt-5 pl-5 pr-5 '>
                                <h1 className='text-center mt-2 mb-2'>{data.productname}</h1>
                                <div className='h-1 bg-black'></div>
                                <h1 className='mt-2'>Price:{data.price} $</h1>
                                <h1 className='mt-2 mb-2'>Total :{data.quentity} P</h1>
                                <h1 className='mt-2 mb-2 '>{data.description}</h1>
                                <h1>Suplier:{data.userName}</h1>
                                <div className='flex justify-center p-2'>
                                    
                                    <button onClick={() => handleDelete(data._id)} className='bg-red-500 text-white px-3  font-bold py-2 mt-5 flex justify-between items-center'><span>DELETE</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Allinventory;