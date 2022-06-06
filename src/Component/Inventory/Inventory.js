import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Inventory = () => {
    const navigate =useNavigate()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dry-tundra-70363.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProduct(data.slice(0,6)))
    }, [])
    
    const handleseeall =()=>{
        navigate('/allinventory')
    }
    const manageitem = _id =>{
        navigate(`/inventory/${_id}`)
    }
    if(product.length== 0){
        return <Loading></Loading>
    }
      return (
        <div>
            <h1 className='text-center text-black text-2xl font-bold font-serif mt-5'>Product Inventory </h1>
            <div className='md:grid md:grid-cols-3 p-5 md:gap-10 '>
                {
                    product.map(data =>
                        <div key={data._id} className='bg-white font-bold shadow-xl shadow-slate-400 rounded-md mt-3 '>
                            <div className=' rounded-lg flex justify-center' ><img className='h-60 w-60 p-4 hover:rotate-6  ease-out duration-500' src={data.img} alt="" /></div>
                            <div className='pt-5 pl-5 pr-5 '>
                                <h1 className='text-center mt-2 mb-2'>{data.productname}</h1>
                                <div className='h-1 bg-black'></div>
                                <h1 className='mt-2'>Price:{data.price} $</h1>
                                <h1 className='mt-2 mb-2'>Quentity :{data.quentity} P</h1>
                                <h1 className='mt-2 mb-2 '>{data.description}</h1>
                                <div className='flex justify-between p-2'>
                                    <h1>Supplier:{data.userName}</h1>
                                    <button onClick={()=>manageitem(data?._id)} className='bg-black font-bold px-1 py-1 text-white'>Manage</button>
                                </div>
                            </div>
                        </div>)
                }

            </div>

            <div className='flex justify-center'>
            <button onClick={handleseeall} className='text-white mb-2  text-center flex justify-between bg-black font-bold px-4 rounded-sm py-2'>
                <span>Manage Inventory</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            </div>
        </div>
    );
};

export default Inventory;