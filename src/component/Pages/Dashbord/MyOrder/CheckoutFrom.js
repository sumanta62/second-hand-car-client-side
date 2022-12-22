import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../../Spinner/Spinner';

const CheckoutFrom = ({ payment }) => {
    const { user, loading } = useContext(AuthContext);
    const { price, author_Name, email, _id } = payment;
    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCardError] = useState("")
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState("")
    const [transactionId, settransactionId] = useState("")
    const [clientSecret, setClientSecret] = useState("");

    const navigate = useNavigate();



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`https://handler-car-server-sumanta62.vercel.app/orderPayment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authoraization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement);
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setSuccess("")
        setProcessing(true)
        const { paymentIntent, error: confurmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: author_Name,
                        email: email,
                    },
                },
            },
        );
        if (confurmError) {
            setCardError(confurmError.message)
            return;
        }

        console.log(paymentIntent)

        if (paymentIntent.status === 'succeeded') {
            console.log('card', card);

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                paymentId:_id
            }

            fetch("https://handler-car-server-sumanta62.vercel.app/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authoraization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        setSuccess('Congrets! Your payment complate')
                        settransactionId(paymentIntent.id);
                        toast.success('Payment Complated successfully')
                        navigate('/dashbord')
                    }
                });
        }
        setProcessing(false)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-primary btn-sm my-4'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className='text-red-400'>{cardError} </p>
            {
                success &&
                <div>
                    <p className='text-green-500'>{success}</p>
                    
                </div>
            }
        </div>
    );
};

export default CheckoutFrom;