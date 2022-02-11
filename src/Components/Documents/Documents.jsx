import React from 'react';
import './Documentsstyle.css'
import {BiDownload} from 'react-icons/bi'

export default function Documents() {
    return <div>
        <div className="container">
            <h1 className='textbackgroundhere '>DOWNLOAD</h1>
            <h2 class="title title-xl text-white h2herehere" title="MVP APPS" >
                DOCUMENTS</h2>

            <p className='headingdivPsection '>
                Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</p>





            <div class="">
                <div class="nk-block">
                    <div class="row gutter-vr-50px rowdivdoc">
                        <div class="col-sm-6 col-lg-3 " >
                            <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                <div class="doc-photo doc-shape doc-shape-a">
                                    <img src="a.jpeg" alt="" />

                                </div>
                                <div class="doc-text">
                                    <h5 class="doc-title title-sm">WnDGameTG ERC721 <small>(2021)</small></h5>
                                    <a class="doc-download" download href="WnDGameTG ERC721 Token Smart Contract Code Review and Security Analysis Report.pdf">
                                        <em class="ti ti-import"><BiDownload/></em>
                                    </a>
                                    {/* <div class="doc-lang">ENGLISH</div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 ">
                            <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                <div class="doc-photo doc-shape doc-shape-b">
                                    <img src="b.jpeg" alt="" />
                                </div>
                                <div class="doc-text">
                                    <h5 class="doc-title title-sm">BACKGUCOIN BEP20 <small>(2021)</small></h5>
                                    <a class="doc-download" download href="BACKGUCOIN BEP20 Token Smart Contract Code Review and Security Analysis Report (1).pdf">
                                        <em class="ti ti-import"><BiDownload/></em>
                                    </a>
                                    {/* <div class="doc-lang">ENGLISH</div> */}
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 ">
                            <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.5s" }}>
                                <div class="doc-photo doc-shape doc-shape-c">
                                    <img src="c.jpeg" alt="" />
                                </div>
                                <div class="doc-text">
                                    <h5 class="doc-title title-sm">Bamboo ERC20 <small>(2021)</small></h5>
                                    <a class="doc-download" download href="Bamboo ERC20 Token Smart Contract Code Review and Security Analysis Report (2) (1).pdf">
                                        <em class="ti ti-import"><BiDownload/></em>
                                    </a>
                                    {/* <div class="doc-lang">ENGLISH</div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 ">
                            <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                <div class="doc-photo doc-shape doc-shape-d">
                                    <img src="d.jpeg" alt=""  />
                                </div><div class="doc-text">
                                    <h5 class="doc-title title-sm">NIL ERC20  <small>(2021)</small></h5>
                                    <a class="doc-download" download href="NIL ERC20 Token Smart Contract Code Review and Security Analysis Report (1).pdf">
                                        <em class="ti ti-import"><BiDownload/></em>
                                    </a>
                                    {/* <div class="doc-lang">ENGLISH</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </div>;
}
