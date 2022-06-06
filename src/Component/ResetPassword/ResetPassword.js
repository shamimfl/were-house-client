import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const ResetPassword = () => {
    const navigate =useNavigate()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)

    const handleSendreset =e=>{
        e.preventDefault();
        const email =e.target.email.value;
        sendPasswordResetEmail(email)
        toast('sent')
    }


    return (
        <div className='div flex justify-center text-center'>
    
            <form onSubmit={handleSendreset} className='p-5 shadow-lg shadow-black'>
                <h1 className='mb-5 text-red-400 font-bold'>
                    {
                        error ? error.message : ''
                    }
                </h1>
                <input className='shadow-inner shadow-current p-2 block w-full' type="email" name='email' placeholder='Enter Your Email' required/>
                <input className='bg-white text-black font-bold block px-2 mt-5 w-full' type="submit" value="SEND" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ResetPassword;