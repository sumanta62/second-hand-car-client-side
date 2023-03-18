import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageHostingKey = process.env.REACT_APP_imagedb_key;

    const navigate = useNavigate();

    const handlerAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgbb => {
                if (imgbb.success) {
                    const product = {
                        product_name: data.name,
                        category_name: data.category,
                        location: data.location,
                        price: data.price,
                        purchase_date: data.purchase,
                        description: data.description,
                        condition: data.condition,
                        Phone: data.Phone,
                        images: imgbb.data.url,
                        email: user.email
                    }

                    fetch(`https://handler-car-server.vercel.app/addProduct`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            reset()
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashbord/myProduct')

                        })
                }
            })

    }

    return (
        <div>
            <div className=''>
                <div className=' w-5/6 md:w-4/6 m-auto bg-blue-50 p-4 rounded-lg shadow-2xl mt-10 mb-24'>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-center">Add Product</h2>
                        <form onSubmit={handleSubmit(handlerAddProduct)}>
                            <div className='grid grid-row md:grid-cols-2 gap-2'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Product Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full " placeholder='Product Name' />
                                    {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Location</span>
                                    </label>
                                    <input type="text" {...register("location", { required: "location is required" })} className="input input-bordered w-full " placeholder='Location' />
                                    {errors.location && <p className='text-orange-400'>{errors.location?.message}</p>}
                                </div>
                            </div>
                            <div className='grid grid-row md:grid-cols-2 gap-2'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Image</span>
                                    </label>
                                    <input type="file" {...register("image", { required: "image is required" })} className="input input-bordered w-full p-2" placeholder='image' />
                                    {errors.image && <p className='text-orange-400'>{errors.image?.message}</p>}
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Phone</span>
                                    </label>
                                    <input type="text" {...register("Phone", { required: "phone is required" })} className="input input-bordered w-full " placeholder='phone' />
                                    {errors.phone && <p className='text-orange-400'>{errors.phone?.message}</p>}
                                </div>
                            </div>
                            <div className='grid grid-row md:grid-cols-2 gap-2'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Price</span>
                                    </label>
                                    <input type="text" {...register("price", { required: "price is required" })} className="input input-bordered w-full " placeholder='$ 000' />
                                    {errors.price && <p className='text-orange-400'>{errors.price?.message}</p>}
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Purchase Year</span>
                                    </label>
                                    <input type="date" {...register("purchase", { required: "purchase is required" })} className="input input-bordered w-full " placeholder='Purchase year' />
                                    {errors.purchase && <p className='text-orange-400'>{errors.purchase?.message}</p>}
                                </div>
                            </div>
                            <div className='grid grid-row md:grid-cols-2 gap-2'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Product Category</span>
                                    </label>
                                    <select
                                        {...register("category", { required: "users is required" })}
                                        className="select select-bordered w-full ">
                                        <option>Microbus</option>
                                        <option>Luxury Car</option>
                                        <option>Electic Car</option>
                                    </select>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="">Condition </span>
                                    </label>
                                    <select
                                        {...register("condition", { required: "users is required" })}
                                        className="select select-bordered w-full ">
                                        <option>Excellent</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="">Description</span>
                                </label>
                                <textarea type="text" {...register("description", { required: "description is required" })} className="input input-bordered w-full "
                                    cols="30" rows="10" placeholder='Description ' />
                                {errors.description && <p className='text-orange-400'>{errors.description?.message}</p>}
                            </div>

                            <div className='flex justify-center mt-5'>
                                <input className="w-40 btn-md border border-gray-600 shadow-2xl  font-bold hover:text-white  hover:bg-amber-500 transform duration-500 float-right" value="Add Product" type="submit" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;