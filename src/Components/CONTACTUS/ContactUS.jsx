import React from 'react';
import './Contactstyle.css'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

export default function ContactUS() {
    return <div>

        <div className="container">

            <div className="row">

                <div className="col-lg-6" >
                    <div className="maindivfirstcol">

                        


                        <ul class="contact-list ">
                            <li class="iconandtext fadeInUp  " data-animate="fadeInUp" data-delay="0.2" >
                                <em class="contact-icon "><BsFillTelephoneFill /></em>
                                <div class="contact-text numberhere"><span>+92 303 695468259</span></div>
                            </li>
                            <li class="iconandtext fadeInUp" data-animate="fadeInUp" data-delay="0.3">
                                <em class="contact-icon"><BsEnvelopeFill /></em>
                                <div class="contact-text"><span>info@company.com</span></div>
                            </li>
                            <li class="iconandtext fadeInUp" data-animate="fadeInUp" data-delay="0.4">
                                <em class="contact-icon "> <FaTelegramPlane /></em>
                                <div class="contact-text"><span>Join us on Telegram</span>
                                </div>
                            </li>
                        </ul>



                        <div className="circle01 ">
                            <div className="circle101">
                                <div className="circle201"></div>
                            </div>
                            <div>
                            </div>
                        </div>




                    </div>

                    <br /><br />
                    <ul class="social-links social-links-s2 justify-content-center animated fadeInUp mt-5 d-none" style={{ marginTop: '5rem' }} data-animate="fadeInUp" data-delay="0.6">
                        <li>
                            <a href="#"><em class="fab fa-twitter"></em></a>
                        </li>
                        <li>
                            <a href="#"><em class="fab fa-medium-m"></em></a>
                        </li>
                        <li>
                            <a href="#"><em class="fab fa-facebook-f"></em></a>
                        </li>
                        <li>
                            <a href="#"><em class="fab fa-youtube"></em></a>
                        </li>
                        <li>
                            <a href="#"><em class="fab fa-bitcoin"></em></a>
                        </li>
                        <li>
                            <a href="#"><em class="fab fa-github"></em></a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-6">


                    <div class="nk-block-text ">
                        <div class="nk-block-text-head">
                            <h2 class="title title-lg ttu animated fadeInUp" data-animate="fadeInUp" data-delay="0.7" >Contact Us</h2>
                            <p class="psection Psectionhere" data-animate="fadeInUp" data-delay="0.8" >We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
                        </div>
                        <form class="nk-form-submit" >
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="field-item animated fadeInUp  text-left" data-animate="fadeInUp" data-delay="0.8" >
                                        <label class="field-label ttu text-left">Your Name</label>
                                    
                                        <div class="field-wrap">
                                            <input name="contact-name" placeholder="Introduce yourself" type="text" class="input-bordered required" aria-required="true" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="field-item animated fadeInUp  text-left" data-animate="fadeInUp" data-delay="0.9">
                                        <label class="field-label ttu">Your Email</label>
                                        <div class="field-wrap">
                                            <input name="contact-email" placeholder="Who do we replay to" type="email" class="input-bordered required email" aria-required="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field-item animated fadeInUp  text-left" data-animate="fadeInUp" data-delay="1.0" >
                                <label class="field-label ttu text-left">Your Message</label>
                                <div class="field-wrap">
                                    <textarea name="contact-message" placeholder="Leave your question or comment here" class="input-bordered input-textarea required" aria-required="true">

                                    </textarea>
                                </div>
                            </div>
                            <input type="text" class="d-none" name="form-anti-honeypot" value="" />
                            <div class="row">
                                <div class="col-sm-5 text-right animated fadeInUp" data-animate="fadeInUp" data-delay="1.1" >
                                    <button type="submit" class="btn btn-round btn-primary">SEND</button>
                                </div><div class="col-sm-7 order-sm-first">
                                    <div class="form-results">

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>



    </div>;
}
