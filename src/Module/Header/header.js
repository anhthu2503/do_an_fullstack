import React from 'react';

const header = () => {
    return (
        <>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">Giới thiệu</a></li>
                            <li><a href="faq.html">FAQS</a></li>
                            <li><a href="dangtin.html">Đăng tin</a></li>
                            <li><a href="sukien.html">Sự Kiện</a></li>
                        </ul>
                    </nav>
                 </div>
            </header>

            <section id="banner" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <a className="navbar-brand" href="index.html" id="tieude"><span className="color-b-store">๖ۣۜ𝓑.𝓢𝓽𝓸𝓻𝓮</span></a>
                    <h1>Team yêu sách cũ</h1>
                </div>
            </section>

        </>
    );
};

export default header;