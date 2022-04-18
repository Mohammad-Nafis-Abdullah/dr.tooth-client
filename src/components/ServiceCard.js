import React from 'react';
import {CheckIcon} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id,name,imgSrc,details,price} = service;
    const navigate = useNavigate();

    return (
        <div className='service-card'>
            <img src={imgSrc} alt="" />
            <h5>{name}</h5>
            <p className='h-[9.5rem] p-1 overflow-auto'>{details}</p>
            <p><CheckIcon className='icon' />Price : <span>{price}</span></p>
            <button onClick={()=> navigate(`/checkout/${id}`)}>Select</button>
        </div>
    );
};

export default ServiceCard;