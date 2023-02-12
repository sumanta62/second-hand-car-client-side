import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import './Hendy.css'

const HandyCar = () => {
    const { data: categaries = [], isLoading } = useQuery({
        queryKey: ['categaries'],
        queryFn: async () => {
            const res = await fetch(`https://handler-car-server-sumanta62.vercel.app/allCategary`)
            const data = await res.json({})
            return data
        }
    })
// console.log(categaries)

    return (
        <div>
            <div className='p-10'>
                <div className='px-3'>
                    <h4 className="text-2xl text-orange-500 font-bold">Handy picked</h4>
                    <h1 className="text-3xl md:text-5xl font-bold">Featured Listings</h1>
                </div>
            </div>
            <div>
                <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100 handy-section">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:grid-rows-2 ">
                        <div className="relative items-end justify-start w-full text-left bg-center bg-cover  md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-800 rounded-xl hoverImgZoom">
                            <div className="handyCardImg rounded-t-xl">
                                <img src="https://demo.vehica.com/wp-content/uploads/2020/08/6.jpg" className='w-full' alt="" />
                            </div>
                            <div className='p-3 text-gray-100 w-full'>
                                <h1 className="text-xl md:text-lg lg:text-2xl font-bold ">BMW 8-serie 2-door coupe grey</h1>
                                <h1 className="text-2xl font-bold my-3">$70,000</h1>
                                <hr />
                                <div className='space-x-5 mt-3 text-gray-400'>
                                    <button className=' btn-sm bg-orange-600 rounded-lg text-gray-100 font-bold'>2021</button>
                                    <span>Automatic</span>
                                    <span>Diesel</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full text-left bg-center bg-cover  bg-gray-800 rounded-xl hoverImgZoom">
                            <div className='relative'>
                                <div className='w-full handyCardImg rounded-t-xl'>
                                    <img src="https://demo.vehica.com/wp-content/uploads/2020/08/5-335x186.jpg" className='w-full' alt="" />
                                </div>
                                <div className='absolute flex items-center justify-between bottom-6 w-full px-5'>
                                    <AiOutlineStar className='text-3xl p-1 hover:bg-slate-200 hover:text-gray-800 rounded-full text-gray-100 '></AiOutlineStar>
                                    <div className='flex gap-2 justify-center items-center '>
                                        <GrGallery className='text-xl text-gray-100'></GrGallery>
                                        <span className='text-2xl text-bold text-gray-100'> 7</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 text-gray-100'>
                                <h1 className="text-lg md:text-md lg:text-lg font-bold ">Chevrolet Camaro 2-door convertible blue</h1>
                                <h1 className="text-2xl font-bold my-3">$40,000</h1>
                                <hr />
                                <div className='space-x-5 md:space-x-3 lg:space-x-4 mt-3 text-gray-400'>
                                    <button className=' btn-sm bg-orange-600 rounded-lg text-gray-100 font-bold'>2022</button>
                                    <span>Automatic</span>
                                    <span>Diesel</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full text-left bg-center bg-cover  bg-gray-800 rounded-xl hoverImgZoom">
                            <div className='relative'>
                                <div className='handyCardImg rounded-t-xl'>
                                    <img src="https://demo.vehica.com/wp-content/uploads/2020/09/car-red-335x186.jpg" className='w-full' alt="" />
                                </div>
                                <div className='absolute flex items-center justify-between bottom-6 w-full px-5'>
                                    <AiOutlineStar className='text-3xl p-1 hover:bg-slate-200 hover:text-gray-800 rounded-full text-gray-100 '></AiOutlineStar>
                                    <div className='flex gap-2 justify-center items-center '>
                                        <GrGallery className='text-xl text-gray-100'></GrGallery>
                                        <span className='text-2xl text-bold text-gray-100'> 7</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 text-gray-100'>
                                <h1 className="text-lg md:text-md lg:text-lg font-bold ">Ferrari LaFerrari 2-door coupe red</h1>
                                <h1 className="text-2xl font-bold my-3">$65,000</h1>
                                <hr />
                                <div className='space-x-5 md:space-x-3 lg:space-x-4 mt-3 text-gray-400'>
                                    <button className=' btn-sm bg-orange-600 rounded-lg text-gray-100 font-bold'>2020</button>
                                    <span>Automatic</span>
                                    <span>Diesel</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full text-left bg-center bg-cover  bg-gray-800 rounded-xl hoverImgZoom">
                            <div className='relative'>
                                <div className='handyCardImg rounded-t-xl'>
                                    <img src="https://demo.vehica.com/wp-content/uploads/2020/08/audi3-335x186.jpg" className='w-full' alt="" />
                                </div>
                                <div className='absolute flex items-center justify-between bottom-6 w-full px-5'>
                                    <AiOutlineStar className='text-3xl p-1 hover:bg-slate-200 hover:text-gray-800 rounded-full text-gray-100 '></AiOutlineStar>
                                    <div className='flex gap-2 justify-center items-center '>
                                        <GrGallery className='text-xl text-gray-100'></GrGallery>
                                        <span className='text-2xl text-bold text-gray-100'> 7</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 text-gray-100'>
                                <h1 className="text-lg md:text-md lg:text-lg font-bold ">Audi A8 4-door sedan silve</h1>
                                <h1 className="text-2xl font-bold my-3">$7,000</h1>
                                <hr />
                                <div className='space-x-5 md:space-x-3 lg:space-x-4 mt-3 text-gray-400'>
                                    <button className=' btn-sm bg-orange-600 rounded-lg text-gray-100 font-bold'>2021</button>
                                    <span>Automatic</span>
                                    <span>Diesel</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full text-left bg-center bg-cover  bg-gray-800 rounded-xl hoverImgZoom">
                            <div className='relative'>
                                <div className='handyCardImg rounded-t-xl'>
                                    <img src="https://demo.vehica.com/wp-content/uploads/2020/06/mrec-335x186.jpg" className='w-full' alt="" />
                                </div>
                                <div className='absolute flex items-center justify-between bottom-6 w-full px-5'>
                                    <AiOutlineStar className='text-3xl p-1 hover:bg-slate-200 hover:text-gray-800 rounded-full text-gray-100 '></AiOutlineStar>
                                    <div className='flex gap-2 justify-center items-center '>
                                        <GrGallery className='text-xl text-gray-100'></GrGallery>
                                        <span className='text-2xl text-bold text-gray-100'> 7</span>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 text-gray-100'>
                                <h1 className="text-lg md:text-md lg:text-lg font-bold ">Mercedes-Benz coupe silver</h1>
                                <h1 className="text-2xl font-bold my-3">$7,000</h1>
                                <hr />
                                <div className='space-x-5 md:space-x-3 lg:space-x-4 mt-3 text-gray-400'>
                                    <button className=' btn-sm bg-orange-600 rounded-lg text-gray-100 font-bold'>2021</button>
                                    <span>Automatic</span>
                                    <span>Diesel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandyCar;