import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CarMicrobus from './CarMicrobus';
import ProductComment from './ProductComment';

const Microbus = () => {
    const userLoaders = useLoaderData();
    const {_id, name, location, img, original_price, post_date, prodiuct_name, resale_price, use_year, details } = userLoaders;
    const [rightSideGame, setRightSideGame] = useState()
    const [carBooking, setCarBooking] = useState(null)
    console.log(carBooking);


    const {
        data: showAllCars,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["showAllCar"],
        queryFn: async () => {
            const res = await fetch(
                "http://localhost:5000/allCategary"
            );
            const data = await res.json();

            return data;
        },
    });

    return (
        <div className="text-white">
            <div className=" w-full  flex flex-col items-center justify-center relative transition-all">
                <img src={img} className=" w-full h-[400] md:h-[450] lg:h-[500px]" alt="" />
            </div>
            <div className="bg-gray-900 px-5 md:px-10">
                <div className="flex justify-center items-center space-x-2 lg:space-x-20 space-y-4 pt-5 pb-16">
                    <div className="flex items-end gap-5">
                        <div className="hidden md:block -mt-32 z-10 ">
                            <img src={img} className="w-44 md:w-60 p-4 bg-yellow-500" alt="" />
                        </div>
                        <div className=" ">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold hover:underline cursor-pointer ">
                                {prodiuct_name}{" "}
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-80 p-3 flex justify-between items-center bg-amber-700 gap-1">
                        <div>
                            <h3 className="text-md md:text-2xl font-bold">Game Rating</h3>
                            <h4 className="text-sm md:text-md lg:text-xl">
                                User Ratings:555
                            </h4>
                            <h4 className="text-sm md:text-md lg:text-xl">
                                Our Review: 9/10
                            </h4>
                        </div>
                        <div>
                            <FaStar className="text-yellow-500 text-5xl md:text-7xl"></FaStar>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 pt-6 pb-4">
                <div className="md:flex justify-between mx-5 md:mx-10 gap-5 md:gap-20 lg:gap-44 space-y-5">
                    <div className="w-full md:w-6/6 lg:w-6/6 ">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
                                {/* download button */}
                                <div>
                                    {/* The button to open modal */}
                                    <label onClick={() => setCarBooking(userLoaders)}
                                        htmlFor="bookingModal"
                                        className="py-3 hover:translate-y-1  relative px-5 rounded-none font-bold bg-orange-600 uppercase cursor-pointer text-white"
                                    >
                                        Booking Car
                                    </label>
                                    {
                                        carBooking &&
                                        <BookingModal
                                            carBooking={carBooking}
                                            setCarBooking={setCarBooking}
                                            key={carBooking._id}
                                        >
                                        </BookingModal>}
                                </div>
                            </div>

                            <hr className="text-gray-400" />
                        </div>
                        <div className="grid grid-cols-2 pt-5">
                            <div className="space-y-2">
                                <p>Name : </p>
                                <p>Location:  </p>
                                <p>Original_price: </p>
                                <p>Resale_price : </p>
                                <p>Use_year : </p>
                                <p>Release Date : </p>
                                <p>Description : </p>
                            </div>
                            <div className="space-y-2">
                                <p>{name} </p>
                                <p>{location}</p>
                                <p className="font-bold  text-xl">$ <span className="text-amber-500">{original_price} </span></p>
                                <p className="font-bold  text-xl">$ <span className="text-amber-500">{resale_price}</span></p>
                                <p>{use_year}</p>
                                <p>{post_date}</p>
                                <p className="text-justify">{details} </p>
                            </div>
                        </div>
                        <div className="space-y-3 my-8 ">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Comment 
                            </h1>
                            <hr className="text-gray-400" />
                        </div>
                      
                        <ProductComment
                            detailsId={_id}
                            rightSideGame={rightSideGame}
                        ></ProductComment>
                    </div>
                    <div className="w-full md:w-6/12">
                        <div className="w-full bg-yellow-600 mt-5 md:mt-0 ">
                            <div className="p-4 space-x-4">
                                {showAllCars?.map((displayGame, i) => (
                                    <Link to={`/allCategary/${displayGame?._id}`}
                                        onClick={() => setRightSideGame(displayGame?._id)}>
                                        <div className="grid grid-cols-4 lg:grid-cols-2 items-center gap-4">
                                            <div className="col-span-1 lg:col-span-1 md:w-full">
                                                <img
                                                    src={displayGame?.img}
                                                    className="w-full h-full object-cover"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-span-3 lg:col-span-1">
                                                <h5 className="text-xl md:text-sm lg:text-xl hover:underline">
                                                    {displayGame?.prodiuct_name}
                                                </h5>
                                            </div>
                                        </div>
                                        <hr className="mt-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Microbus;