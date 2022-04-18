import { CubeIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Register = (e) => {
    const formInput = useRef();
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    const register = (e)=> {
        e.preventDefault();
        const name = formInput?.current?.name?.value;
        const email = formInput?.current?.email?.value;
        const password = formInput?.current?.password?.value;
        const confirmPassword = formInput?.current?.confirmPassword?.value;
        
        console.log(name,email,password,confirmPassword);
    }

    return (
        <div className='px-3'>
            <form ref={formInput} className='max-w-sm mx-auto my-8 p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Register</h3>
                <div className="input-container">
                    <input type="text" name='name' className="input-field" required/>
                        <label className="input-label">Name</label>
                </div>
                <div className="input-container">
                    <input type="email" name='email' className="input-field" required/>
                        <label className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name='password' className="input-field" required/>
                        <label className="input-label">Password</label>
                </div>
                <div className="input-container">
                    <input type="password" name='confirmPassword' className="input-field" required/>
                        <label className="input-label">Confirm password</label>
                </div>
                <p className='font-medium mb-5 flex items-center gap-2'>
                    <CubeIcon className='text-gray-900 h-6'/> Already have an Account. 
                    <Link className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150' to='/login'>Login</Link>
                </p>
                <button 
                onClick={register}
                className="block mx-auto px-16 py-1.5 rounded-md text-sky-700 font-medium
                hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Register</button>
            </form>
        </div>
    );
};

export default Register;