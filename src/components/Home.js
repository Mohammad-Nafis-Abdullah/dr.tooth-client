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
            <img className='object-cover w-full h-[28rem]' src={banner} alt="" />
            <h3 className='text-center underline text-gray-900/90 mt-16 mb-10'>Services</h3>
            <div className='card-container'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Home;