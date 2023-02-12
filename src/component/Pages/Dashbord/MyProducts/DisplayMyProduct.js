import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayMyProduct = ({ product, handlerDelete }) => {
    const { Phone } = product;
    const { user } = useContext(AuthContext);

    const handlerAvailable = (product) => {

        const available = {
            product_name: product.product_name,
            category_name: product.category_name,
            location: product.location,
            price: product.price,
            purchase_date: product.purchase_date,
            description: product.description,
            condition: product.condition,
            Phone: product.Phone,
            images: product.images,
            email: user.email
        }
        fetch(`https://handler-car-server-sumanta62.vercel.app/available`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authoraization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(available)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success("Available Confirm");
                    console.log(result.acknowledged);
                }
                else {
                    toast.error(result.message);
                }
            })

    }



    return (
        <div className=''>
            <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div>
                    <img src={product?.images} alt="" className="object-cover w-full mb-4 h-60 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{product?.product_name}</h2>
                    <p className="text-sm text-gray-400">{product?.description}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className=" text-sm text-gray-400">

                        <span className="text-xs text-gray-400">{product?.purchase_date}</span>
                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                            <small>Condition: </small>
                            <span>{product?.condition} </span>
                        </button>
                        <button aria-label="Share this post" type="button" className="flex items-center space-x-1.5">
                            <img src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png" className='w-6' alt="" />
                            <small>{product?.location}</small>
                        </button>

                    </div>
                    <div className="  text-sm text-gray-400">
                        <button type="button" className="flex items-center p-1 space-x-1.5 ">
                            <small>Price: </small>
                            <span>$ {product?.price}</span>
                        </button>
                        <button type="button" className="flex items-center p-1 space-x-1.5">

                            <small>Category: </small>
                            <span>{product?.category_name}</span>
                        </button>
                    </div>
                </div>
                <div className='flex items-end justify-between'>
                    <div>
                        <Link >
                            <button onClick={() => handlerDelete(product?._id)} className="btn text-sm">Delete</button>
                        </Link>
                    </div>
                    <div>
                        <Link >
                            <button onClick={() => handlerAvailable(product)} className="btn text-sm">Available</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayMyProduct;