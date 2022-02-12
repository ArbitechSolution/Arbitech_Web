import logo from './logo.svg';
import './App.css';
import Navbarhere from './Components/Home_page/Navbarhere/Navbarhere';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import NFT from './Components/NFT_Main/NFT';
import Footer from './Components/Home_page/Footer_Home/Footerhere'
import ContactUs from './Components/Home_page/ContactUs_Home/ContactUs';
import NFT_Marketplace from './Components/NFT_Main/NFT_Marketplace'
import NFT_MusicToken from './Components/NFT_Main/NFT_MusicToken';
import NFT_Gamming from './Components/NFT_Main/NFT_Gamming';
import NFT_Art_Plateform from './Components/NFT_Main/NFT_Art_Plateform';
import Non_Fungible_NFT from './Components/NFT_Main/Non_Fungible_NFT';
import OpenSea from './Components/NFT_Main/OpenSea';
import Semi_Fungible from './Components/NFT_Main/Semi_Fungible';
import DEFI_Development from './Components/DEFI_Main/DEFI_Development'
import DEFI_Marketing_Dev from './Components/DEFI_Main/DEFI_Marketing_Dev';
import DEFI_Safe_Moon_Clone from './Components/DEFI_Main/DEFI_Safe_Moon_Clone'
import Safe_Mars_Clone from './Components/DEFI_Main/Safe_Mars_Clone';
import DEFi_Pancake from './Components/DEFI_Main/DEFi_Pancake';
import UniSwap_Clone from './Components/DEFI_Main/UniSwap_Clone';
import ICO_Development from './Components/Main_ICO/ICO_Development';
import ICO_Consulting_Service from './Components/Main_ICO/ICO_Consulting_Service';
import IDO_Development from './Components/Main_IDO/IDO_Development';
import IDO_LaunchPad from './Components/Main_IDO/IDO_LaunchPad';
import MLM_Forsage_Script from './Components/Main_MLM_Clone/MLM_Forsage_Script';
import MLM_Double_Way from './Components/Main_MLM_Clone/MLM_Double_Way';
import MLM_Tron_Smart_Contract from './Components/Main_MLM_Clone/MLM_Tron_Smart_Contract';
import MLM_Million_Menoy from './Components/Main_MLM_Clone/MLM_Million_Menoy';
import MLM_Lions_Share from './Components/Main_MLM_Clone/MLM_Lions_Share';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbarhere></Navbarhere>
  
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/NFT" component={NFT}></Route>
  <Route exact path="/NFT_Marketplace" component={NFT_Marketplace}></Route>
  <Route exact path="/NFT_MusicToken" component={NFT_MusicToken}></Route>
  <Route exact path="/NFT_Gamming" component={NFT_Gamming}></Route>
  <Route exact path="/NFT_Art" component={NFT_Art_Plateform}></Route>
  <Route exact path="/NFT_Non_Fungible" component={Non_Fungible_NFT}></Route>
  <Route exact path="/NFT_OpenSea" component={OpenSea}></Route>
  <Route exact path="/NFT_Semi_Fungible" component={Semi_Fungible}></Route>


  <Route exact path="/DEFI_Development" component={DEFI_Development}></Route>
  <Route exact path="/DEFI_Marketing" component={DEFI_Marketing_Dev}></Route>
  <Route exact path="/DEFI_Safe_Moon" component={DEFI_Safe_Moon_Clone}></Route>
  <Route exact path="/DEFI_Safe_Mars_Clone" component={Safe_Mars_Clone}></Route>
  <Route exact path="/DEFI_PanCake_Clone" component={DEFi_Pancake}></Route>
  <Route exact path="/DEFI_UniSwap_Clone" component={UniSwap_Clone}></Route>



  <Route exact path="/ICO_Development" component={ICO_Development}></Route>
  <Route exact path="/ICO_Consulting" component={ICO_Consulting_Service}></Route>



  <Route exact path="/IDO_Development" component={IDO_Development}></Route>
  <Route exact path="/IDO_LaunchPad" component={IDO_LaunchPad}></Route>





  <Route exact path="/MLM_Forsage_Script" component={MLM_Forsage_Script}></Route>
  <Route exact path="/MLM_Double_Way" component={MLM_Double_Way}></Route>
  <Route exact path="/MLM_Tron_Smart_Contract" component={MLM_Tron_Smart_Contract}></Route>
  <Route exact path="/MLM_Million_Menoy_Clone" component={MLM_Million_Menoy}></Route>
  <Route exact path="/MLM_Lions_Share_Clone" component={MLM_Lions_Share}></Route>




























  <ContactUs></ContactUs>
  <Footer></Footer>
 
</Router>

    
    
     

    </div>
  );
}

export default App;
