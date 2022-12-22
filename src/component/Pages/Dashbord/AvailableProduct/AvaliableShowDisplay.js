import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../../Spinner/Spinner';

const AvaliableShowDisplay = ({avaliabale}) => {
    const {loading} = useContext(AuthContext)
    if(loading){
        <Spinner></Spinner>
    }

    return (
        <div>
             <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div>
                    <img src={avaliabale?.images} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{avaliabale?.product_name}</h2>
                    <p className="text-sm text-gray-400">{avaliabale?.description}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className=" text-sm text-gray-400">

                        <span className="text-xs text-gray-400">{avaliabale?.purchase_date}</span>
                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                            <small>Condition: </small>
                            <span>{avaliabale?.condition} </span>
                        </button>
                        <button aria-label="Share this post" type="button" className="flex items-center space-x-1.5">
                            <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" className='w-6' alt="" />
                            <small>{avaliabale?.location}</small>
                        </button>

                    </div>
                    <div className="  text-sm text-gray-400">
                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                            <small>Price: </small>
                            <span>$ {avaliabale?.price}</span>
                        </button>
                        <button type="button" className="flex items-center p-1 space-x-1.5">

                            <small>Category: </small>
                            <span>{avaliabale?.category_name}</span>
                        </button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default AvaliableShowDisplay;