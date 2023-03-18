import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Registation.css'
import { AuthContext } from '../../context/AuthProvider';
import UseToken from '../../hooks/UseToken';

const Register = () => {
    // const saveUser = (name, users, email) => {
    //     const user = { name, users, email };
    //     fetch('https://handler-car-server-sumanta62.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreateUserEmail(email);
    //         })
    // }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleSignin, updateUser } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState("")
    const [createUserEmail, setCreateUserEmail] = useState();
    const [token] = UseToken(createUserEmail);

    const location = useLocation();
    const navogate = useNavigate();
    const from = location.from?.state.pathname || '/'

    if (token) {
        navogate(from, { replace: true })
    }

    const handelSignUp = data => {
        setSingUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.users, data.email);
                        toast.success("Create User Succesfully");
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                setSingUpError(error.message);
            })
    }

    const handlerGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: user.displayName,
                    user: 'Buyer',
                    uid: user.uid,
                    email: user.email
                }
                updateUser(userInfo)
                .then(()=>{
                    saveUser(userInfo.displayName, userInfo.user, userInfo.email, user.uid);
                    toast.success("Create User Succesfully");
                })

                    
            }).catch(err => console.log(err));
    }

    const saveUser = (name, users, email) => {
        const user = { name, users, email };
        fetch(`https://handler-car-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                const createUsers = data.find(singalUser => singalUser.email === email)
                if (!createUsers) {
                    fetch('https://handler-car-server-sumanta62.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setCreateUserEmail(email);
                        })

                } else {
                    setCreateUserEmail(email);
                    navogate(from, { replace: true })
                }
            })

    }




    return (
        <div className='py-10 registationSection' style={{ backgroundImage: `url(https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
            <div className='h[800px]  w-96 md:w-3/6 lg:w-2/6 m-auto bg-gray-900 text-white p-4 rounded-lg mt-20'>
                <div>
                    <h2 className="text-4xl font-bold text-center">Sign Up!</h2>
                    <form onSubmit={handleSubmit(handelSignUp)}>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" className="input input-bordered w-full text-black" />
                            {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="XYZ@gmail.com" className="input input-bordered w-full text-black" />
                            {errors.email && <p className='text-orange-400'>{errors.email?.message}</p>}
                        </div>
                        <div className="md:flex gap-5">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="">Select User</span>
                                </label>
                                <select
                                    {...register("users", { required: "users is required" })}
                                    className="select select-bordered w-full text-black">
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: "Password Address is required",

                                        minLength: { value: 6, message: "Password must be 6 characters or length" },

                                        // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be Strong" }
                                    })} placeholder="******"
                                    className="input input-bordered w-full text-black" />
                                {errors.password && <p className='text-orange-400'>{errors.password?.message}</p>}
                            </div>
                        </div>
                        <br />

                        <input className=" btn-md border shadow-2xl  font-bold text-white w-full hover:bg-amber-500 transform duration-500 " value="Sign Up" type="submit" />
                        <div>
                            {
                                signUpError && <p className='text-orange-400'>{signUpError}</p>
                            }
                        </div>
                    </form>
                    <p>Alrady Habe an Account <Link className='text-primary font-bold' to='/login'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handlerGoogleSignin} className=" btn-md border shadow-2xl  font-bold text-white w-full hover:bg-amber-500 transform duration-500 ">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;