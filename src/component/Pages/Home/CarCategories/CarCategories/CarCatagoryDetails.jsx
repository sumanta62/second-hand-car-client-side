import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CarCatagoryDetails = () => {
    const userLoaders = useLoaderData();
    return (
        <div className='bg-blue-200'>
            <div className='py-12 w-10/12 m-auto'>
                <div className='text-center mb-8'>
                    <h2 className="text-5xl font-bold ">Our Stored Car</h2>
                    <p>A stored vehicle means a car vehicle that is stored or parked on <br /> a Real Property and is not licensed and  insured <br /> for operation on public highways.</p>
                </div>
                <div className='grid grid-cols md:grid-cols-2 gap-6 '>
                    {
                        userLoaders.map(catagoryDetails =>
                            <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                                <div>
                                    <img src={catagoryDetails?.img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                                    <h2 className="mb-1 text-xl font-semibold">{catagoryDetails?.prodiuct_name}</h2>
                                    <p className="text-sm text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className=" text-sm text-gray-400">

                                        <span className="text-xs text-gray-400">{catagoryDetails?.post_date}</span>
                                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                                            <small>Use Year: </small>
                                            <span>{catagoryDetails?.use_year} yr</span>
                                        </button>
                                        <button aria-label="Share this post" type="button" className="flex items-center space-x-1.5">
                                            <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" className='w-6' alt="" />
                                            <small>{catagoryDetails?.location}</small>
                                        </button>

                                    </div>
                                    <div className="  text-sm text-gray-400">
                                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                                            <small>Resale Price: </small>
                                            <span>$ {catagoryDetails?.resale_price}</span>
                                        </button>
                                        <button type="button" className="flex items-center p-1 space-x-1.5">

                                            <small>Original Price: </small>
                                            <span>$ {catagoryDetails?.original_price}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div>
                                        <Link to={`/`}>
                                            <button className='btn btn-success font-bold '>Back Page </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <div className=" flex gap-2 mb-2">
                                            <span className="text-sm font-semibold"> {catagoryDetails?.name}
                                            </span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeLinejoin="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <label
                                                // onClick={() => setTithment(catagoryDetails)}
                                                htmlFor="booking-modal"
                                                className="btn btn-success font-bold w-full">Book now</label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default CarCatagoryDetails;