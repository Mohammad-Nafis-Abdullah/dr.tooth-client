import React, { useEffect, useState } from 'react';
import banner from '../images/Banner.jpg';
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
            <img className='object-cover w-full h-[30rem]' src={banner} alt="" />
            <h2 className='text-center underline text-sky-700/90 mt-16 mb-10 font-medium font-serif'>Services</h2>
            <div className='card-container'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Home;