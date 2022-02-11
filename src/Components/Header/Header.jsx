import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div>
            <div className="fluid-container">
                <div className="">
                    <nav class="navbar navbar-expand-lg navbar-light  bgheader fixed-top">
                        <div class="container" >

                            <a class="navbar-brand navbarand"  href="#"><img src="logo-s2-white.png" alt="" width="70%" className='loghere' /></a>
                            <button class="navbar-toggler  navbtnhererere" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
                                    <li class="nav-item">
                                        <a class="nav-link active litexther" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link litexther mx-2" href="#">Pages</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link litexther mx-2" href="#">Blog & Misc</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link litexther mx-2" href="#">Elements</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link litexther mx-2" href="#">Blocks</a>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn btn-outline-danger btn-sm  headerbtn'>LOGIN</button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}
