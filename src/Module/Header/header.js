import React from 'react';

const header = () => {
    return (
        <>
            <header>
                <div class="container">

                    <nav class="top_nav d-flex pt-3 pb-1">

                        <h1 class="agile_btxt">
                            <a href="./index.html">
                                <span class="agile_btxtaas">๖ۣۜ𝓑</span>.𝓢𝓽𝓸𝓻𝓮
                    </a>
                        </h1>

                        <div class="w3ls_right_nav ml-auto d-flex">

                            <form class="nav-search form-inline my-0" action="#" method="post">
                                <input type="text" class="form-control" id="#" placeholder="Tìm sách, tác giả...." />
                                <input class="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" value="Search" id="#" />
                            </form>


                            <div class="nav-icon d-flex">

                                <a class="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                                    <i class="far fa-user"></i>
                                </a>

                                <div class="cart-mainf">
                                    <div class="hubcart hubcart2 cart cart box_1">
                                        <form action="#" method="post">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button class="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
                                                <i class="fas fa-shopping-bag"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </nav>

                    <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto text-center">
                                <li class="nav-item">
                                    <a class="nav-link  active" href="index.html">HOME
                                <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="women.html">SÁCH</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="men.html">TRUYỆN</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">GIỚI THIỆU</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="dangtin.html">ĐĂNG TIN</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">LIÊN HỆ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="sukien.html">SỰ KIỆN</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="faq.html">FAQS</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </header>

        </>
    );
};

export default header;