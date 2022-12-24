import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <footer className=" container m-auto p-4 py-12" >

                <div className="footer flex gap-10 md:gap-8 sm:p-3 justify-center md:justify-between lg:px-12 xl:px-28 ">
                <div className='hidden md:flex'>
                    <div className='grid'>
                        <span className="footer-title">Categary</span>
                        <Link className="link link-hover">Microbus</Link>
                        <Link className="link link-hover">Luxury Car</Link>
                        <Link className="link link-hover">Electric Car</Link>
                        <Link className="link link-hover">Advertisement</Link>
                        </div>
                    </div>
                    <div className='hidden md:flex'>
                    <div className='grid'>
                        <span className="footer-title">Home Page</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Avaliabale</Link>
                        <Link className="link link-hover">Login</Link>
                        </div>
                    </div>
                    <div className='justify-items-center md:justify-items-start'>
                        <span className="footer-title">Contuct Me</span>
                        <div className='flex gap-3'>
                            <a target={'_tab'} href='/'><BsFacebook></BsFacebook></a>
                            <a target={'_tab'} href="/"><BsLinkedin></BsLinkedin> </a>
                            <a target={'_tab'} href="/"><BsTwitter></BsTwitter> </a>

                        </div>
                        <a href='/'>+880 1917123456</a>
                        <a href='/'>xyz62@gmail.com</a>
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