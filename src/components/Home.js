import React from 'react';
import banner from '../banner 1.jpeg'

const Home = () => {
    return (
        <div className=''>
            <img className='h-[calc(100vh-10.3rem)] md:h-[calc(100vh-5rem)] object-cover w-full' src={banner} alt="" />
            
        </div>
    );
};

export default Home;