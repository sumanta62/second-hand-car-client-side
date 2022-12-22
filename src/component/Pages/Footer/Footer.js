import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <footer className=" container m-auto p-4 py-12" >

                <div className="footer flex gap-10 md:gap-8 sm:p-3 justify-between lg:px-12 xl:px-28 ">
                    <div>
                        <span className="footer-title">Categary</span>
                        <Link className="link link-hover">Microbus</Link>
                        <Link className="link link-hover">Luxury Car</Link>
                        <Link className="link link-hover">Electric Car</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Home Page</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Avaliabale</Link>
                        <Link className="link link-hover">Login</Link>
                    </div>
                    <div>
                        <span className="footer-title">Dashbord</span>
                        <Link className="link link-hover">My Order</Link>
                        <Link className="link link-hover">My Product</Link>
                        <Link className="link link-hover">Add Product</Link>
                    </div>
                </div>
             
                <div className='text-center mt-10'>
                    <p className='text-sm'>Copyright © 2022 - Second Hand car dealer Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;