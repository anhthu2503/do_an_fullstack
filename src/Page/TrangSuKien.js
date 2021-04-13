import React, { Component } from 'react';
import SuKien from '../Module/SuKien/sukien';
import Footer from '../Module/Footer/footer';
import Header from '../Module/Header/header';
class TrangSuKien extends Component {
    render() {
        return (
            <>
                <Header />
                <SuKien />
                <Footer />
            </>
        );
    }
}

export default TrangSuKien;