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
            <div className='flex justify-center gap-8 mb-10 p-3'>
                <div className="extra">
                    <h5 className='text-center font-medium text-white'>Chamber 1 : Chittagong</h5>
                    <address>Halishahar, K-block R/A , Road No. 05 </address>
                    <p>Telephone : 03148579325</p>
                    <p>Visiting Day : Sat, Mon, Wed</p>
                    <p>Visition Time : 6:00pm - 12:00am</p>
                </div>
                <div className="extra">
                    <h5 className='text-center'>Chamber 2 : Dhaka</h5>
                    <address>Halishahar, K-block R/A , Road No. 05 </address>
                    <p>Telephone : 0314462325</p>
                    <p>Visiting Day : Sun, Tue, Thu</p>
                    <p>Visition Time : 6:00pm - 12:00am</p>
                </div>
            </div>
        </section>
    );
};

export default Home;