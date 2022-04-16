import React from 'react';
import banner from '../banner 1.jpeg'

const Home = () => {
    return (
        <div className=''>
            <div className='h-[calc(100vh-5rem)]'>
                <img className='h-[calc(100vh-5rem)] object-cover w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;