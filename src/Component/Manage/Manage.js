import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import './Manage.css'

const Manage = () => {
     const [user, loading, error] = useAuthState(auth);
    const { _id } = useParams()
    const [product, setProduct] = useState([])
    const [updateProduct,setUpdateProduct] = useState(false)
    const navigate =useNavigate()
    useEffect(() => {
        fetch(`https://dry-tundra-70363.herokuapp.com/inventory/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [updateProduct])


    const DeliveredUpdateQuentity =() =>{
        const quentity =parseInt(product.quentity)-1 ;
        const UpdateQuentity ={quentity}
       const url = `https://dry-tundra-70363.herokuapp.com/inventory/${_id}`;
       fetch(url, {
           method: 'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(UpdateQuentity)
       })
       .then(res=> res.json())
       .then(data=> console.log(data))
       setUpdateProduct(!updateProduct)
    }
    
    const stockupdateQuentity =e=>{
        e.preventDefault();
        const stockQuentity = parseInt(e.target.number.value) + product.quentity;;
        const quentity ={quentity : stockQuentity}
        const url = `https://dry-tundra-70363.herokuapp.com/inventory/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quentity)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        console.log(quentity);
        setUpdateProduct(!updateProduct)
        e.target.reset()
    }
 
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className='md:flex p-3 justify-between items-center'>
            <div className='md:w-2/5'>
                <img className='rounde-md border-2' src={product?.img} alt="" />
            </div>
            <div className='rounded-md text-black font-bold p-2 md:w-2/4'>
                <h1 className='mb-3 text-xl font-mono'>Name:{product?.productname}</h1>
                <h1 className='mb-2 font-mono'>Price:{product?.price} BDT</h1>
                <h1 className='mb-2 font-mono'>Description:{product?.description}</h1>
                <h1 className='mb-3 font-mono'>Diler :{product?.userName}</h1>
                <h1 className='mb-3 font-mono'>ID:{product?._id}</h1>
                <div className='flex items-center mb-3'>
                    <h1 className='bg-white p-2 text-black border-2 border-black'>Quentity : {product?.quentity} P</h1>
                    <button onClick={DeliveredUpdateQuentity} className=' p-2 border-2 bg-black border-black text-white font-bold shadow-lg rounded-r-xl'>Delivered</button>
                </div>
                <form onSubmit={stockupdateQuentity}>
                    <input className='p-2 shadow-inner shadow-black text-black' type="number" name='number' required placeholder='Product Quentity' />
                    <input className='px-2 py-2 font-bold border-2 border-black font-mono bg-black text-white rounded-r-xl' type="submit" value="ADD" />
                </form>
                
            </div>
        </div>
    );
};

export default Manage;