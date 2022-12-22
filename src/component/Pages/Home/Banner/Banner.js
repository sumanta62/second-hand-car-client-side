import React from 'react';
import img1 from '../../../Images/Banner/img1.jpg'
import img2 from '../../../Images/Banner/img2.jpg'
import img3 from '../../../Images/Banner/img3.jpg'

const Banner = () => {
    return (
        <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
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
            </div>

        </div>
    </div>
    );
};

export default Banner;