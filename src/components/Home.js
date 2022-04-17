import React, { useEffect, useState } from 'react';
import banner from '../images/banner.jpg';
import ServiceCard from './ServiceCard';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
        fetch('service.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])

    return (
        <section className='container'>
            <img className='h-[calc(100vh-10.3rem)] md:h-[calc(100vh-5rem)] object-cover w-full' src={banner} alt="" />
            <div className='py-16 flex flex-wrap justify-center items-center gap-x-5 gap-y-8'>
                <h4 className='text-center underline text-gray-900/90 basis-full'>Services</h4>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Home;