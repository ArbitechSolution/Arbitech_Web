import React from 'react'
import './landingpage.css'
import Countdown from "react-countdown";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landingpage() {
    AOS.init();
    return (
        <div>
            <div className="container-fluid">
                <div className=" container containan">
                    <br /><br />
                    <div className="row  containlandung">
                        <div className="col-lg-5" data-aos="fade-up">
                            <h1 className='landingheadingH1'>WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE</h1>
                            <p className='LandingpagePP'>The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology.
                                We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology.</p>
                            <div className="btnhere">

                                <button className='btn landingbtn'>PRIVATE SALE</button>
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="fade-down">
                            <div className="landingpageimge">
                                <img src="gfx-e.png" width="80%" alt="" />
                            </div>

                        </div>
                    </div>


                    {/* ----------------------------------------Timer and bar------------------------------------------------- */}



                    <div className="Timersectionhere mt-5">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="progressbarhere">
                                    <ul className='progress-info '>
                                        <li>Raised - <span>1,1250 Tokens</span></li>
                                        <li className='text-right'>Target - <span>150,000 Tokens</span></li>
                                    </ul>
                                    <div className='progress-barcolorhere'>
                                        <div className='progress-percent'>

                                        </div>
                                        <div className='progress-point' data-point="25" style={{ left: '25%' }}>
                                            Soft Cap

                                        </div>
                                        <div className='progress-point' data-point="55" style={{ left: '55%' }}>
                                            Crowdsale

                                        </div>
                                        <div className='progress-point' data-point="85" style={{ left: '85%' }}>
                                            Hard Cap

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-5 "  >
                                <div className="mainbonushere">
                                    <div className="Bonushere ">
                                        <h6 className='bonusH6'>Current Bonus</h6>
                                        <h3>20%</h3>
                                        <div className='bonusTexthere'>
                                            Contributors can receive
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 ">

                                <div className="countdownhere">
                                    <h6>The Bonus ends in</h6>
                                    {/* <Countdown date={Date.now() + 1000000000} className='Countdownstyling' /> */}
                                    <div className="countdowndigts">


                                        <ul className='countdownul'>
                                            <li>
                                                <h5>55</h5>
                                                <h6>Days</h6>
                                            </li>
                                            <li><h5>:</h5></li>
                                            <li><h5>06</h5>
                                                <h6>Hours</h6>

                                            </li>
                                            <li><h5>:</h5></li>
                                            <li><h5>27</h5>
                                                <h6>Minuts</h6>

                                            </li>
                                            <li><h5>:</h5></li>
                                            <li><h5>45</h5>
                                                <h6>Seconds</h6>

                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-lg-4 col-md-6"  >

                            <div className="youtubelinkhere">
                                <ul className='btn-grp'>
                                    <li >

                                        <a target='_blank' href="https://www.youtube.com/watch?v=SSo_EIwHSd4" >
                                            <i class="far fa-play "></i>
                                            {/* <em class="icon-circle icon-border icon-animation fas fa-play"></em> */}
                                            <span>How it Works</span>
                                        </a>


                                    </li>

                                </ul>

                                <ul className='btn-grp'>
                                    <li >

                                        <a href="#">
                                            <i class="fal fa-lightbulb"></i>
                                            {/* <em class="icon-circle icon-border icon-a<i class="fab fa-github"></i>nimation fas fa-play"></em> */}
                                            <span>Why buy Tokens now?</span>
                                        </a>


                                    </li>

                                </ul>
                            </div>



                        </div>
                        <div className="col-lg-3 col-md-3" ></div>
                        <div className="col-lg-5 col-md-3 check"  >

                            <div className="socilmedialinkshere">
                                <ul className='socialmeidalisthere'>
                                    <li>

                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-medium-m"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>

                                        </a>


                                    </li>
                                    <li>
                                        <a href="#">


                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">

                                            <i class="fab fa-github"></i>

                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
