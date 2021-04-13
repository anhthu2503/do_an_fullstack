import React, { Component } from 'react';
import Footer from '../Module/Footer/footer';
import Header from '../Module/Header/header';
import Shop from '../Module/Book/shop';
class TrangSach extends Component {
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

export default TrangSach;