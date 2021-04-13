import React, { Component } from 'react';
import Footer from '../Module/Footer/footer';
import Header from '../Module/Header/header';
import DangTin from '../Module/DangTin/dangtin';

class TrangDangTin extends Component {
    render() {
        return (
            <>
                <Header/>
                <DangTin/>
                <Footer /> 
            </>
        );
    }
}

export default TrangDangTin;