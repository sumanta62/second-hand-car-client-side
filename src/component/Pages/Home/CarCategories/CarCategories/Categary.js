import React from 'react';
import { Link } from 'react-router-dom';

const Categary = ({ categary }) => {
    const { id, img, prodiuct_name, } = categary;

    return (
        <div>
            <div className="card rounded-md shadow-md  bg-gray-800 text-gray-100">
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-32 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 pt-2">
                    <div className="mb-3">
                        <h2 className="text-lg md:text-xl font-semibold tracking-wide">{prodiuct_name}</h2>
                        
                    </div>
                    <Link to={`/allCategary/${id}`}>
                        <button className='btn font-bold w-full text-white'> All {prodiuct_name}</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Categary;