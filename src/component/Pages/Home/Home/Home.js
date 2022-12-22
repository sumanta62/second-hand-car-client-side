import React from 'react';
import BlogPage from '../../BlogPage/BlogPage';
import Gallery from '../../Gallerty/Gallery';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CarCategories from '../CarCategories/CarCategories/CarCategories';
import Cuntect from '../Cuntect/Cuntect';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CarCategories></CarCategories>
            <Gallery></Gallery>
            <BlogPage></BlogPage>
            <Cuntect></Cuntect>
        </div>
    );
};

export default Home;