import React from 'react';
import nafis from '../images/nafis.jpg';

const About = () => {
    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-wrap justify-center items-center'>
            <div className='nafis'><img className='h-60 rounded-3xl' src={nafis} alt="" /></div>
            <div className='basis-96 shadow-lg border rounded-3xl p-5 space-y-3'>
                <p className='text-gray-900/90 text-center'>"My next goal or target is to become a professional web developer and getharing knowladge about web technology. For reaching successfully to all of my goals there is no way to become a hardworker. So, I set my mentality to work hard. In sha ALLAH, I will win soon"</p>
                <p className='font-medium text-gray-900/90 text-right before:content-["--"] before:mr-2'>Muhammad Nafis Abdullah</p>
            </div>
        </div>
    );
};

export default About;