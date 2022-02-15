import React from 'react'
import './About_us.css'
import ReactWhatsapp from 'react-whatsapp';


export default function About_us() {
    return (
        <div>
            <div className="section-block">
                <div className="container">
                    <div className="section-heading center-holder">
                        <h2>About Us</h2>
                        <div className="section-heading-line"></div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xs-12 col-sm-6 col-md-6 mt-4">
                            <div className="pr-30-md">
                                <div className="section-heading text-left">
                                    <h5>Why Choose Us</h5></div>
                                <div className="section-heading-line-left"></div>
                                <div className="mt-20">
                                    <p className="sec-txt text-left">At Infinite Block Tech, we talk, discuss, brainstorm and come up with innovative ideas of creating avant-garde Blockchain concepts and converting them into Real-world Business solutions that will allow us to prove our skill set and potential to make an impact in the Blockchain world.</p>
                                    <p className="sec-txt text-left">Our blockchain developers and experienced analysts can help entrepreneurs and individuals alike to create completely new Blockchain and design new bitcoin-related concepts such as cryptocurrency protocols to fix security vulnerabilities in Blockchain.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6"><img alt="img" src="home2.jpg" className="rounded-border shadow-primary" /></div>
                    </div>
                </div>
            </div>



            <div className="section-grey solid section-block">


                <div className="container">

                    <div className="section-heading center-holder">
                        <h2>Wallets Supported for PancakeSwap Clone</h2>
                        <div className="section-heading-line"></div>
                        <p>A digital wallet is a very essential tool in the crypto world. It allows the users to trade and store cryptocurrencies. Our PancakeSwap clone platform has the potential to support multiple digital wallets.</p>

                    </div>

                    <div className="row">
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="metamask.png" alt="Metamask" src="metamask.png" />
                                <h4> MetaMask</h4>
                            </div>
                        </div>


                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="trustwallet.png" alt="Trust Wallet" src="trustwallet.png" />
                                <h4> TrustWallet</h4>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="binance.png" alt="Binance" src="binance.png" />
                                <h4>Binance  Wallet</h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="walletconnect.png" alt="Wallet Connect" src="walletconnect.png" />
                                <h4> WalletConnect</h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="safepal.png" alt="Safepal" src="safepal.png" />
                                <h4> SafePal Wallet</h4>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="features-box">
                                <img className="" data-src="mathwallet.png" alt="Math Wallet" src="mathwallet.png" />
                                <h4>MathWallet</h4>
                            </div>
                        </div>


                    </div>

                    <div className="row extra mt-20">

                        <div className="animated fadeInUp text-center">
                            <ReactWhatsapp number="03036954689" message="Hi! I'm interested in one of your products at ARBITECH SOLUTIONS" className="whatsaapherebg   mt-4" >

                                <a target="_blank" href="#" className="button-md dark-button two-btn">Connect With Whatsapp</a>

                            </ReactWhatsapp>
                        </div>
                    </div>

                </div>

            </div>




            <div className="section-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box">
                                <div>
                                    <h4>Panel of Experts</h4>
                                </div>
                                <div className="number-box-line"></div>
                                <p>Our experts have handled clients from various diverse industries and geographical locations and have successfully validated out the core problems they have faced in Blockchain development.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box">
                                <div>
                                    <h4>Security, Reliability &amp; Authenticity</h4>
                                </div>
                                <div className="number-box-line"></div>
                                <p>Our product maneuver contains extensive use of cryptographic identification and cryptographic hashing, making your product an ideal and secure solution.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box">
                                <div>
                                    <h4>Service Responders</h4>
                                </div>
                                <div className="number-box-line"></div>
                                <p>We provide Blockchain-as-a-service (BaaS) with the potential to upgrade your venture above all the competition in the market and protect your data with the highest form of Security hash functions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>















        </div>
    )
}
