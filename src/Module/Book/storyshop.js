import React from 'react';
import Header from '../Header/header';
const storyshop = () => {
    return (
        <div>
            <Header />
            <div id="carousel" className="carousel slide p-lg-0" data-ride="carousel">

                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                    <li data-target="#carousel" data-slide-to="5"></li>
                </ol>

                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/comic/img-comic-1.jpg" alt="img 1" width="1100" height="600" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/comic/img-comic-2.jpg" alt="img 2" width="1100" height="600" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/comic/img-comic-3.jpg" alt="img 3" width="1100" height="600" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/comic/img-comic-4.jpg" alt="img 4" width="1100" height="600" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/comic/img-comic-5.jpg" alt="img 5" width="1100" height="600" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/comic/img-comic-6.jpg" alt="img 6" width="1100" height="600" />
                    </div>
                </div>

                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#carousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#carousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

            <div className="container" id="intro-index">
                <div classNameName="title-list">
                    <h2><a href="https://truyenfull.vn/danh-sach/truyen-hot/" title="Truy???n hot">Truy???n hot</a></h2><a href="https://truyenfull.vn/danh-sach/truyen-hot/" title="Truy???n hot"><span className="glyphicon glyphicon-fire"></span></a>
                    <select id="hot-select" className="form-control new-select" aria-label="Ch???n th??? lo???i">
                        <option value="all">T???t c???</option>
                        <option value="1">Ti??n Hi???p</option>
                        <option value="2">Ki???m Hi???p</option>
                        <option value="3">Ng??n T??nh</option>
                        <option value="4">???? Th???</option>
                        <option value="20">Quan Tr?????ng</option>
                        <option value="6">V??ng Du</option>
                        <option value="5">Khoa Huy???n</option>
                        <option value="39">H??? Th???ng</option>
                        <option value="8">Huy???n Huy???n</option>
                        <option value="7">D??? Gi???i</option>
                        <option value="19">D??? N??ng</option>
                        <option value="10">Qu??n S???</option>
                        <option value="11">L???ch S???</option>
                        <option value="15">Xuy??n Kh??ng</option>
                        <option value="38">Xuy??n Nhanh</option>
                        <option value="17">Tr???ng Sinh</option>
                        <option value="18">Trinh Th??m</option>
                        <option value="16">Th??m Hi???m</option>
                        <option value="9">Linh D???</option>
                        <option value="12">S???c</option>
                        <option value="30">Ng?????c</option>
                        <option value="36">S???ng</option>
                        <option value="21">Cung ?????u</option>
                        <option value="22">N??? C?????ng</option>
                        <option value="24">Gia ?????u</option>
                        <option value="23">????ng Ph????ng</option>
                        <option value="13">??am M???</option>
                        <option value="14">B??ch H???p</option>
                        <option value="25">H??i H?????c</option>
                        <option value="27">??i???n V??n</option>
                        <option value="28">C??? ?????i</option>
                        <option value="29">M???t Th???</option>
                        <option value="26">Truy???n Teen</option>
                        <option value="32">Ph????ng T??y</option>
                        <option value="33">N??? Ph???</option>
                        <option value="34">Light Novel</option>
                        <option value="35">Vi???t Nam</option>
                        <option value="37">??o???n V??n</option>
                        <option value="31">Kh??c</option>
                    </select>
                </div>
                <div className="index-intro">
                    <div className="item top-1" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/linh-vu-thien-ha/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW160wTC70dXI0zAnO1g9LL0gpsAz0CA_x1HeEAqckR31jj0A_n_Jg8ygXC_1yIzNT3QxjSzNdz2QTIwCutRND/linh-vu-thien-ha.jpg" alt="Linh V?? Thi??n H???" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Linh V?? Thi??n H???</h3>
                        </div>
                    </a></div>
                    <div className="item top-2" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/than-dao-dan-ton/" itemprop="url"><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW180MdfWNqgzzcqzM1w8rLI0oLjK2yMry1HeEAi8jE_1yU9-oqLIUi6QiA_1yQyNL3QxDSyNdz2QTIwDMWBQL/than-dao-dan-ton.jpg" alt="Th???n ?????o ??an T??n" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Th???n ?????o ??an T??n</h3>
                        </div>
                    </a></div>
                    <div id="truyen-ads-hot" className="item top-3" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/phi-thien/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW1zU0SY8vN010dcrL1w9LyjeKysh28Uvz1HeEgnyDdP2yogif9BIfT19dR_1yQyNL3QxDSyNdz2QTIwC5kxPL/phi-thien.jpg" alt="Phi Thi??n" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Phi Thi??n</h3>
                        </div>
                    </a></div>
                    <div className="item top-4" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/vu-luyen-dien-phong/" itemprop="url"><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDT1zXLSU_3TAp3NDKM1A_zispMMgvwNHbx1HeEgpzUcv3cqpCM4rSkyMQsE_1yQyNL3QxDSyMATvoSsA==/vu-luyen-dien-phong.jpg" alt="V?? Luy???n ??i??n Phong" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">V?? Luy???n ??i??n Phong</h3>
                        </div>
                    </a></div>
                    <div className="item top-5" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/de-ba/" itemprop="url"><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDR183KzSo2TCpOCXKJ1A8LKEiucHN3yor31HeEglzXZP0qM-fg-IA8QxODQP1yQyNL3QxDSyMAbhYSqg==/de-ba.jpg" alt="????? B??" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">????? B??</h3>
                        </div>
                    </a></div>
                    <div className="item top-6" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW1zXKKnJ09440NzRw1Q8zCc_3LDTyDo_w1HeEgsCCdP2MND9Hl2wTP3_fYoOy3EDDSq-gomKf5GRns6KCIsPcxHRnD1_9ckMjS90MQ0sjAHvFGnM=/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot.jpg" alt="C?? V??? Ng???t Ng??o C?? Ch??t B???t L????ng (V??? M???i B???t L????ng C?? Ch??t Ng???t)" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">C?? V??? Ng???t Ng??o C?? Ch??t B???t L????ng (V??? M???i B???t L????ng C?? Ch??t Ng???t)</h3>
                        </div>
                    </a></div>
                    <div className="item top-7" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/nhat-niem-vinh-hang/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW1zUxD3A1ck4zdi_N1w-r9MgyD0sxDQz11HeEAj_dbP1A14jQ8MIyn2J3zxzDZE-XPGf38CqLZDc3f5Oi-KKAgnJn53z9ckMjS90MQ0sjAHtQGmA=/nhat-niem-vinh-hang.jpg" alt="Nh???t Ni???m V??nh H???ng" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Nh???t Ni???m V??nh H???ng</h3>
                        </div>
                    </a></div>
                    <div className="item top-8" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/pham-nhan-tu-tien/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDT17WITwqMNNQtNKp01A_zNXY1ifQuc8301HeEghwTR_1IV8PsTO-w4HKTUP1yQyNL3QxDSyMANTcRpQ==/pham-nhan-tu-tien.jpg" alt="Ph??m Nh??n Tu Ti??n" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Ph??m Nh??n Tu Ti??n</h3>
                        </div>
                    </a></div>
                    <div className="item top-9" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/doc-ton-tam-gioi/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW13UqDPHxS0sK13UN1A8zNCnPDTRzijT01HeEgoCgSP00b8PKtCKfYscIR2-n_Eo_D7PEqAzzsLCgZJMScyfd3EBn53z9ckMjS90MQ0sjAHtSGe4=/doc-ton-tam-gioi.jpg" alt="?????c T??n Tam Gi???i" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">?????c T??n Tam Gi???i</h3>
                        </div>
                    </a></div>
                    <div className="item top-10" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/cuc-cung-co-chieu-682622/" itemprop="url"><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDR160IcXJMcUl39jU20Q8LDjX2Lqosr4zw1HeEgtwkE_289Jz8EjeX_PyUfP1yQyNL3QxDSyMAXIATHA==/cuc-cung-co-chieu-682622.jpg" alt="C???c C??ng C?? Chi??u" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">C???c C??ng C?? Chi??u</h3>
                        </div>
                    </a></div>
                    <div className="item top-11" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/toi-cuong-than-thoai-de-hoang/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW1y12zS-38Hb1cIqI1A8zCc_PzS6J8Hf11HeEgsCCdH0jJ7f0XMeC_ELXQN28XPOqgnCn5GD_qsy88kLPotyQQEdnD1_9ckMjS90MQ0sjAMLpG6E=/toi-cuong-than-thoai-de-hoang.jpg" alt="T???i C?????ng Th???n Tho???i ????? Ho??ng" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">T???i C?????ng Th???n Tho???i ????? Ho??ng</h3>
                        </div>
                    </a></div>
                    <div className="item top-12" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/my-nhan-hoang-gia/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/eJzLyTDWd_XI9zW3NIh0dosKTwszj6_KjTRNSypyNvH3yMoujoiPyI1MNPdMyk4qNvDPLjJzzXDNSywwzrNMdczKyMmJMvUuDwsKCU60DE7WdcsPd3e1LTc0stTNMLQ0AgDBsx6F/my-nhan-hoang-gia.jpg" alt="M??? Nh??n Ho??ng Gia" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">M??? Nh??n Ho??ng Gia</h3>
                        </div>
                    </a></div>
                    <div className="item top-13" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/thieu-gia-bi-bo-roi/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDV1w3OqHQyMDYI9E2z0A_zDCg1MCrILfb11HeEghw3C333tOQK00qn_HQjC_1yQyNL3QxDSyMAQYcSAQ==/thieu-gia-bi-bo-roi.jpg" alt="Thi???u Gia B??? B??? R??i" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Thi???u Gia B??? B??? R??i</h3>
                        </div>
                    </a></div>
                    <div className="item top-14" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/tuyet-ung-linh-chu/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDW13U0c3SJ9zR1DnVK1g-LzLcodc23DPf31HeEgnwfX_1kf1ddV5_ykAoDT_1yQyNL3QxDSyMAMxgRog==/tuyet-ung-linh-chu.jpg" alt="Tuy???t ??ng L??nh Ch???" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">Tuy???t ??ng L??nh Ch???</h3>
                        </div>
                    </a></div>
                    <div className="item top-15" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/truyen-dau-pha-thuong-khung/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/o/eJzLyTDT1y1Mcw2M0C0IMAvL1g9z8nUxMYwyD3Tz1HeEgmwfR_0SAzefTKOgCI8MC_1yQyNL3QxDSyMANjMRcg==/truyen-dau-pha-thuong-khung.jpg" alt="?????u Ph?? Th????ng Khung" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">?????u Ph?? Th????ng Khung</h3>
                        </div>
                    </a></div>
                    <div className="item top-16" itemscope itemtype="https://schema.org/Book"><a href="https://truyenfull.vn/sung-vo-len-troi/" itemprop="url"><span className="full-label"></span><img src="https://static.8cache.com/img/pixel-cover.gif" lazysrc="https://static.8cache.com/cover/eJzLyTDW93QzCowIqwwISckJTyz3CI838PG3dDdJy6koD87IrgotC3fy1w0r8zHMcy8MCvdNTAlPNfBx8fBO9jfONDWuTC1Js_RKD3SpCi7wTfL1KnK2LTc0stTNMLQ0AgDRfx6w/sung-vo-len-troi.jpg" alt="S???ng V??? L??n Tr???i" className="img-responsive item-img" itemprop="image" />
                        <div className="title">
                            <h3 itemprop="name">S???ng V??? L??n Tr???i</h3>
                        </div>
                    </a></div>
                </div>
            </div>

            <div className="container" id="truyen-slide">
                <div className="list list-thumbnail col-xs-12">
                    <div className="title-list">
                        <h2><a href="https://truyenfull.vn/danh-sach/truyen-full/" title="Truy???n full">Truy???n ???? ho??n th??nh</a></h2><a href="https://truyenfull.vn/danh-sach/truyen-full/" title="Truy???n full"><span className="glyphicon glyphicon-menu-right"></span></a>
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/thu-nu-cong-luoc/" title="Th??? N??? C??ng L?????c">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJwN0EcSokAAAMAXUUsOhz0wKkgUgRnChSKHIYiSX7_bT-i-Yf7InlmfdYOtu-KUxmzvCOeUfrWWDYdO_17Ktu99PLiyRtWuM2NVZKXkV8rRw573-Fbz46UUyVrMHLGpa52RsCikgDUeSlZZDMGmyNcJkTI_d9M1vrKCPiIYSvAabcx8_XcIY0Dnk5rqBsdI0-UppSOH7brGJuqgY5iB9LyuShHTVEicmALTxu5clU924vZKEYgUTgIzGF1dWH1mEWKoFtlDtfPQKlIlrgS3JDaRi45M28hz_y5pHKLaoXGMPHYzqNuWfni42J9JNmF4OEyFz6mbx9dn_X6tU0bOmU27wKuwlbVc5K90-wW-r2AI8EPXKwdXh8m5HQDDnRhdzVqlbeYVyHOtbJG0B8pKR0Ob3-4-r9IPo0dPB1xqrSf_C9etc14jPwzuVUvti1PDdECwYHBE_2RI09tl5fJbvaJ6-SXMJ1vdJthBCHcSKe9Xg7ZKn9IR9jG5IxJabl8PqSGZhsdho5-wYPT1sZhL0EDQZaxm6kV5UC8NgmS_3hN9hvr4E6ymcocgNAk5SKL9GAvpzWBrjE-veQvBxSP_ff7GsiL9IqLbO6d65EX1mbsq862wek1ktmmPeN7GeXQbQCPcgQNORThc74X4citLGuczIDw34IBHaMfP7sAHtMOy3NTAmenaUlJ2sJ9QZfH5q2LxeHrfgHyg7D6IS15QYoKEm9Xlf3eKZ4mGZrl_OC3rYg==/thu-nu-cong-luoc.jpg" data-image="https://static.8cache.com/cover/eJwN0EcSokAAAMAXUUuQdNgDo4JEEZghXChyGIJI5vW7_YTuauaP5BrVWdXYfMh2oU_WjnBGaVdjWrBvtd8lb_veRb0jqVTl2BNWhJsYz4UUPq1pj-4VN1xyHq_5xBKbslYpCfNc9G_6U05LkyFuCfI0QqCM78Nw9J8ko68A-gK8BwszP-8TwAjQ2agkms4y4ni5cmFLQbOukYFaaOuGL76uq5SFJOFjO6LAuN12tsxGK3Y6OfcFCse-4Q-Oxq8es_ARVPL0qVhZYOaJHJW8UxCbwIZHqm7kuf-WJApQZdM4Qu5t06n7lnw5uFjfUTJgcNhMic-xnYb3d_39zFNC9pmOO88psJHUTOCuZJt9z5MxBPipaaWNy8NgnRaA_kEMjmqu4jZxMuTYRjJJ2gVFqaG-ye4Pj1Pop96hlw0updLi_4Xr1trvget756rE5s0qQdIjmDM4pGcJ0vR2mZn0Ua6wWuaY-aarU_s7COBOIvnzrtFWamMywC4id0RC0-mqPtFFQ3dZrHcj5vWuOhZj8WsI2vSmGlpeHNRbhSDer89In4E2zLxZl07vBwYh-XG4H0MufhhsDtHp1h_evzjkfc55KErSy0O6ebCKS15UlzqrPN1zs1MFZhv3kOMsnIX3HtT8A9jglPnDcd-IK7aioHE2AcJ1fBa4hHrMVgu-oOmX5a749kRXppzceusFlRs-5zISjpf788knSh-9sGQ5JcSIv5tt9nenKJaoKY7_BzgT62E=/thu-nu-cong-luoc.jpg" data-alt="Th??? N??? C??ng L?????c"></div>
                            <div className="caption">
                                <h3>Th??? N??? C??ng L?????c</h3><small className="btn-xs label-primary">Full - 754 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/sung-vo-len-troi/" title="S???ng V??? L??n Tr???i">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJzLyTDW93QzCowIqwwISckJTyz3CI838PG3dDdJy6koD87IrgotC3fy1w0r8zHMcy8MCvdNTAlPNfBx8fBO9jfONDWuTC1Js_RKD3SpCi7wTfL1KnK2LTc0M9HNMDIxBQDReR6u/sung-vo-len-troi.jpg" data-image="https://static.8cache.com/cover/eJzLyTDW93QzCowIqwwISckJTyz3CI838PG3dDdJy6koD87IrgotC3fy1w0r8zHMcy8MCvdNTAlPNfBx8fBO9jfONDWuTC1Js_RKD3SpCi7wTfL1KnK2LTc0NNXNMDQzBwDRXx6t/sung-vo-len-troi.jpg" data-alt="S???ng V??? L??n Tr???i"></div>
                            <div className="caption">
                                <h3>S???ng V??? L??n Tr???i</h3><small className="btn-xs label-primary">Full - 415 ch????ng</small>
                            </div>
                        </a></div>
                        <div id="truyen-ads-full" className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/tuyet-ung-linh-chu/" title="Tuy???t ??ng L??nh Ch???">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDW13U0c3SJ9zR1DnVK1g-LzLcodc23DPf31HeEgnwfX_1kf1ddV5_ykAoDT_1yQzMT3QwjE1MAMxIRoA==/tuyet-ung-linh-chu.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDW13U0c3SJ9zR1DnVK1g-LzLcodc23DPf31HeEgnwfX_1kf1ddV5_ykAoDT_1yQ0NT3QxDM3MAMvgRnw==/tuyet-ung-linh-chu.jpg" data-alt="Tuy???t ??ng L??nh Ch???"></div>
                            <div className="caption">
                                <h3>Tuy???t ??ng L??nh Ch???</h3><small className="btn-xs label-primary">Full - 1896 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/nam-trong-long-nam-phu-hac-lien-hoa-run-lay-bay/" title="N???m trong l??ng nam ph??? H???c Li??n Hoa run l???y b???y">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJwNzsm2Q0gAANAvcjqoMix6UXgo85QEG6fEkBBzSMrXd98vuO8n_8-ysKquwL88pOWP_jnuB8oNV9BL5PcpRmA2TwaZLoBOk-928gyfjsYwzzWGi198EsVdh8yY_LFppbV9oB0yUS42Dz2s8l8aRzXUFY2pb-LJC-WxSMigGPMKNDOTT6ZBe2gdVA5mOKnuDEe5X20o3NcdLHWUhb5DV6y-Mpqcoxf8rJS4hao5135QK0IsYzRcdfKk6yvdAl-nsXyV9NxuRzNxYwBi0zeVjEsPydVdZ2DNTJ39vXrv8GIu7JR8dO5E1o6FiUIMyN-MHJsJOw97UpA6-SQwU_3JSbNkiFX0FrRvVPYmrN7Hd57Ot_ysNTwlmwNJ6u4pfRck2m_cSiVGzY7O6vtKlk-WscGKv2WRiGfnrP_XrlN57DePvUZAYpQxFmI8VK2egr5Jmzzg9DzuKmiX6_4zDI0fxcA2uBnLPTHkZ7GFi_29kYMdHjIxk4V46pD0o-akA7y0BS54p3HpZeEHI3oANVK3h5ykSP_tt1VBcjdi5V4SSZbrGcV-hdWmjlLm8MJNuAg5y5khcT_Fxuio97xhd199bhWZhSRi3S-v3RDnPeSaWHido0gPuZ1LkZuLtuZFWGWebfXBHQd3i90WSV0AciMxA979JoUz_ZJwaBuTDp9EOMbO428cFCcLiME3vHrS9m27snpzD3SSNcit2I2InXSoipYjrca1xP9-WQEwTw7A_wD3J-dZ/nam-trong-long-nam-phu-hac-lien-hoa-run-lay-bay.jpg" data-image="https://static.8cache.com/cover/eJwNzse2gjgAANAv4oyUUBazCPCA0JsKbDhBioJ0g4avn7lfcN9P_p91ZTVDBX9FRKsf_XO9D1BarqSXOBgyBIXFOhloeQJw24I46TN6ujrDPLcErEH5SVVvG3NzDqa2k7fuAQlg4kJqH0ZUF78siRtgqDrT3KSTF6tjlaFJEeJVYOUWn86j_tB7oB7MeFLDHY-KXB0g3jcirE2cR4FLN6S9cpqekx_-7Ax7paa712HUaoxtczI9bfbl6yvbw8CgiXKVjcLpJiv1EkFIrMBScy47ZM_w3JG1cm0JSP0m4GKt7Jx-DO6ENkHiTAES8N8CXYeJeh_5cpi5xSwyc_MpcLvmkFWNTujesBosUL-P7zKfb-XZ6GhOdxfgzCMZfZc4JjduozKj5UdvD0OtKCfLOMKGvlWZSmfvbv_XrnN1kJvPXmNBZtQpERM01p2RCUObtUXIGUXS18CpNvIzTZ2fpNAxuQUpAzaVZ7lHq_O94YMdHwq20hX72pgOk-5mI7h0JSp5t_XoZeVHM34IWqztDyXNoPEjt02FSj8h9V5hWVGaBSZBjbS2iTPm8KNdvIgFy1kR9j7lzhhw8P2ReK-hsMvchjK275cXMaWFRFybiK9zkuihdEslcUvZNbwE6tx37CG8o_Bus_sqa6sAvVjKBf9-k6OFfnE0dq1Fx08qHlPv8zcOSLMtSOE3uvry_u36qn5zD3jiLSzsxIuxk_awjtcjq6etQv9-WRYwT1aU_gP3DedY/nam-trong-long-nam-phu-hac-lien-hoa-run-lay-bay.jpg" data-alt="N???m trong l??ng nam ph??? H???c Li??n Hoa run l???y b???y"></div>
                            <div className="caption">
                                <h3>N???m trong l??ng nam ph??? H???c Li??n Hoa run l???y b???y</h3><small className="btn-xs label-primary">Full - 71 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/em-dau-cua-nam-chinh-khong-de-lam/" title="Em D??u C???a Nam Ch??nh Kh??ng D??? L??m!">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDW142vdDcp1fXKc8sv1w8zCc8zCHA3TfHz1HeEgsCCdH3PdMeAUoOkgKyybK_ISGPdMrM0F8s0N_OijMyiXEP_0HRnD1_9ckMzE90MIxNTAJ2_Gpg=/em-dau-cua-nam-chinh-khong-de-lam.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDW142vdDcp1fXKc8sv1w8zCc8zCHA3TfHz1HeEgsCCdH3PdMeAUoOkgKyybK_ISGPdMrM0F8s0N_OijMyiXEP_0HRnD1_9ckNDU90MQzNzAJ2lGpc=/em-dau-cua-nam-chinh-khong-de-lam.jpg" data-alt="Em D??u C???a Nam Ch??nh Kh??ng D??? L??m!"></div>
                            <div className="caption">
                                <h3>Em D??u C???a Nam Ch??nh Kh??ng D??? L??m!</h3><small className="btn-xs label-primary">Full - 97 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/tien-nghich/" title="Ti??n Ngh???ch">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDT1w0sDgtMCjFO8XMO1A9zCvSLTK5wzDL01HeEguyAQH3v0IK8TK_i-IjCSP1yQzMT3QwjE1MAV6ISyA==/tien-nghich.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDT1w0sDgtMCjFO8XMO1A9zCvSLTK5wzDL01HeEguyAQH3v0IK8TK_i-IjCSP1yQ0NT3QxDM3MAV4gSxw==/tien-nghich.jpg" data-alt="Ti??n Ngh???ch"></div>
                            <div className="caption">
                                <h3>Ti??n Ngh???ch</h3><small className="btn-xs label-primary">Full - 1976 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/pham-nhan-tu-tien-chi-tien-gioi-thien-pham-nhan-tu-tien-2/" title="Ph??m Nh??n Tu Ti??n Chi Ti??n Gi???i Thi??n (Ph??m Nh??n Tu Ti??n 2)">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJzLyTDWD3aPyvQoNfDPCwixDLawDCvwqDJPDvLKdPLzzzPNKAs29Kg0KvPPjfRLTArPSK-0NMzyNzTyNMqsTDHJyY-K96jMMc4KSMk1qAyLjM-xsLAoCjGwLTc0M9HNMDIxBQAZhR9S/pham-nhan-tu-tien-chi-tien-gioi-thien-pham-nhan-tu-tien-2.jpg" data-image="https://static.8cache.com/cover/eJzLyTDWD3aPyvQoNfDPCwixDLawDCvwqDJPDvLKdPLzzzPNKAs29Kg0KvPPjfRLTArPSK-0NMzyNzTyNMqsTDHJyY-K96jMMc4KSMk1qAyLjM-xsLAoCjGwLTc0NNXNMDQzBwAZax9R/pham-nhan-tu-tien-chi-tien-gioi-thien-pham-nhan-tu-tien-2.jpg" data-alt="Ph??m Nh??n Tu Ti??n Chi Ti??n Gi???i Thi??n (Ph??m Nh??n Tu Ti??n 2)"></div>
                            <div className="caption">
                                <h3>Ph??m Nh??n Tu Ti??n Chi Ti??n Gi???i Thi??n (Ph??m Nh??n Tu Ti??n 2)</h3><small className="btn-xs label-primary">Full - 1397 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/tu-cam/" title="T??? C???m">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDW1031KzXKNnM3LYr01Q8zCc9PzU0ucE_11HeEgsCCdP0w84AM92JXC4MIA99cEw9_Uy934_zcVAMn_9ICFz9z33JnD1_9ckMzE90MIxNTAJOQGgk=/tu-cam.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDW1031KzXKNnM3LYr01Q8zCc9PzU0ucE_11HeEgsCCdP0w84AM92JXC4MIA99cEw9_Uy934_zcVAMn_9ICFz9z33JnD1_9ckNDU90MQzNzAJN2Ggg=/tu-cam.jpg" data-alt="T??? C???m"></div>
                            <div className="caption">
                                <h3>T??? C???m</h3><small className="btn-xs label-primary">Full - 836 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/dau-la-dai-luc-230420/" title="?????u La ?????i L???c">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDR180LKc8Kjw9w9kly1Q9z8nUxyTQ3Ms721HeEgmxvC_3MsEKLgJLCxIqIcv1yQzMT3QwjE1MAUUwSkw==/dau-la-dai-luc-230420.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDR180LKc8Kjw9w9kly1Q9z8nUxyTQ3Ms721HeEgmxvC_3MsEKLgJLCxIqIcv1yQ0NT3QxDM3MAUTISkg==/dau-la-dai-luc-230420.jpg" data-alt="?????u La ?????i L???c"></div>
                            <div className="caption">
                                <h3>?????u La ?????i L???c</h3><small className="btn-xs label-primary">Full - 517 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/toi-rat-co-tien-nha/" title="T??i R???t C?? Ti???n Nha">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJzLyTDWz49yd03MM_IN9SsPDKysSK_0NPUxdvExzXDKNvMJDK6yTIz0jkgqC8kJMfPKSMnO9DKMrCjP9Ejx8fZw8ykxT_eNDy8x9sozdXZM1c0ziS-wLTc0M9HNMDIxBQDOmB54/toi-rat-co-tien-nha.jpg" data-image="https://static.8cache.com/cover/eJzLyTDWz49yd03MM_IN9SsPDKysSK_0NPUxdvExzXDKNvMJDK6yTIz0jkgqC8kJMfPKSMnO9DKMrCjP9Ejx8fZw8ykxT_eNDy8x9sozdXZM1c0ziS-wLTc0NNXNMDQzBwDOfh53/toi-rat-co-tien-nha.jpg" data-alt="T??i R???t C?? Ti???n Nha"></div>
                            <div className="caption">
                                <h3>T??i R???t C?? Ti???n Nha</h3><small className="btn-xs label-primary">Full - 74 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/vai-ac-su-ton-xinh-dep-nhu-hoa/" title="Vai ??c S?? T??n Xinh ?????p Nh?? Hoa">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/eJzLyTDWryxK9nQ3LrdI9vdzCvZ2iwwJTPNyDrAIiEp2svALTjEKCff39g4tTc3Nc_T3DgzwjvL0ySj29UvK86swjPDzDsjMiXB3N6iKzC4yCa5wtC03NDPRzTAyMQUAbMEdfA==/vai-ac-su-ton-xinh-dep-nhu-hoa.jpg" data-image="https://static.8cache.com/cover/eJzLyTDWryxK9nQ3LrdI9vdzCvZ2iwwJTPNyDrAIiEp2svALTjEKCff39g4tTc3Nc_T3DgzwjvL0ySj29UvK86swjPDzDsjMiXB3N6iKzC4yCa5wtC03NDTVzTA0MwcAbKcdew==/vai-ac-su-ton-xinh-dep-nhu-hoa.jpg" data-alt="Vai ??c S?? T??n Xinh ?????p Nh?? Hoa"></div>
                            <div className="caption">
                                <h3>Vai ??c S?? T??n Xinh ?????p Nh?? Hoa</h3><small className="btn-xs label-primary">Full - 130 ch????ng</small>
                            </div>
                        </a></div>
                        <div className="col-xs-4 col-sm-3 col-md-2"><a href="https://truyenfull.vn/ngao-the-cuu-trong-thien/" title="Ng???o Th??? C???u Tr???ng Thi??n">
                            <div className="lazyimg" data-desk-image="https://static.8cache.com/cover/o/eJzLyTDR1zXIcizwyM0vSK0y0Q9zrzQr9db1yUr01HeEghzHQH3_Eq8wQ_-wSmNHC_1yQzMT3QwjE1MAXEsSUg==/ngao-the-cuu-trong-thien.jpg" data-image="https://static.8cache.com/cover/o/eJzLyTDR1zXIcizwyM0vSK0y0Q9zrzQr9db1yUr01HeEghzHQH3_Eq8wQ_-wSmNHC_1yQ0NT3QxDM3MAXDESUQ==/ngao-the-cuu-trong-thien.jpg" data-alt="Ng???o Th??? C???u Tr???ng Thi??n"></div>
                            <div className="caption">
                                <h3>Ng???o Th??? C???u Tr???ng Thi??n</h3><small className="btn-xs label-primary">Full - 2672 ch????ng</small>
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="ads-responsive row" id="ads-chapter-home-lien-quan">
                    {/* <div className="ads-lien-quan" id="ads-lien-quan-1"></div> */}
                    <div className="ads-lien-quan" id="ads-lien-quan-2"></div>
                    <div className="ads-lien-quan" id="ads-lien-quan-3"></div>
                </div>
            </div>
        </div>
    );
};

export default storyshop;