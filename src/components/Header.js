import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.png'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='container h-20 px-5 flex justify-between items-center'>
            <div className='flex justify-center items-center text-xl gap-2 font-medium text-slate-900'>
                <img src={logo} className='cursor-pointer h-16' alt="" onClick={()=> navigate('/')}/>
                <span className='first-letter:text-3xl cursor-pointer' onClick={()=> navigate('/')}>Love Bite Catering</span>
            </div>
            <nav className="flex items-center justify-center gap-5">
                <NavLink to='/checkout' className={(status)=> status.isActive?'link-active':'link'}>Checkout</NavLink>
                <NavLink to='/blog' className={(status)=> status.isActive?'link-active':'link'}>Blog</NavLink>
                <NavLink to='/about' className={(status)=> status.isActive?'link-active':'link'}>About</NavLink>
            </nav>
            <button className='px-5 py-1.5 rounded-full text-lg text-gray-900/90 
            hover:text-white hover:bg-gray-900/90 hover:ring-0 
            ring-4 ring-offset-1 border-0 ring-gray-900/70 duration-200 active:scale-95'
            onClick={()=> navigate('/login')}>Login</button>
        </div>
    );
};

export default Header;