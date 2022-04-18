import { CubeIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div className='px-3'>
            <form className='max-w-sm mx-auto my-8 p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Register</h3>
                <div className="input-container">
                    <input type="text" name="floating_name" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_name" className="input-label">Name</label>
                </div>
                <div className="input-container">
                    <input type="email" name="floating_email" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_email" className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name="floating_password" id="floating_password" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_password" className="input-label">Password</label>
                </div>
                <div className="input-container">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_repeat_password" className="input-label">Confirm password</label>
                </div>
                <p className='font-medium mb-5 ml-2 flex items-center gap-2'>
                    <CubeIcon className='text-gray-900 h-6'/> Already have an Account. 
                    <Link className='text-sky-700 underline decoration-[3px] underline-offset-2 hover:scale-110 duration-150' to='/login'>Login</Link>
                </p>
                <button className="block mx-auto px-16 py-1.5 rounded-md text-sky-700 font-medium
                hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Register</button>
            </form>
        </div>
    );
};

export default Register;