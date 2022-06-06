import axios from 'axios';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handlelogin = async e => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
       await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://dry-tundra-70363.herokuapp.com/login',{email})
        localStorage.setItem('accessToken', data.accesssToken)
        // navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }
   

    if (googleuser) {
        navigate(from, { replace: true })
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='md:flex justify-around div'>
            <div className='h-[500px] p-5 shadow-2xl shadow-black'>
                <h1 className='text-black text-center text-xl font-bold'>Please Login</h1>
                <div className='flex justify-center'>
                    <div>
                        <form onSubmit={handlelogin}>
                            <h1 className='text-red-400 font-bold'>
                                {
                                    error ? error.message : ''
                                }
                            </h1>
                            <input className='block shadow-inner shadow-current p-2 mt-4' type="text" name='email' placeholder='Enter Your Email' required />
                            <input className='block shadow-inner shadow-current p-2 mt-4' type="password" name='password' placeholder='Enter Your Password' required />
                            <input type="submit" value="LOG IN" className='bg-white border-2 border-black text-black font-bold mt-4 rounded-sm px-3 ' />
                        </form>
                        <Link to='/reset' className='mt-3 font-bold text-red-500 block'>Reset Password ?</Link>
                        <Link to='/singup' className='mt-3 font-bold text-black block'><small>Create a new account ?</small></Link>

                        <button onClick={() => signInWithGoogle()} className='d-flex items-center border-2 border-black p-1 mt-5'>
                            <div>
                                <img className='h-5 w-5 mr-2' src="https://www.designbust.com/download/28/png/google_logo_icon256.png" alt="" />
                            </div>
                            <h1 className='font-bold text-black'>Sing in with Goggle</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;