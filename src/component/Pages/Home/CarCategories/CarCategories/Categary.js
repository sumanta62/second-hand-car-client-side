import React from 'react';
import { Link } from 'react-router-dom';
import './Catagory.css'

const Categary = ({ categary }) => {
    const { _id, id, img, prodiuct_name, details } = categary;
    console.log(categary)

    return (
        <div>
            <Link to={`/allCategary/${_id}`} className="card rounded-md shadow-md  bg-gray-800 text-gray-100 catagorySection">
              <div className='catagoryCardImg'>
              <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-40 bg-gray-500" />
              </div>
                <div className="flex flex-col justify-between p-6 pt-2">
                    <div className="mb-3">
                        <h2 className="text-lg md:text-xl font-semibold tracking-wide mb-2">{prodiuct_name }</h2>
                        <p className="text-sm">{details ? details.slice(0, 110) +' ...' : "No Details"} </p>
                        
                    </div>
                    <Link to={`/allCategary/${_id}`}>
                        <button className='btn-md bg-orange-600 rounded-lg font-bold w-full text-white'>Details</button>
                    </Link>

                </div>
            </Link>
        </div>
    );
};

export default Categary;