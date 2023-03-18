import React from 'react';
import { Link } from 'react-router-dom';
import './Catagory.css'

const Categary = ({ categary }) => {
    const { _id, id, img, prodiuct_name, details } = categary;

    return (
        <div className='catagorySection bg-gray-800 text-gray-100 rounded-md card shadow-2xl'>
            <Link to={`/allCategary/${_id}`} className="card rounded-md shadow-md singaleCar">
                <div className='catagoryCardImg rounded-t-md'>
                    <img src={img} alt="" className="object-cover object-center w-full  h-40 bg-gray-500" />
                </div>
                <div className="flex flex-col justify-between p-6 pt-2 ">
                    <div className="mb-3 ">
                        <h2 className="text-lg md:text-xl font-semibold tracking-wide mb-2 ">{prodiuct_name}</h2>
                        <p className="text-sm ">{details ? details.slice(0, 110) + ' ...' : "No Details"} </p>

                    </div>
                </div>
            </Link>
            <div className="carShadow rounded-md "> </div>
            <Link to={`/allCategary/${_id}`} className="cardButton flex justify-center items-center">
                <button className='btn-md bg-amber-400 shadow-2xl  font-bold  text-white  w-3/6'>Details</button>
            </Link>
        </div>
    );
};

export default Categary;