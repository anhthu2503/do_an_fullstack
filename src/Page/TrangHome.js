import React from 'react';
import Header from '../Module/Header/header';
import Carousel from '../Module/Carousel/carousel';
import Banner from '../Module/Banner/Banner';
import BookHot from '../Module/Hot/BookHot';
import StoryHot from '../Module/Hot/StoryHot';
import Footer from '../Module/Footer/footer';
import Featured from '../Module/Featured/Featured';

const TrangHome = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            <Banner/>
            <Featured />
            <BookHot />
            <StoryHot/>
            <Footer/>
        </>
    );
};

export default TrangHome;