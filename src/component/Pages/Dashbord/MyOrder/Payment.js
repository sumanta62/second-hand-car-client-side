import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_strike_pk);

const Payment = () => {
    const payment = useLoaderData();
    
    return (
        <div className='flex justify-center items-center mt-14'>
            <div className='bg-blue-200 p-5 md:p-20 pb-0 w-5/6 md:w-4/6 rounded-lg'>
            <h3 className="text-2xl md:text-3xl font-bold">Payment for {payment?.prodiuct_name} </h3>
            <p className="text-sm md:text-md">Please Pay <strong>${payment?.price}</strong> rupees to buy the {payment?.prodiuct_name} </p>
            <div className='card p-10 pb-3 w-full md:w-5/6 my-12 bg-amber-200' >
                <Elements stripe={stripePromise}>
                    
                    <CheckoutFrom
                    payment={payment}
                    />
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default Payment;