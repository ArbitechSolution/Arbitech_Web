import React, { useEffect } from 'react';
import './FAQ_MarketPlace.css'
import $ from 'jquery'

export default function FAQ_Marketplace() {




    return <div>


        <div className="section-block faqSection " id="demo" style={{ padding: "40px 0px" }}>
            <div className="container">
                <div className="section-heading center-holder">
                    <h4>FAQ</h4>
                    <div className="section-heading-line"></div>
                </div>

                <div className="accordion container section-block" id="accordionExample">
                    <div className="accordion-item bcolorFAQ">
                        <h2 className="accordion-header" id="headingOne">
                            <a className="accordion-button AccourdionAtag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span>How do I create an NFT marketplace?</span>

                            </a>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> The listed below are the most comprehensive steps to create an NFT marketplace
                                    <br />
                                    <ul className="list2">
                                        <li>Build a user interface for the marketplace</li>
                                        <li>Choose the compatible blockchain</li>
                                        <li>Multi-integral wallet selection </li>
                                        <li>Targeting the right audiences</li>
                                        <li>Identifying operational sectors</li>
                                        <li>Define listing and categories</li>
                                        <li>Select the base tokens</li>
                                        <li>Program the required features</li>
                                        <li>Testing and launching in the mainnet</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>What are the features of the NFT marketplace?</span>

                            </a>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> These are the most important features of an NFT marketplace that help you succeed
                                    <br />
                                    <ul className="list2">
                                        <li>Storefront</li>
                                        <li>Optimized Token Search</li>
                                        <li>Filters</li>
                                        <li>List Creation</li>
                                        <li>Listing Status</li>
                                        <li>Bidding Option</li>
                                        <li>Crypto Wallet</li>
                                        <li>Ratings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span>How much does it cost to build an NFT marketplace?</span>

                            </a>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"><a href="#" className='AccourdionAtag' target="_blank">Non-fungible tokens</a>, also widely known as NFTs, have taken over the digital world in a flash. With its arrival being just at the third quarter of 2021, the market cap of NFTs has experienced an enormous spike of around 1785% </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="false" aria-controls="collapseThree">
                                <span>Which is an NFT marketplace?</span>

                            </a>
                        </h2>
                        <div id="collapseFoure" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> OpenSea is the most commonly used NFT marketplace. It is based in New York, founded in the year 2017. On this NFT platform, users can purchase and sell blockchain-dependent collectibles, art, music, domain names, trading cards, and virtual worlds, and much more. </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span>What is an NFT Marketplace?</span>

                            </a>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> An NFT marketplace is a unique platform that is designed to trade
                                    non-fungible tokens. NFT marketplaces are developed on the power of blockchain networks,
                                    enabling marketplaces to securely store all transaction information and data in the digital ledger.
                                    Blockchain networks secure and prevent any type of cyber attacks on the platform. Non-fungible tokens
                                    are reaching astonishing heights, thus, the demand for NFT marketplaces is increasing. There are several
                                    types of NFT marketplaces that are introduced to the digital market, such as open type, exclusive type,
                                    and open protocol-based marketplaces. All these development services are specifically done by the NFT
                                    marketplace development company for the future generation to make business dreams reach great heights.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>









    </div>;
}
