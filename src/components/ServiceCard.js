import React from 'react';
import {CheckIcon,CheckCircleIcon,BadgeCheckIcon} from '@heroicons/react/solid';

const ServiceCard = ({service}) => {
    const {name,imgSrc, details,option1,price1,option2,price2,option3,price3} = service;

    return (
        <div className='service-card'>
            <img src={imgSrc} alt="" />
            <h6>{name}</h6>
            <p>{details}</p>
            <p><CheckIcon className='icon' />{option1} <span>{price1}</span></p>
            <p><CheckCircleIcon className='icon' />{option2} <span>{price2}</span></p>
            <p><BadgeCheckIcon className='icon' />{option3} <span>{price3}</span></p>
            <button>Select</button>
        </div>
    );
};

export default ServiceCard;