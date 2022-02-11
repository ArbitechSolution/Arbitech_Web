import React from 'react';

import './Footerstyle.css'

export default function Footerhere() {
    return <div>

        <div className="container">
            <footer>
                <div className="row footerroew">
                    <div className="col-lg-6 mt-4">
                        <div className="Copytext text-left ">Copyright © 2019 ICO. Handcrafted by <a href="#">iO</a>.</div>

                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className='footertextsecond '>
                            <div>
                                <a href="#" className='me-5'>Privacy Policy</a>
                            </div>
                            <div>
                                <a href="#">Terms of sales</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
            </footer>


            {/* <footer class="nk-footer-bar section section-s tc-light">
                <div class="">
                    <div class="row gutter-vr-10px">

                    <div class="col-lg-6">
                            <div class="copyright-text ">Copyright © 2019 ICO. Handcrafted by <a href="#">iO</a>.</div>
                        </div>
                        <div class="col-lg-6 ">
                            <ul class="footer-nav">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of sales</a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </footer> */}
        </div>
    </div>;
}
