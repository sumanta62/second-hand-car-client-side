import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import UseAdmin from '../../../hooks/UseAdmin';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const DashBordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email);

    
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-slate-800">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-slate-800 w-52">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu pt-12 p-4 text-white bg-slate-700 w-52 z-0">

                        <li><Link to='/dashbord' className='hover:underline underline-offset-8'>My Orders</Link></li>

                        {user.users="Seller" &&
                            <li><Link to='/dashbord/addProduct' className='hover:underline underline-offset-8'>Add A Product</Link></li>
                        }

                        {isAdmin &&
                            <>
                                <li><Link to='/dashbord/allUsers' className='hover:underline underline-offset-8'>All Users</Link></li>
                            </>
                        }
                        <li><Link to='/dashbord/myProduct' className='hover:underline underline-offset-8'>My Product </Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DashBordLayout;