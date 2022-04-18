import { BadgeCheckIcon } from '@heroicons/react/solid';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from '../hooks/useFetch';

const Checkout = () => {
    const services = useFetch('/service.json');
    const params = useParams();
    const {id:serviceId} = params;
    const selected = services.find((service)=> service.id===serviceId);

    const checkedOut = (e)=> {
        e.preventDefault();
        e.target.email.value = '';
        e.target.name.value = '';
        e.target.phone.value = '';
        e.target.address.value = '';

        selected?toast('Thanks for checking out our service'):alert('No service selected');
    }

    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-wrap justify-center items-center px-3 py-8 gap-8'>
            <form onSubmit={checkedOut} className='max-w-sm p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full fromLeft'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Check out Form</h3>
                <div className="input-container">
                    <input type="text" name="name" className="input-field" placeholder=" " required=""/>
                        <label className="input-label">Name</label>
                </div>
                <div className="input-container">
                    <input type="email" name="email" className="input-field" placeholder=" " required=""/>
                        <label className="input-label">Email address</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="input-container">
                        <input type="tel" name="phone" className="input-field" placeholder=" " required=""/>
                            <label className="input-label">Phone number</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="address" className="input-field" placeholder=" " required=""/>
                            <label className="input-label">Address</label>
                    </div>
                </div>
                <button type='submit' className="block mx-auto px-16 py-1.5 rounded-md text-sky-700 font-medium
                hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Submit</button>
            </form>
            {
                selected && 
                <div className='max-w-sm w-full flex justify-center items-center p-3 shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] rounded-xl gap-3 fromRight'>
                    <img className='h-28 w-36 object-cover rounded-md' src={'/'+selected?.imgSrc} alt="" />
                    <div className='text-center font-medium space-y-3 grow'>
                        <h5 className='text-sky-700 flex justify-center items-center'><BadgeCheckIcon className='h-8 text-sky-700'/>{selected?.name}</h5>
                        <p className='font-bold text-gray-900'>Price : <span className='text-gray-900/80'>{selected?.price}</span></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Checkout;