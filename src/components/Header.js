import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/tooth-logo.png'

const Header = () => {
    const navigate = useNavigate();

    return (
        <section className='shadow-md'>
            <div className='container md:h-20 md:px-3 flex justify-center md:justify-between items-center flex-wrap gap-5'>
            <div className='flex justify-center items-center text-xl gap-2 font-medium text-slate-900 pt-2 md:pt-0'>
                <img src={logo} className='cursor-pointer h-16' alt="" onClick={()=> navigate('/')}/>
                <span className='first-letter:text-2xl text-xl cursor-pointer text-sky-600' onClick={()=> navigate('/')}>Dr. Tooth</span>
            </div>
            <nav className="flex items-center justify-center gap-5 flex-wrap bg-sky-600 md:bg-transparent 
            basis-full md:basis-auto py-2 md:py-0">
                <NavLink to='/checkout' className={(status)=> status.isActive?'link-active':'link'}>Checkout</NavLink>
                <NavLink to='/blog' className={(status)=> status.isActive?'link-active':'link'}>Blog</NavLink>
                <NavLink to='/about' className={(status)=> status.isActive?'link-active':'link'}>About</NavLink>
                
                {/* accordin to task no. 12 condition rendering applied for the logout button */}
                <button 
                className='px-3 py-1.5 rounded-full text-base text-sky-600/90 bg-white font-medium
                md:hover:text-white md:hover:bg-sky-600/90 hover:ring-0 md:hover:py-2
                ring-4 ring-offset-1 border-0 ring-sky-600/70 duration-200 active:scale-95'
                onClick={()=> navigate('/login')}>Logout</button>
            </nav>
            </div>
        </section>
    );
};

export default Header;