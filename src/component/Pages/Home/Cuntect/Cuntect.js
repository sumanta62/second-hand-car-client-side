import React from 'react';

const Cuntect = () => {
    return (
        <div className=" bg-gray-100 text-white" style={{backgroundImage:`url(https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, width:'100%', backgroundSize:'cover', backgroundPosition:'center' }}>
             <div className="hero-overlay bg-opacity-90"></div>
            <section className=" pb-9 pt-2 ">
                <div className='text-center pb-5 mt-20 w-5/6 md:w-3/6 lg:w-2/6 m-auto'>
                    <h1 className="text-3xl md:text-4xl font-bold pb-2">Contact Me</h1>
                    <p className='text-sm md:text-md'>If I can be of assistance, please do not hesitate to contact me. If you require any further information, feel free to contact me.</p>
                </div>
                <form action="https://formsubmit.co/f9f04ad9e54a9d9e7da278deba458db4" method="POST" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid w-5/6 md:w-4/6 lg:w-3/6">
                    <div className="grid gap-6 p-6 rounded-md bg-gray-900 shadow-lg">

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
                                <div className="flex items-center space-x-2">

                                    <button type="submit" className=" bg-orange-500 px-6 py-2 fond-bold rounded">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </section >
        </div>
    );
};

export default Cuntect;