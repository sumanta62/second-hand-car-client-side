import { createBrowserRouter } from "react-router-dom";
import DisplayError from "../DisplayError/DisplayError";
import Main from "../Main/Main";
import BlogPage from "../Pages/BlogPage/BlogPage";
import AddAProduct from "../Pages/Dashbord/AddAProduct/AddAProduct";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AvailableProduct from "../Pages/Dashbord/AvailableProduct/AvailableProduct";
import DashBordLayout from "../Pages/Dashbord/DashBordLayout/DashBordLayout";
import MyOrders from "../Pages/Dashbord/MyOrder/MyOrders";
import Payment from "../Pages/Dashbord/MyOrder/Payment";
import MyProducts from "../Pages/Dashbord/MyProducts/MyProducts";
import About from "../Pages/Home/About/About";
import CarCategories from "../Pages/Home/CarCategories/CarCategories/CarCategories";
import Microbus from "../Pages/Home/CarCategories/Microbus/Microbus";
import Home from "../Pages/Home/Home/Home";
import AdminRoute from "../Pages/PrivateRoutes/AdminPrivate";
import PrivateRoute from "../Pages/PrivateRoutes/PrivateRoute";
import Login from "../UserAccount/Login/Login";
import Register from "../UserAccount/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboute',
                element: <About></About>
            },
            {
                path: '/',
                element: <CarCategories></CarCategories>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/avaliabale',
                element:<PrivateRoute><AvailableProduct></AvailableProduct></PrivateRoute>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogpage',
                element: <BlogPage></BlogPage>
            },

            {
                path: '/allCategary/:id',
                element: <Microbus></Microbus>,
                loader: ({ params }) => fetch(`http://localhost:5000/allCategary/${params.id}`)
            },
        ]
    },
    {
        path:'/dashbord',
        errorElement:<DisplayError></DisplayError>,
        element:<PrivateRoute><DashBordLayout></DashBordLayout></PrivateRoute>,
        children: [
            {
                path:'/dashbord',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
            },
            {
                path:'/dashbord/addProduct',
                element:<PrivateRoute><AddAProduct></AddAProduct></PrivateRoute>,
            },
            {
                path:'/dashbord/myProduct',
                element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
            },
            {
                path:'/dashbord/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://handler-car-server-sumanta62.vercel.app/orderPayment/${params.id}`)
            },
           
            {
                path:'/dashbord/allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
           
        ]
    }

])