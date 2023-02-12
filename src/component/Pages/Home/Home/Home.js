import React from 'react';
import BlogPage from '../../BlogPage/BlogPage';
import Gallery from '../../Gallerty/Gallery';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CarCategories from '../CarCategories/CarCategories/CarCategories';
import Cuntect from '../Cuntect/Cuntect';
import HandyCar from '../HandyCar/HandyCar';
import DownliadSection from '../SliderSection/DownliadSection';
import SliderSection from '../SliderSection/SliderSection';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <About></About> */}
            <HandyCar></HandyCar>
            <CarCategories></CarCategories>
            <WhyChoose></WhyChoose>
            <Gallery></Gallery>
            <SliderSection/>
            <DownliadSection/>
            {/* <BlogPage></BlogPage> */}
            <Cuntect></Cuntect>
        </div>
    );
};

export default Home;