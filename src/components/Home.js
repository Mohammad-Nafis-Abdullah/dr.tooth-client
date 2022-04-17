import React from 'react';
import banner from '../images/banner.jpg'
import family from '../images/family.jpg'
import wedding from '../images/wedding.jpg'
import mezban from '../images/mezban.jpg'
import {CheckIcon,CheckCircleIcon,BadgeCheckIcon} from '@heroicons/react/solid'

const Home = () => {
    return (
        <section className='container'>
            <img className='h-[calc(100vh-10.3rem)] md:h-[calc(100vh-5rem)] object-cover w-full' src={banner} alt="" />
            <div className='py-16 flex flex-wrap justify-center items-center gap-5'>
                <h4 className='text-center underline text-gray-900/90 basis-full'>Services</h4>
                <div className='service-card'>
                    <h6>Family Program</h6>
                    <img src={family} alt="" />
                    <p>Maximum 6 items are included with the packages. Over 6 items 2000 Tk/day will be extra charged for each additional item.</p>
                    <p><CheckIcon className='icon'/>20-50 person <span>15000 Tk/day</span></p>
                    <p><CheckCircleIcon className='icon'/>50-100 person <span>25000 Tk/day</span></p>
                    <p><BadgeCheckIcon className='icon'/>100+ person <span>40000 Tk/day</span></p>
                    <button>Select</button>
                </div>
                <div className='service-card'>
                    <h6>Wedding Ceremony</h6>
                    <img src={wedding} alt="" />
                    <p>Maximum 10 items are included with the packages. Over 10 items 3000 Tk/day will be extra charged for each additional item.</p>
                    <p><CheckIcon className='icon'/>20-50 person <span>25000 Tk/day</span></p>
                    <p><CheckCircleIcon className='icon'/>50-100 person <span>40000 Tk/day</span></p>
                    <p><BadgeCheckIcon className='icon'/>100+ person <span>70000 Tk/day</span></p>
                    <button>Select</button>
                </div>
                <div className='service-card'>
                    <h6>Traditional Mezbani</h6>
                    <img src={mezban} alt="" />
                    <p>Maximum 5 items are included with the packages. Over 5 items 2000 Tk/day will be extra charged for each additional item.</p>
                    <p><CheckIcon className='icon'/>20-50 person <span>30000 Tk/day</span></p>
                    <p><CheckCircleIcon className='icon'/>50-100 person <span>45000 Tk/day</span></p>
                    <p><BadgeCheckIcon className='icon'/>100+ person <span>70000 Tk/day</span></p>
                    <button>Select</button>
                </div>
            </div>
        </section>
    );
};

export default Home;