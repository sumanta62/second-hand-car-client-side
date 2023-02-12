import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../../Spinner/Spinner';
import DisplayMyProduct from './DisplayMyProduct';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);

    if(loading){
        <Spinner></Spinner>
    }

    const url = `https://handler-car-server-sumanta62.vercel.app/addProduct?email=${user?.email}`

    const { data: myProducts = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authoraization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        },
    })

    const handlerDelete = id => {
        const proseed = window.confirm('Are you sure , you went to cancel this .Product');
        if (proseed) {
            fetch(`https://handler-car-server-sumanta62.vercel.app/addProduct/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete successfully')
                        const remaining = reviews.filter(ord => ord._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    return (
        <div className='bg-gray-800 text-white'>
            <div className='py-12 w-10/12 m-auto'>
                <div className='text-center mb-8'>
                    <h2 className="text-3xl md:text-4xl font-bold ">My Product</h2>
                    <p>If cars say a lot about who we are, this one will say I'm perfect!<br /> Liking what I can see in the rearview mirror!</p>
                </div>
                <div className='md:grid grid-cols-2 justify-center gap-6 '>
                    {
                        myProducts.map(product => <DisplayMyProduct
                            key={product._id}
                            product={product}
                            handlerDelete={handlerDelete}
                        >
                        </DisplayMyProduct>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyProducts;