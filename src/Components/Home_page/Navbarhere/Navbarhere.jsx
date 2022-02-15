import React from 'react';
import './Navbarstyle.css'
import { GrMenu } from 'react-icons/gr'
import { Link } from 'react-router-dom';

export default function Navbarhere() {
  return <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light navbgher">
      <div className="container">
    <Link  to="/"  className='TextdecorationNFT'>
    
    <a className="navbar-brand" href="#"> ARBITECH</a>
    </Link>
        <button className="navbar-toggler navbuttonere" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

          <GrMenu className="navbar-toggler-icon text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NFT
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li>
                  <Link to="/NFT" className='TextdecorationNFT'> <a className="dropdown-item" href="#">NFT Development Service</a></Link>

                </li>
                <li>
                  <Link to="/NFT_Marketplace" className='TextdecorationNFT'>
                    <a className="dropdown-item" href="#">NFT MarketPlace Development </a>
                  </Link>
                </li>
                <li>
                  <Link to="/NFT_MusicToken" className='TextdecorationNFT'>
                    <a className="dropdown-item" href="#">NFT Music tokenization Development </a>
                  </Link>
                </li>

                <Link to="/NFT_Gamming" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">NFT Gamming Platform Development </a>
                  </li>
                </Link>

                <Link to="/NFT_Art" className='TextdecorationNFT'>

                  <li>
                    <a className="dropdown-item" href="#">NFT Art Platform Development </a>
                  </li>

                </Link>

                <Link to="/NFT_Non_Fungible" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">NOn Fungible Token </a>
                  </li>
                </Link>

                <Link to="/NFT_OpenSea" className='TextdecorationNFT'>

                  <li>
                    <a className="dropdown-item" href="#">Opensea Clone </a>
                  </li>

                </Link>
                <Link to="/NFT_Semi_Fungible" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">Semi Fungible Token Development  </a>
                  </li>

                </Link>













              </ul>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DEFI
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <Link to="/DEFI_Development" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">Decentralized Finance (Defi) Development</a>
                  </li>
                </Link>
                <Link to="/DEFI_Marketing" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">DEFI Marketing Service</a></li>
                </Link>

                <Link to="/DEFI_Safe_Moon" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">Safemoon Clone Script</a>
                  </li>
                </Link>
                <Link to="DEFI_Safe_Mars_Clone" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">SafeMars Clone Script</a>
                  </li>
                </Link>

                <Link to="/DEFI_PanCake_Clone" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">PancakeSwap Clone</a>
                  </li>
                </Link>
                <Link to="/DEFI_UniSwap_Clone" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">Uniswap Clone</a>
                  </li>
                </Link>




              </ul>
            </li>




            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ICO
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                <Link to="/ICO_Development" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">ICO Development</a>
                  </li>
                </Link>
                <Link to="/ICO_Consulting" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">ICO Consulting Services</a>
                  </li>
                </Link>


              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                IDO
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <Link to="/IDO_Development" className='TextdecorationNFT'>
                  <li>
                    <a className="dropdown-item" href="#">IDO Development</a>
                  </li>
                </Link>

                <Link to="/IDO_LaunchPad" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">IDO Launchpad Development</a>
                  </li>
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MLM Clone
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <Link to="/MLM_Forsage_Script" className='TextdecorationNFT' >
                  <li>
                    <a className="dropdown-item" href="#">Forsage Clone Script</a>
                  </li>
                </Link>

                <Link to="/MLM_Double_Way" className='TextdecorationNFT' >
                  <li>
                    <a className="dropdown-item" href="#">Doubleway MLM Clone Script</a>
                  </li>
                </Link>

                <Link to="/MLM_Tron_Smart_Contract" className='TextdecorationNFT' >
                  <li>
                    <a className="dropdown-item" href="#">Smart Contract MLM  on Tron</a>
                  </li>
                </Link>

                <Link to="/MLM_Million_Menoy_Clone" className='TextdecorationNFT' >
                  <li>
                    <a className="dropdown-item" href="#">Million Money Clone </a>
                  </li>
                </Link>

                <Link to="/MLM_Lions_Share_Clone" className='TextdecorationNFT' >
                  <li>
                    <a className="dropdown-item" href="#"> Lion's Share Clone Script</a>
                  </li>
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link to="/Crpto_Dev" className='TextdecorationNFT' >
                <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cryptocurrency
                </a>
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <Link to="/Crpto_Dev" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#">Cryptocurrency Development</a></li>
                </Link>
                <Link to="/MLM_Lions_Share_Clone" className='TextdecorationNFT' >
                  {/*  <li><a className="dropdown-item" href="#">Token PR Service</a></li>*/}
                </Link>


                <Link to="/Wallet_Deve" className='TextdecorationNFT' >

                  <li><a className="dropdown-item" href="#">Wallet Development</a></li>
                </Link>
                <Link to="/Crpto_Wallet_Trust" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#">  Crypto Wallet Trust Wallet</a></li>
                </Link>
                {/*
                  <Link to="/MLM_Lions_Share_Clone" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> Token Listing Service </a></li>
                 </Link>*/}

                <Link to="/Cryptocurrency_MLM" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> Cryptocurrency MLM Software </a></li>
                </Link>

                <Link to="/Cryptocurrency_ATM_Software" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> Cryptocurrency ATM Software </a></li>
                </Link>

                <Link to="/Cryptocurrency_Creation_Service" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> Cryptocurrency Creation Service </a></li>
                </Link>

                <Link to="/MetaMask_Clone" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> MetaMask Clone Script </a></li>
                </Link>

                <Link to="/Binance_Smart_Chain_Development" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#"> Binance Smart Chain Development </a></li>
                </Link>

              </ul>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Exchange
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">


                {/* <a className="dropdown-item" href="#">Blockchain Development</a> */}

                <Link to="/Cryptocurrenc_Exchange_Software" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#">Cryptocurrency Exchange Software</a></li>
                </Link>

                <Link to="/P2p_Exchange" className='TextdecorationNFT' >

                  <li><a className="dropdown-item" href="#">P2P PCryptocurrency Exchange</a></li>
                </Link>
                <Link to="/White_Label" className='TextdecorationNFT' >

                  <li><a className="dropdown-item" href="#">White Label Cryptocurrency Exchange Software</a></li>

                </Link>


                <Link to="/Legal_Crypto_Exchange" className='TextdecorationNFT' >


                  <li><a className="dropdown-item" href="#">Legal Cryptocurrency Exchange</a></li>
                </Link>

                <Link to="/Exchange_Marketing" className='TextdecorationNFT'>

                  <li><a className="dropdown-item" href="#">Cryptocurrency Exchange Marketing</a></li>
                </Link>


                <Link to="/Decentralized_Exchange" className='TextdecorationNFT' >
                  <li><a className="dropdown-item" href="#">Decentralized Exchange Development</a></li>

                </Link>

                <Link to="/Hybrid_crypto_Exchange" className='TextdecorationNFT' >

                  <li><a className="dropdown-item" href="#">Hybrid crypto Exchange Software</a></li>
                </Link>


              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blockchain
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <Link to='BlockChain_Development' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Blockchain Development</a></li>
              </Link>
              <Link to='Palkadot_Deve' className='TextdecorationNFT' >
              <li><a className="dropdown-item" href="#">Polkadot Development Service</a></li>
              
              </Link>
              <Link to='Blockchain_consultin' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Blockchain consulting</a></li>
              </Link>
              <Link to='/Blockchain_IOT' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Blockchain IoT Development</a></li>
              </Link>
              {/*<Link to='Crowdfunding_Platform' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Crowdfunding Platform</a></li>
              </Link>
              
              <Link to='MLM_Double_Way' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Stablecoin Development</a></li>
              </Link>
              <Link to='DEFI_Marketing' className='TextdecorationNFT' >
              
              <li><a className="dropdown-item" href="#">Tokenized Asset Offering </a></li>
              </Link>
              <Link to='IDO_LaunchPad' className='TextdecorationNFT' >
              <li><a className="dropdown-item" href="#">Hedera Hashgraph Development</a></li>
              
              </Link>
               
              <li><a className="dropdown-item" href="#">P2P Lending Software</a></li>
                <li><a className="dropdown-item" href="#">TRON Token Development Company</a></li>
                <li><a className="dropdown-item" href="#">TRON DAAP Development</a></li>*/}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navtexthere" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <Link to="/About_US_MAin" className='TextdecorationNFT'>
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                </Link>

               
                <Link to="/Main_Privacy_Policy" className='TextdecorationNFT'>
                
                <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                </Link>

                <Link to="/Main_Terms_and_Conditions" className='TextdecorationNFT'>
                <li><a className="dropdown-item" href="#">Terms and Conditions</a></li>
                
                </Link>
                <Link to="/Main_Contact_Us_here" className='TextdecorationNFT'>
                
                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                </Link>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>



  </div>;
}
