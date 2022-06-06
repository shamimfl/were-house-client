import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';


const Singup = () => {
    const navigate = useNavigate();
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    // sing up -------------------------------
    const handleSingup = async (e) => {
        e.preventDefault()
        const displayName = e.target?.name?.value;
        const email = e.target?.email?.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
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
        <div className='div md:flex justify-center'>

            <div className='h-[500px]  p-5 shadow-2xl shadow-black'>
                <h1 className='text-black text-center text-xl font-bold'>Please Sing Up</h1>
                <div className='flex justify-center'>
                    <div>
                        <form onSubmit={handleSingup}>
                            <h1 className='font-bold text-red-500'>
                                {
                                    error ? error.message : ''
                                }
                            </h1>
                            <input className='block shadow-inner shadow-current p-2 mt-4' type="text" name='name' placeholder='Enter Your Name' required />
                            <input className='block shadow-inner shadow-current p-2 mt-4' type="text" name='email' placeholder='Enter Your Email' required />
                            <input className='block shadow-inner shadow-current p-2 mt-4' type="password" name='password' placeholder='Enter Your Password' required />
                            <input type="submit" value="Sing Up" className='bg-white border-2 border-black text-black font-bold mt-4 rounded-sm px-3 ' />
                        </form>
                        <div className='bg-black h-1 mt-2'></div>
                        <Link to='/login' className='mt-3 font-bold text-black block'><small>Allrady have an account ?</small></Link>

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

export default Singup;