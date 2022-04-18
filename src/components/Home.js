import React from 'react';
import useFetch from '../hooks/useFetch';
import banner from '../images/Banner.jpg';
import ServiceCard from './ServiceCard';

const Home = () => {
    const services = useFetch('/service.json');

    return (
        <section className='container'>
            <img className='object-cover object-right w-full h-[30rem]' src={banner} alt="" />
            <h2 className='text-center underline text-sky-700/90 mt-16 mb-10 font-medium font-serif'>Services</h2>
            <div className='card-container'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}/>)
                }
            </div>
            <h2 className='text-center underline text-sky-700/90 mt-24 mb-8 font-medium font-serif'>Personal Chamber</h2>
            <div className='flex justify-center gap-8 mb-10 border-4 p-3'>
                <div className="extra fromLeft">

                </div>
                <div className="extra fromRight">

                </div>
            </div>
        </section>
    );
};

export default Home;