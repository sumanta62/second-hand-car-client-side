import React from 'react';
import './Banner.css'
import { GiCityCar, GiF1Car } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='pt-10'>
            <div className="flex w-full banner-section h-screen" >
                <div className=" flex justify-center items-center flex-col w-full text-center"  >
                    <h1 className="text-3xl md:text-5xl font-bold">Find Your <span className="text-orange-500">Perfect</span> Car</h1> 
                    <p className="mb-5 text-sm md:text-md mt-5">Browse our selection of quality used cars for sale in  <br /> Wembley, Middlesex. If you can’t find what you’re<br /> looking for please feel free to contact.</p>
                    <div className='flex mt-9 space-x-9 '>
                        <div>
                           <Link to={'/'}> <FaCarSide className='text-7xl text-white p-2 border rounded-full hover:bg-orange-500 '></FaCarSide></Link>
                            <p>Microbus</p>
                        </div>
                        <div>
                            <Link to={'/'}> <GiF1Car className='text-7xl text-white p-2 border rounded-full hover:bg-orange-500'></GiF1Car></Link>
                            <p>Luxury Car</p>
                        </div>
                        <div>
                            <Link to={'/allCategary/03'}> <GiCityCar className='text-7xl text-white p-2 border rounded-full hover:bg-orange-500 '></GiCityCar></Link>
                            <p>Electric Car</p></div>
                    </div>
                </div>
        
            </div>
        </div>
    );
};

export default Banner;