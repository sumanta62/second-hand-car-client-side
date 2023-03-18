import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user, } = useContext(AuthContext);

    const url = `https://handler-car-server.vercel.app/bookings?email=${user?.email}`

    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    })
console.log(myOrders)
    return (
        <div>
            <div className='mt-10 mb-5 text-center'>
                <h3 className="text-2xl md:text-3xl font-bold ">My Orders</h3>
                <p>Here you can see all the products of your order</p>
            </div>
            <div className="overflow-x-auto mx-5 shadow-2xl">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders?.map((orders, i) =>
                                <tr key={orders._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={orders?.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{orders?.prodiuct_name}</td>
                                    <td>{orders?.price}</td>
                                    <td>
                                        {
                                            orders.price && !orders.paid &&
                                            <Link to={`/dashbord/payment/${orders._id}`}
                                            >
                                                <button className="btn btn-primary btn-sm rounded-none">Pay</button>
                                            </Link>
                                        }
                                        {
                                            orders.price && orders.paid &&
                                            <span className='text-green-600 font-bold rounded-none'>Paid</span>

                                        }

                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;