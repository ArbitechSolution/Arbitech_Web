import React from 'react';
import './Contactus.css'

export default function ContactUs() {
    return <div>
        <div className="section-block section-block-grey" id="contact">
            <div className="container">
                <div className="center-holder section-heading text-white"><span>Get in Touch</span>
                    <h3>Let's Talk about Your Business</h3>
                    <div className="section-heading-line"></div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-form-box">
                            <form id="mailForms" className="contact-form" method="post">
                                <input type="hidden" name="url" value="https://www.infiniteblocktech.com/" className="url" />
                                
                                <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input id="name" name="name" placeholder="Name" required="" />
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input id="email" name="email" placeholder="E-mail" type="email" />
                                </div>

                                </div>
                                
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <input id="subject" name="subject" placeholder="Subject" />
                                </div>

                                <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input id="subject" name="skype" placeholder="Skype ID" />
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    {/* <input type="hidden" name="phone" id="phone_newsletter" value=""/> */}
                                    {/* <input type="hidden" className="country_code" /> */}
                                    <input type="number" name="phone" className="phone_val" placeholder="Number" />
                                </div>
                                </div>
                               
                                <div className="col-md-12 col-xs-12 col-sm-12" style={{width: "100% !important"}}>
                                    <textarea name="message" placeholder="Message"></textarea>

                                </div>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="center-holder">
                                        <button className="contact-validate-btn submit_send" type="button" data-mail="mailForms">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 schedule_call mt-5" id="schedule_call">

                        <div className="calendly-inline-widget" data-url="https://calendly.com/infiniteblocktech" style={{position: "relative",height:"420px"}} data-processed="true">
                        <div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div>
                        <div className="calendly-bounce3"></div></div><iframe src="https://calendly.com/infiniteblocktech?embed_domain=www.infiniteblocktech.com&amp;embed_type=Inline" width="100%" height="100%" frameborder="0"></iframe></div>
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

                    </div>

                </div>
            </div>
        </div>
    </div>;
}
