import React from 'react'
import './Ecosystem.css'
import {FaLongArrowAltDown} from 'react-icons/fa'

export default function Ecosystem() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <section>

                        <h1 className='textbackgroundhere'>Core Ecosystems</h1>
                        <h2 data-aos="fade-right" class="title title-xl text-white h2herehere" title="Core Ecosystems" >
                            ECOSYSTEMS</h2>

                        <div class="container container-xxl">
                            <div class="nk-block has-bg-image">
                                <div class="row text-center align-items-lg-start gutter-vr-40px">
                                    <div class="col-lg-3 col-sm-6" data-aos="fade-up">
                                        <div class="feature feature-s6 feature-s6-1 animated redlinehere fadeInUp" data-animate="fadeInUp" data-delay="0.3" >
                                            <div class="feature-text">
                                                <h5 class="title title-sm ttu">ONE MARKETPLACE</h5>
                                                <p>One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens.</p>
                                                <i class=" arrowhere"> <FaLongArrowAltDown/></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6" data-aos="fade-up">
                                        <div class="feature feature-s6 feature-s6-2 animated redlinehere fadeInUp" data-animate="fadeInUp" data-delay="0.4" >
                                            <div class="feature-text">
                                                <h5 class="title title-sm ttu">Transparency and Trust</h5>
                                                <p>One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens.</p>
                                                <i class=" arrowhere"> <FaLongArrowAltDown/></i>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="col-lg-3 col-sm-6" data-aos="fade-up">
                                        <div class="feature feature-s6 feature-s6-3 animated redlinehere fadeInUp" data-animate="fadeInUp" data-delay="0.5">
                                            <div class="feature-text">
                                                <h5 class="title title-sm ttu">Blockchain Based Profiles</h5>
                                                <p>One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens.</p>
                                                <i class=" arrowhere"> <FaLongArrowAltDown/></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6" >
                                        <div class="feature feature-s6 feature-s6-4 animated redlinehere fadeInUp" data-animate="fadeInUp" data-delay="0.6" >
                                            <div class="feature-text">
                                                <h5 class="title title-sm ttu">PAYMENT FLEXIBILITY</h5>
                                                <p>One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens.</p>
                                                <i class=" arrowhere"> <FaLongArrowAltDown/></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block overlay-fall bg-image-loaded fadeInUp" data-aos="fade-up">
                                    <img src="globe-particle.png" alt="" width="100%" />
                                </div>
                            </div>
                        </div>



                    </section>


                    <section>
                        <h1 className='textbackgroundhere'>ICOX Products</h1>
                        <h2 class="title title-xl text-white h2herehere" title="Core Ecosystems" >
                            PLATFORM</h2>




                        <div className='seconddivherediv' data-aos="fade-right">


                            <button className='btn btn-outline-danger btn-lg mt-5'>FOR PARTICIPATORS</button>
                            <div className='linerintwobutton '></div>
                            <button className='btn btn-outline-danger btn-lg mt-5'>FOR TRADERS</button>


                        </div>



                        <div className="row">

                            {/* <ul class="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5 animated fadeInUp" >
                        <li><a class="active" data-toggle="tab" href="#tab-1-1">FOR Participators</a></li>
                        <li class="tab-nav-sap d-none d-sm-block"></li>
                        <li><a data-toggle="tab" href="#tab-1-2">For Traders</a></li>
    </ul>*/}



                            <div className="col-lg-6 mt-5" data-aos="fade-up">

                                <h2 className='h2colhere' data-aos="fade-up">A Open Platform for our Participators</h2>
                                <p className='pherecol' data-aos="fade-up"> Each participator can choose the trader and to sign a contract.</p>
                                <ul className='listulhere' data-aos="fade-up">
                                    <li>User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum.</li>
                                    <li>Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodie.</li>
                                    <li>Sign a smart-contract to allow our trader’s access for live trading corporis cryptocurrency susci pitlabo riosam, nisi ut.</li>

                                </ul>


                            </div>


                            <div className="col-lg-6">




                                <div className='imgdivhereplatformhere' data-aos="fade-up">
                                    <div className='imgdivher1'>
                                        <div className="circle">
                                            <div className="circle1">
                                                <div className="circle2"></div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>

                              
                                    </div>


                                    <div className='imgdivher' data-aos="fade-up">


                                        <img src="sc-medium-a.png" alt="" width="65%" className='imgsecondcolplatform' />
                                    </div>

                                </div>








                            </div>


                        </div>

                    </section>
                </div>
            </div>

        </div>
    )
}
