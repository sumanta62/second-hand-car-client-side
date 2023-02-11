import React from 'react';
import './Banner.css'
import { GiCityCar, GiF1Car } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="flex w-full banner-section" >
                <div className=" flex justify-center items-center flex-col w-full text-center"  >
                    <h1 className="text-3xl md:text-5xl font-bold">Find Your <span className="text-orange-700">Perfect</span> Car</h1> 
                    <p className="mb-5 text-sm md:text-md mt-5">Browse our selection of quality used cars for sale in  <br /> Wembley, Middlesex. If you can’t find what you’re<br /> looking for please feel free to contact.</p>
                    <div className='flex mt-9 space-x-9 '>
                        <div>
                           <Link to={'/allCategary/01'}> <FaCarSide className='text-7xl text-white p-2 border rounded-full hover:bg-orange-700 '></FaCarSide></Link>
                            <p>Microbus</p>
                        </div>
                        <div>
                            <Link to={'/allCategary/02'}> <GiF1Car className='text-7xl text-white p-2 border rounded-full hover:bg-orange-700'></GiF1Car></Link>
                            <p>Luxury Car</p>
                        </div>
                        <div>
                            <Link to={'/allCategary/03'}> <GiCityCar className='text-7xl text-white p-2 border rounded-full hover:bg-orange-700 '></GiCityCar></Link>
                            <p>Electric Car</p></div>
                    </div>
                </div>
                {/* <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-16" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-4xl font-bold">WELCOME TO THE CAR DEALER </h1>
                            <p className="mb-5 text-sm md:text-md">Browse our selection of quality used cars for sale in Wembley, Middlesex. If you can’t find what you’re looking for please feel free to contact.</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-4xl font-bold">THE FINANCING DEALS FOR A CAR THAT TO BUY</h1>
                            <p className="mb-5 text-sm md:text-md">We, at Neessen Chevrolet Buick GMC in KINGSVILLE, work hard to make sure you get the best financing deals on any car that wish to purchase.  Our staff has the knowledge and experience to get you into the financing program that fits your budget and needs.</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl md:text-4xl font-bold">OUR KINGSVILLE-BASED DEALERSHIP</h1>
                            <p className="mb-5 text-sm md:text-md">Our KINGSVILLE-based dealership is a one-stop shop for all your Buick, Chevrolet, and GMC service and repair needs. Not only do we have convenient hours, competitive service, and parts pricing, but also advanced technology to take the stress out of servicing your.</p>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}

            </div>
        </div>
    );
};

export default Banner;