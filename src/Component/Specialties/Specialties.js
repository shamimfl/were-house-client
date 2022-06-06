import React from 'react';
import './Specialties.css'

const Specialties = () => {
    return (
        <div className='bg-div text-black font-bold'>
            <h1 className='text text-center text-3xl pt-20'>Our Specialties</h1>
            <h1 className='mt-10 text-center text-xl'>Best Solution for Your Needs</h1>

            <div className='md:flex mt-5'>
            <div className='p-5'>
                <div className='flex justify-center items-center'>
                    <img src="https://template68190.motopreview.com/mt-demo/68100/68190/mt-content/uploads/2018/06/mt-1508-home-icon1.png" alt="" />
                    <h1 className='text-xl font-bold'>Storage</h1>
                </div>
                <p>We provide storage from general goods to automotive parts for long- or short-term storage</p>
               </div>
            <div className='p-5'>
                <div className='flex items-center justify-center'>
                    <img src="https://template68190.motopreview.com/mt-demo/68100/68190/mt-content/uploads/2018/06/mt-1508-home-icon2.png" alt="" />
                    <h1 className='text-xl font-bold '>Distribution</h1>
                </div>
                <p> DEPOT management system and reporting capabilities allow us to fulfill all your orders</p>
            </div>
            <div className='p-5'>
                <div className='flex items-center justify-center'>
                    <img src="https://template68190.motopreview.com/mt-demo/68100/68190/mt-content/uploads/2018/06/mt-1508-home-icon3.png" alt="" />
                    <h1 className='text-xl font-bold'>Trucking</h1>
                </div>
                <p>Whether it’s overnight or during the day, across town or across the North Dakota region, we have the experience you seek</p>
            </div>
        </div>
        </div>
    );
};

export default Specialties;