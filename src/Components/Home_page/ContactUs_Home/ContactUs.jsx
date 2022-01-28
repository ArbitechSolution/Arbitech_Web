import React from 'react';
import './Contactus.css'

export default function ContactUs() {
    return <div>
        <div class="section-block section-block-grey" id="contact">
            <div class="container">
                <div class="center-holder section-heading text-white"><span>Get in Touch</span>
                    <h3>Let's Talk about Your Business</h3>
                    <div class="section-heading-line"></div>
                </div>
                <div class="row mt-50">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="contact-form-box">
                            <form id="mailForms" class="contact-form" method="post">
                                <input type="hidden" name="url" value="https://www.infiniteblocktech.com/" class="url" />
                                
                                <div className="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <input id="name" name="name" placeholder="Name" required="" />
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <input id="email" name="email" placeholder="E-mail" type="email" />
                                </div>

                                </div>
                                
                                <div class="col-md-12 col-xs-12 col-sm-12">
                                    <input id="subject" name="subject" placeholder="Subject" />
                                </div>

                                <div className="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <input id="subject" name="skype" placeholder="Skype ID" />
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    {/* <input type="hidden" name="phone" id="phone_newsletter" value=""/> */}
                                    {/* <input type="hidden" class="country_code" /> */}
                                    <input type="number" name="phone" class="phone_val" placeholder="Number" />
                                </div>
                                </div>
                               
                                <div class="col-md-12 col-xs-12 col-sm-12" style={{width: "100% !important"}}>
                                    <textarea name="message" placeholder="Message"></textarea>

                                </div>
                                <div class="col-md-12 col-xs-12 col-sm-12">
                                    <div class="center-holder">
                                        <button class="contact-validate-btn submit_send" type="button" data-mail="mailForms">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 schedule_call mt-5" id="schedule_call">

                        <div class="calendly-inline-widget" data-url="https://calendly.com/infiniteblocktech" style={{position: "relative",height:"420px"}} data-processed="true">
                        <div class="calendly-spinner"><div class="calendly-bounce1"></div><div class="calendly-bounce2"></div>
                        <div class="calendly-bounce3"></div></div><iframe src="https://calendly.com/infiniteblocktech?embed_domain=www.infiniteblocktech.com&amp;embed_type=Inline" width="100%" height="100%" frameborder="0"></iframe></div>
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

                    </div>

                </div>
            </div>
        </div>
    </div>;
}
