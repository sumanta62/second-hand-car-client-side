import React from 'react';
import { FaMedal } from 'react-icons/fa';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const WhyChoose = () => {
    return (
        <div className='my-12'>
            <div>
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-9">Why choose us?</h1>
            </div>
            <div className=' md:flex w-11/12 md:w-10/12 m-auto text-center gap-8 space-y-5'>
                <div className='space-y-5'>
                    <FaMedal className='text-7xl p-5 rounded-full bg-orange-100 text-orange-400 m-auto'></FaMedal>
                   <div>
                   <h2 className="text-xl md:text-2xl">Wide range of brands</h2>
                    <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                   </div>
                </div>
                <div  className='space-y-5'>
                    <VscWorkspaceTrusted className='text-7xl p-6 rounded-full bg-lime-100 text-lime-600 m-auto'></VscWorkspaceTrusted>
                    <div>
                   <h2 className="text-xl md:text-2xl">Wide range of brands</h2>
                    <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                   </div>
                </div>
                <div  className='space-y-5'>
                    <HiOutlineCurrencyDollar className='text-7xl p-5 rounded-full bg-blue-100 text-blue-400 m-auto'></HiOutlineCurrencyDollar>
                    <div>
                   <h2 className="text-xl md:text-2xl">Wide range of brands</h2>
                    <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;