import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CarMicrobus from './CarMicrobus';

const Microbus = () => {
    const userLoaders = useLoaderData();
    const [tithment, setTithment] = useState(null);


    return (
        <div className='bg-gray-700 text-white'>
            <div className='py-12 w-10/12 m-auto'>
                <div className='text-center mb-8'>
                    <h2 className="text-5xl font-bold ">Our Stored Car</h2>
                    <p>A stored vehicle means a car vehicle that is stored or parked on <br /> a Real Property and is not licensed and  insured <br /> for operation on public highways.</p>
                </div>
                <div className='grid grid-cols md:grid-cols-2 gap-6 '>
                    {
                        userLoaders.map(apporment => <CarMicrobus
                            key={apporment._id}
                            apporment={apporment}
                            setTithment={setTithment}
                        >
                        </CarMicrobus>)
                    }
                </div>
                {
                tithment &&
                    <BookingModal
                        tithment={tithment}
                        setTithment={setTithment}
                        key={tithment._id}
                    >
                    </BookingModal>}
            </div>
        </div>
    );
};

export default Microbus;