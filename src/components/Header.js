import { HomeIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';
import logo from '../images/tooth-logo.png'

const Header = () => {
    const [authUser, , ] = useAuthState(auth);
    const navigate = useNavigate();


    const logout = ()=> {
        signOut(auth).then(() => {
            toast('User logged out');
        }).catch((error) => {
            const errorMsg = error.code.slice(5).split('-').join(' ').toUpperCase();
            toast(errorMsg);
        });
        navigate('/');
    }

    return (
        <section className='shadow-md'>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='container md:h-20 md:px-3 flex justify-center md:justify-between items-center flex-wrap gap-5'>
            <div className='flex justify-center items-center text-xl gap-2 font-medium text-slate-900 pt-2 md:pt-0'>
                <img src={logo} className='cursor-pointer h-16' alt="" onClick={()=> navigate('/')}/>
                <span className='first-letter:text-2xl text-xl cursor-pointer text-sky-600' onClick={()=> navigate('/')}>Dr. Tooth</span>
            </div>
            <nav className="flex items-center justify-center gap-5 flex-wrap bg-sky-600 md:bg-transparent 
            basis-full md:basis-auto py-2 md:py-0">
                <NavLink to='/' className={(status)=> status.isActive?'link-active':'link'}><HomeIcon className='h-6'/></NavLink>
                <NavLink to='/checkout' className={(status)=> status.isActive?'link-active':'link'}>Checkout</NavLink>
                <NavLink to='/blog' className={(status)=> status.isActive?'link-active':'link'}>Blog</NavLink>
                <NavLink to='/about' className={(status)=> status.isActive?'link-active':'link'}>About</NavLink>
                {
                    authUser?<button 
                    className='px-3 py-1.5 rounded-full text-base text-sky-600/90 bg-white font-medium
                    md:hover:text-white md:hover:bg-sky-600/90 hover:ring-0 md:hover:py-2
                    ring-4 ring-offset-1 border-0 ring-sky-600/70 duration-200 active:scale-95'
                    onClick={logout}>Logout</button>:
                    <button 
                    className='px-3 py-1.5 rounded-full text-base text-sky-600/90 bg-white font-medium
                    md:hover:text-white md:hover:bg-sky-600/90 hover:ring-0 md:hover:py-2
                    ring-4 ring-offset-1 border-0 ring-sky-600/70 duration-200 active:scale-95'
                    onClick={()=> navigate('/login')}>Login</button>
                }
            </nav>
            </div>
        </section>
    );
};

export default Header;