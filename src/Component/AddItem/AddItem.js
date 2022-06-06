import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth)
    const handleAdddproduct = e => {
        e.preventDefault();
        const productname = e.target.name.value;
        const userName = e.target.userName.value;
        const price = e.target.price.value;
        const quentity = e.target.quentity.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const email = user.email
        const data = { price, productname, userName, quentity, img, description, email }
        //post
        fetch('https://dry-tundra-70363.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            // .then(data => console.log(data))
        toast('success')
        e.target.reset();
    }
    return (
        <div className=''>
            <h1 className='text-center text-xl text-black font-bold mt-2'>Please Eneter your Information</h1>
            <div className='flex justify-around items-center'>
                <form onSubmit={handleAdddproduct} className=' border-2 border-black shadow-black pr-5 pl-5 pt-2 pb-2'>
                    <input type="text" name='userName' className='block shadow-inner shadow-current p-2  mt-1 w-full' placeholder='Your  Name' required />
                    <input type="text" name='userEmail' value={user?.email} readOnly className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='Your  Name' required />
                    <input type="text" name='name' className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='Product Name' required />
                    <input type="text" name='price' className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='price' required />
                    <input type="number" name='quentity' className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='product Quentity' required />
                    <input type="text" name='img' className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='Photo URL' required />
                    <textarea type="text" name='description' className='block shadow-inner shadow-current p-2  mt-3 w-full' placeholder='Description' required />
                    {/* <button type="submit" value="ADD Item" /> */}
                    <button className='bg-white border-2 border-black mt-3  text-black flex justify-center px-2 py-1 font-bold  w-full text-center' type='submit'>
                        <span>ADD</span>
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddItem;