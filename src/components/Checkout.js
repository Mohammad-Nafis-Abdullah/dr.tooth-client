import React from 'react';

const Checkout = () => {
    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-wrap justify-center items-center px-3 gap-5'>
            <form className='max-w-sm mx-auto my-8 p-5 rounded-xl shadow-[0_0_15px_1px_rgba(0,0,0,0.343)] w-full'>
                <h3 className='text-center mb-10 text-sky-600 font-medium'>Check In Form</h3>
                <div className="input-container">
                    <input type="email" name="floating_email" className="input-field" placeholder=" " required=""/>
                        <label for="floating_email" className="input-label">Email address</label>
                </div>
                <div className="input-container">
                    <input type="password" name="floating_password" id="floating_password" className="input-field" placeholder=" " required=""/>
                        <label for="floating_password" className="input-label">Password</label>
                </div>
                <div className="input-container">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="input-field" placeholder=" " required=""/>
                        <label for="floating_repeat_password" className="input-label">Confirm password</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="input-container">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="input-field" placeholder=" " required=""/>
                            <label for="floating_first_name" className="input-label">First name</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="input-field" placeholder=" " required=""/>
                            <label for="floating_last_name" className="input-label">Last name</label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="input-container">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="input-field" placeholder=" " required=""/>
                            <label for="floating_phone" className="input-label">Phone number</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="floating_company" id="floating_company" className="input-field" placeholder=" " required=""/>
                            <label for="floating_company" className="input-label">Address</label>
                    </div>
                </div>
                <button type="submit" className="block mx-auto px-16 py-1.5 rounded-md text-sky-700 font-medium
                hover:text-white hover:bg-sky-700 border-2 border-sky-700 duration-150 active:scale-95">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;