import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { CubeIcon } from '@heroicons/react/solid';
import auth from '../firebase.init';
import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import Loading from './Loading';

const Login = () => {
    let errors = '';
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleError) {
        errors = googleError.code.slice(5).split('-').join(' ').toUpperCase();
    }
    
    const googleSigning = (e)=> {
        e.preventDefault();
        signInWithGoogle();
    }


    return (
        <div className='min-h-[calc(100vh-166.5px)] flex justify-center items-center px-3'>
            {
                googleLoading && <Loading/>
            }
            <form className='max-w-sm mx-auto p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Login</h3>
                <div className="input-container">
                    <input type="email" name="floating_email" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_email" className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name="floating_password" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_password" className="input-label">Password</label>
                </div>
                <p className='text-red-600 font-medium text-center text-lg my-3'>{errors}</p>
                <p className='font-medium mb-3 flex items-center gap-2'>
                    <CubeIcon className='text-gray-900 h-6'/>
                    Create New Account. 
                    <Link className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150' to='/register'>Register</Link>
                </p>
                <p className='font-medium ml-2 flex items-center gap-2'>
                    <span className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150 cursor-pointer'>Forget password</span>
                </p>
                <div className='flex justify-center items-center gap-5 mt-5'>
                    <button 
                    onClick={googleSigning}
                    className="py-1.5 rounded-md shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] text-gray-900/80 hover:text-gray-900 border-0 font-medium duration-150 active:scale-95 ">
                        <img className='h-7 inline-block mr-1' src={google} alt="" />Login With Google
                    </button>
                    <button className="px-10 py-1.5 rounded-md text-sky-700 font-medium text-lg
                    hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;