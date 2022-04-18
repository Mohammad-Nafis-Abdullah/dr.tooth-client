import { BadgeCheckIcon } from '@heroicons/react/solid';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Checkout = () => {
    const services = useFetch('/service.json');
    const params = useParams();
    const {id:serviceId} = params;
    const selected = services.find((service)=> service.id===serviceId);


    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-wrap justify-center items-center px-3 py-8 gap-8'>
            <form className='max-w-sm p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Check out Form</h3>
                <div className="input-container">
                    <input type="email" name="floating_email" className="input-field" placeholder=" " required=""/>
                        <label htmlFor="floating_email" className="input-label">Email address</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="input-container">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="input-field" placeholder=" " required=""/>
                            <label htmlFor="floating_first_name" className="input-label">First name</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="input-field" placeholder=" " required=""/>
                            <label htmlFor="floating_last_name" className="input-label">Last name</label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="input-container">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="input-field" placeholder=" " required=""/>
                            <label htmlFor="floating_phone" className="input-label">Phone number</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="floating_company" id="floating_company" className="input-field" placeholder=" " required=""/>
                            <label htmlFor="floating_company" className="input-label">Address</label>
                    </div>
                </div>
                <button type="submit" className="block mx-auto px-16 py-1.5 rounded-md text-sky-700 font-medium
                hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Submit</button>
            </form>
            {
                selected && 
                <div className='max-w-sm w-full flex justify-center items-center p-3 shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] rounded-xl gap-3'>
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