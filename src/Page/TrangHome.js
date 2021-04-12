import React from 'react';
import Header from '../Module/Header/header';
import Carousel from '../Module/Carousel/carousel';
import Banner from '../Module/Banner/Banner';
import BookHot from '../Module/Hot/BookHot';
import StoryHot from '../Module/Hot/StoryHot';
import About from '../Module/About/about';
import Footer from '../Module/Footer/footer';
const TrangHome = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            <Banner/>
            <BookHot />
            <StoryHot/>
            <About/>
            <Footer/>
        </>
    );
};

export default TrangHome;