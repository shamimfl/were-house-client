import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Myitem = () => {
    const navigate =useNavigate()
    const [user] =useAuthState(auth)
    const [myitem, setmyitem] =useState([])
   
   const id = localStorage.getItem('accessToken')
 
    const getMyItem = async ()=>{
            const email =user?.email;
            const url =`https://dry-tundra-70363.herokuapp.com/myitem?email=${email}`
            const {data} = await axios.get(url ,{
                headers:{
                    authorization : `Bearer ${id}`
                }
            });
            setmyitem(data)
    };
   
    getMyItem() 
    const handleDelete =id =>{
        // console.log(id)
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://dry-tundra-70363.herokuapp.com/inventory/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    const manageitem = id =>{
        navigate(`/inventory/${id}`)
    }
   if(myitem.length == 0){
       return <Loading></Loading>
   }
    return (
        <div className='p-2'>
            <h1 className='text-2xl text-center font-bold mt-5'>My Item</h1>
            <h1 className='text-2xl font-bold'>Total Item: {myitem.length}</h1>
            <Link className='bg-black text-white px-2 py-1 font-bold rounded-md' to='/additem'>Add New Item</Link>
            <div className='container md:grid grid-cols-4 gap-10'>
                {
                    myitem.map(product=> <div className='mt-5 border-2 p-3 shadow-lg'>
                        <div className='bg-white'>
                        <img className='h-60   w-full ' src={product?.img} alt="" />
                        </div>
                        <div className=' p-2 font-serif'>
                        <h1>Name:{product?.productname}</h1>
                        <h1>Price:{product?.price}</h1>
                        <h1>Quentity:{product?.quentity}</h1>
                        <h1>Supplier:{product?.userName}</h1>
                        <h1>Supplier:{product?.description}</h1>
                        </div>
                        <div className=' p-1'>
                            <button onClick={()=>manageitem(product?._id)} className='block bg-black text-white  w-full py-1'>Update</button>
                            <button onClick={()=>handleDelete(product?._id)} className='block bg-red-500 text-white  w-full py-1 mt-3'>Delete</button>
                        </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Myitem;