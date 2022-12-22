import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_strike_pk);

const Payment = () => {
    const payment = useLoaderData();
   
    return (
        <div className='bg-blue-200 p-20 pb-0 w-4/6 m-14 rounded-lg'>
            fjdghvjgvfdkf
            <h3 className="text-3xl font-bold">Payment for {payment?.treatment} </h3>
            <p className="text-xl">PleasePay <strong>${payment?.price}</strong> for your application on {payment.appormentDate} at {payment?.slots}  </p>
            <div className='card p-10 pb-3 w-5/6 my-12 bg-amber-200' >
                <Elements stripe={stripePromise}>
                    
                    <CheckoutFrom
                    payment={payment}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;