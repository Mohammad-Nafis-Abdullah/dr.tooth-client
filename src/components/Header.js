import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='container md:h-20 md:px-3 flex justify-center md:justify-between items-center shadow-md flex-wrap gap-5'>
            <div className='flex justify-center items-center text-xl gap-2 font-medium text-slate-900'>
                <img src={logo} className='cursor-pointer h-16' alt="" onClick={()=> navigate('/')}/>
                <span className='first-letter:text-3xl text-2xl cursor-pointer' onClick={()=> navigate('/')}>Abdullah's Catering</span>
            </div>
            <nav className="flex items-center justify-center gap-5 flex-wrap bg-gray-900 md:bg-transparent 
            basis-full md:basis-auto py-2 md:py-0">
                <NavLink to='/checkout' className={(status)=> status.isActive?'link-active':'link'}>Checkout</NavLink>
                <NavLink to='/blog' className={(status)=> status.isActive?'link-active':'link'}>Blog</NavLink>
                <NavLink to='/about' className={(status)=> status.isActive?'link-active':'link'}>About</NavLink>
                
                {/* accordin to task no. 12 condition rendering applied for the logout button */}
                <button 
                className='px-5 py-1.5 rounded-full text-lg text-gray-900/90 bg-white font-medium
                md:hover:text-white md:hover:bg-gray-900/90 hover:ring-0 
                ring-4 ring-offset-1 border-0 ring-gray-900/70 duration-200 active:scale-95'
                onClick={()=> navigate('/login')}>Logout</button>
            </nav>
        </div>
    );
};

export default Header;