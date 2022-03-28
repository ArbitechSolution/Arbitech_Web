import React,{useRef} from 'react';
import './Contactus.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {
    const form = useRef();
   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6i5sbfi', 'template_5js41cu', form.current, 'K4Y7kXhAD_D5pBOiq')
      .then((result) => {
          console.log(result.text);
          toast.success("Email Sent Successfully!")
      }, (error) => {
          console.log(error.text);
          toast.error("Email Not Sent !")
      });
      e.target.clear();
  };
    return <div>
        <div className="section-block section-block-grey" id="contact">
            <div className="container">
                <div className="center-holder section-heading text-white"><span>Get in Touch</span>
                    <h3>Let's Talk about Your Business</h3>
                    <div className="section-heading-line"></div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="contact-form-box">
                            <form className="contact-form"   ref={form} onSubmit={sendEmail}>
                               
                                
                                <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input type="email"  name="email" placeholder="E-mail" required />
                                </div>

                                </div>
                                
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <input type="text" name="subject" placeholder="Subject" />
                                </div>

                                <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <input type="text" name="skypy" placeholder="Skype ID" />
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    {/* <input type="hidden" name="phone" id="phone_newsletter" value=""/> */}
                                    {/* <input type="hidden" className="country_code" /> */}
                                    <input type="number" name="number" className="phone_val" placeholder="Number" required />
                                </div>
                                </div>
                               
                                <div className="col-md-12 col-xs-12 col-sm-12" style={{width: "100% !important"}}>
                                    <textarea name="massage" placeholder="Message" required></textarea>

                                </div>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="center-holder">
                                        <button type="submit" className="contact-validate-btn submit_send" >Send Message</button>
                                      
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    </div>;
}
