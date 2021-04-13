import React, { Component } from 'react';
import Footer from '../Module/Footer/footer';
import Header from '../Module/Header/header';

import Shop from '../Module/Book/storyshop';
class TrangTruyen extends Component {
    render() {
        return (
            <>
                <Header />
                <Shop />
                <Footer />
            </>
        );
    }
}

export default TrangTruyen;