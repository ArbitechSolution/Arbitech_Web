import React, { useEffect } from 'react';
import './Newsstyle.css'
import $ from 'jquery'


export default function PressNewshere() {


    useEffect(() => {
        class ScrollToggle {
            constructor(element) {
                this.container = element;
                this.toggles = this.container.querySelectorAll('.scroll-toggle__button');
                this.list = this.container.querySelector('.scroll-toggle__list');
                this.listItems = this.list.querySelectorAll('.scroll-toggle__list-item')
                this.scrollValue = 0;
            }
            init() {
                this.toggles.forEach(toggle => {
                    toggle.addEventListener('mousedown', (e) => {
                        this.move(e.target);
                    })
                    toggle.addEventListener('mouseup', (e) => {
                        this.stop();
                    })
                })
            }
            move(target) {
                if (target.classList.contains('scroll-toggle__button--right')) {
                    this.interval = setInterval(() => {
                        this.list.scrollLeft += 1;
                    }, 1);
                } else {
                    this.interval = setInterval(() => {
                        this.list.ScrollLeft = this.scrollValue;
                        this.list.scrollLeft -= 1;
                    }, 1);
                }
            }
            stop() {
                if (this.list.scrollLeft > 0) {
                    this.scrollValue = this.list.scrollLeft;
                }
                clearInterval(this.interval);
            }
        }

        document.querySelectorAll('.scroll-toggle').forEach(el => {
            const scrollToggle = new ScrollToggle(el);
            scrollToggle.init();
        })

    }, [$])
    return <div>

        <div className="container">

























            <div className="row ">
                <div className="col-lg-6">


                    <h1 className='textbackgroundhere '>PRESS</h1>
                    <h2 class="title title-xl text-white h2herehere" title="MVP APPS" >
                        IN PRESS</h2>


                    <div class="scroll-toggle ">
                        {/* <button class="scroll-toggle__button scroll-toggle__button--left">Scroll Left</button> */}

                        <ul class="scroll-toggle__list">

                            <li class="scroll-toggle__list-item">

                                <div class="nk-block">
                                    <div class="has-carousel carousel-nav-center pdb-l owl-carousel owl-loaded owl-drag" data-items="1" data-navs="true">
                                        <div class="owl-stage-outer">
                                            <div class="owl-stage" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1478px" }}>
                                                <div class="owl-item active" style={{ width: "500px", marginRight: "00px" }}>
                                                    <div class="item pb-3">
                                                        <div class="row justify-content-start gutter-vr-40px rowheremargin">
                                                            <div class=" col-3 col-sm-4 mt-2"  >
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3  col-sm-4 mt-2">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.25" style={{ visibility: "visible", animationDelay: "0.25s" }}>
                                                                    <img src="b-light.png" alt="" />

                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-2">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                                                    <img src="c-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.35" style={{ visibility: "visible", animationDelay: "0.35s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                                                    <img src="c-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.45" style={{ visibility: "visible", animationDelay: "0.45s" }}>
                                                                    <img src="b-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.5s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.55" style={{ visibility: "visible", animationDelay: "0.55s" }}>
                                                                    <img src="b-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-3 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.6s" }}>
                                                                    <img src="c-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-item" style={{ width: "500px", marginRight: "50px" }}>
                                                    <div class="item pb-3">
                                                        <div class="row justify-content-center gutter-vr-40px ">
                                                            <div class=" col-4 col-sm-4">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.2" style={{ visibility: "visible", animationDelay: "0.2s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.25" style={{ visibility: "visible", animationDelay: "0.25s" }}>
                                                                    <img src="b-light.png" alt="" />

                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                                                    <img src="c-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.35" style={{ visibility: "visible", animationDelay: "0.35s" }}>
                                                                    <img src="b-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.45" style={{ visibility: "visible", animationDelay: "0.45s" }}>
                                                                    <img src="a-light.png" alt="" />

                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.5s" }}>
                                                                    <img src="a-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.55" style={{ visibility: "visible", animationDelay: "0.55s" }}>
                                                                    <img src="b-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class=" col-4 col-sm-4 mt-5">
                                                                <div class="partner-logo animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.6s" }}>
                                                                    <img src="c-light.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="owl-dots disabled">

                                        </div>
                                    </div>
                                </div>

                            </li>


                        </ul>
                        {/* <button class="scroll-toggle__button scroll-toggle__button--right">Scroll Right</button> */}
                        <div class="owl-nav">

                            <button type="button" role="presentation" class="owl-prev disabled  scroll-toggle__button scroll-toggle__button--left"></button>
                            <button type="button" role="presentation" class="owl-next  scroll-toggle__button scroll-toggle__button--right"></button>
                        </div>



                    </div>



                </div>


                <div className="col-lg-6">


                    <h1 className='textbackgroundhere mt-5'>UPDATE</h1>
                    <h2 class="title title-xl text-white h2herehere" title="MVP APPS" >
                        NEWS</h2>


                    <div class="scroll-toggle ">
                        {/* <button class="scroll-toggle__button scroll-toggle__button--left">Scroll Left</button> */}

                        <ul class="scroll-toggle__list">

                            <li class="scroll-toggle__list-item">

                                <div class="nk-block">
                                    <div class="has-carousel carousel-nav-center owl-carousel owl-loaded owl-drag" data-items="1" data-navs="true">
                                        <div class="owl-stage-outer">
                                            <div class="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1478px"}}>
                                                <div class="owl-item active maindivherfirst" style={{width: "500px", marginRight: "0px" }}>
                                                    <div class="item pb-2">
                                                        <div class="blog blog-s2 animated has-bg-image fadeInUp" data-animate="fadeInUp" data-delay="0.8" style={{visibility: "visible", animationDelay: "0.8s"}}>
                                                            <div class="blog-content blog-content-inline">
                                                                <div class="blog-text">
                                                                    <h5 class="blog-title title-sm">Fintech G20 Global Summit 2019</h5>
                                                                    <div class="blog-location">New Youk, United State</div>
                                                                </div>
                                                                <div class="blog-action">
                                                                    <a href="#" class="link"><span> Learn More</span> <em class="link-icon link-icon-sm fas fa-angle-right"></em></a>
                                                                </div>
                                                            </div>
                                                            <div class="bg-image round overlay overlay-theme overlay-opacity-85 bg-image-loaded firstimg " data-overlay="theme" data-opacity="85"   style={{backgroundImage:"url('../../Assets/news-hr-a.jpg')"}} >
                                                                <img src="news-hr-a.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="blog blog-s2 animated has-bg-image fadeInUp " data-animate="fadeInUp" data-delay="0.85" style={{visibility: "visible", animationDelay: "0.85s"}}>
                                                            <div class="blog-content blog-content-inline">
                                                                <div class="blog-text">
                                                                    <h5 class="blog-title title-sm">Blockchain Global Summit 2020</h5>
                                                                    <div class="blog-location">California, United State</div>
                                                                </div>
                                                                <div class="blog-action">
                                                                    <a href="#" class="link">
                                                                        <span> Learn More </span>
                                                                        <em class="link-icon link-icon-sm fas fa-angle-right"></em>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="bg-image round overlay overlay-theme overlay-opacity-85 bg-image-loaded secondimg  " data-overlay="theme" data-opacity="85" >
                                                                <img src="news-hr-b.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-item maindivherfirst" style={{width: "500px" ,marginRight: "00px"}}>
                                                    <div class="item pb-2">
                                                        <div class="blog blog-s2 animated has-bg-image fadeInUp" data-animate="fadeInUp" data-delay="0.8" style={{visibility: "visible", animationDelay: "0.8s"}}>
                                                            <div class="blog-content blog-content-inline">
                                                                <div class="blog-text">
                                                                    <h5 class="blog-title title-sm">Fintech G20 Global Summit 2019</h5>
                                                                    <div class="blog-location">New Youk, United State</div>
                                                                </div><div class="blog-action">
                                                                    <a href="#" class="link">
                                                                        <span> Learn More</span>
                                                                        <em class="link-icon link-icon-sm fas fa-angle-right"></em>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="bg-image round overlay overlay-theme overlay-opacity-85 bg-image-loaded firstimg " data-overlay="theme" data-opacity="85"   >
                                                                <img src="news-hr-a.jpg" alt="" />

                                                            </div>
                                                        </div>
                                                        <div class="blog blog-s2 animated has-bg-image fadeInUp" data-animate="fadeInUp" data-delay="0.85"  style={{visibility: "visible", animationDelay: "0.85s"}}>
                                                            <div class="blog-content blog-content-inline">
                                                                <div class="blog-text">
                                                                    <h5 class="blog-title title-sm">Blockchain Global Summit 2019</h5>
                                                                    <div class="blog-location">California, United State</div>
                                                                </div>
                                                                <div class="blog-action">
                                                                    <a href="#" class="link">
                                                                        <span> Learn More</span>
                                                                        <em class="link-icon link-icon-sm fas fa-angle-right"></em>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="bg-image round overlay overlay-theme overlay-opacity-85 bg-image-loaded secondimg" data-overlay="theme" data-opacity="85"   >
                                                                <img src="news-hr-b.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div class="owl-dots disabled">

                                        </div>
                                    </div>
                                </div>



                            </li>


                        </ul>
                        {/* <button class="scroll-toggle__button scroll-toggle__button--right">Scroll Right</button> */}
                        <div class="owl-nav">

                            <button type="button" role="presentation" class="owl-prev disabled  scroll-toggle__button scroll-toggle__button--left"></button>
                            <button type="button" role="presentation" class="owl-next  scroll-toggle__button scroll-toggle__button--right"></button>
                        </div>



                    </div>



                </div>
            </div>
        </div>
    </div>;
}
