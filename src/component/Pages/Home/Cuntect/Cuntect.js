import React from 'react';
import leftSideImg from '../../../Images/contuct/raqib-webappdeveloper.webp'
import './Contuct.css'

const Cuntect = () => {
    return (
        <div className=" bg-gray-50 " >
            <div className='text-center p-8 mt-20 w-10/12 md:w-7/12 lg:w-3/6 m-auto '>
                <h1 className="text-3xl md:text-5xl font-bold pb-2">Contact Me</h1>
                <p className='text-sm md:text-md'>If I can be of assistance, please do not hesitate to contact me. If you require any further information, feel free to contact me.</p>
            </div>
            <div className='w-11/12 m-auto md:grid grid-cols-2 justify-center items-center gap-5'>
                <div className="leftSideImg w-full mx-auto">
                    <img src={leftSideImg} className='m-auto' alt="" />
                </div>
                <section className=" pb-9 pt-2 w-full lg:w-5/6 m-auto">
                    <form action="https://formsubmit.co/f9f04ad9e54a9d9e7da278deba458db4" method="POST" className="container flex flex-col mx-auto space-y-12 ">
                        <div className="grid gap-6 p-6 rounded-md bg-gray-800 shadow-lg text-white">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Username</label>
                                    <input id="username" type="text" placeholder="Username" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder="" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Description</label>
                                    <textarea id="bio" placeholder="" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <div className="flex items-center justify-center space-x-2">
                                        <button type="submit" className=" btn-md border shadow-2xl  font-bold text-white w-3/6 hover:bg-amber-500 transform duration-500 float-right">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </section >
            </div>
        </div>
    );
};

export default Cuntect;