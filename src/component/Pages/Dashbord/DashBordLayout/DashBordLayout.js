import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import UseAdmin from '../../../hooks/UseAdmin';
import Spinner from '../../../Spinner/Spinner';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const DashBordLayout = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email);

    if(loading){
        <Spinner></Spinner>
    }
    
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-slate-800">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-slate-800">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu pt-12 p-4 w-80 text-white bg-slate-700 ">

                        <li><Link to='/dashbord'>My Orders</Link></li>

                        {user.users="Seller" &&
                            <li><Link to='/dashbord/addProduct'>Add A Product</Link></li>
                        }

                        {isAdmin &&
                            <>
                                <li><Link to='/dashbord/allUsers'>All Users</Link></li>
                            </>
                        }
                        <li><Link to='/dashbord/myProduct'>My Product </Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DashBordLayout;