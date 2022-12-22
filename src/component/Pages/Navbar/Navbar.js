import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../Images/logo/logo.webp'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlerLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err));

    }

    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboute'>Aboute Us</Link></li>
        <li><Link to='/avaliabale'>Advertisements</Link></li>
        <li><Link to='/blogpage'>Blog</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to='/dashbord'>Dashboard</Link></li>
                    <Link onClick={handlerLogOut} to='/' className="btn btn-info">Sign Out</Link>
                </>
                :
                <Link to='/login' className="btn btn-info">Log in</Link>
        }


    </React.Fragment>

    return (
        <div className='bg-sky-100'>
            <div className="navbar container m-auto  justify-between font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <img src={logo} className="w-full" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-1 ">
                        {menuItem}
                    </ul>
                </div>
                <label htmlFor="dashbord-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;