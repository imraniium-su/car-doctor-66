import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-66.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-4'>
                <p className='text-2xl font-bold text-orange-600' >Services</p>
                <h1 className='text-5xl font-bold my-2'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {services.map(service => <ServiceCart key={service._id} service={service} ></ServiceCart>)}
            </div>
        </div>
    );
};

export default Services;