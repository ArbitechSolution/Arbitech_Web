import logo from './logo.svg';
import './App.css';
import Navbarhere from './Components/Home_page/Navbarhere/Navbarhere';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import NFT from './Components/NFT';
import Footer from './Components/Home_page/Footer_Home/Footerhere'
import ContactUs from './Components/Home_page/ContactUs_Home/ContactUs';
import NFT_Marketplace from './Components/NFT_Marketplace'

function App() {
  return (
    <div className="App">
    <Router>
    <Navbarhere></Navbarhere>
  
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/NFT" component={NFT}></Route>
  <Route exact path="/NFT_Marketplace" component={NFT_Marketplace}></Route>



  <ContactUs></ContactUs>
  <Footer></Footer>
 
</Router>

    
    
     

    </div>
  );
}

export default App;
