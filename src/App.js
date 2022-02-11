import logo from './logo.svg';
import Particles from "react-tsparticles";
import './App.css';
import Header from './Components/Header/Header';
import Landingpage from './Components/Landingpage/Landingpage';
import Ecosystem from './Components/Ecosystem/Ecosystem';
import MVO from './Components/MVP/MVO';
import RoadMap from './Components/RoadMap/RoadMap';
import Slidercheck from './Components/Slidercheck/Slidercheck';
import Ourteam from './Components/Ourteam/Ourteam';
import BoardMember from './Components/BoardMember/BoardMember';
import Partner from './Components/Partnershere/Partner';
import Documents from './Components/Documents/Documents';
import PressNewshere from './Components/Newshere/PressNewshere';
import ContactUS from './Components/CONTACTUS/ContactUS';
import Footerhere from './Components/Footer/Footerhere';

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div >
     {/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "0d1529",
          },
          links: {
            color: "#0d1529",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}
     

     <div className="App">

     <Header/>
     <Landingpage/>
     <Ecosystem/>
     <MVO/>
     <RoadMap/>

     <Slidercheck/>
     <Ourteam/>
     <BoardMember/>
     {/* <Partner/> */}
     <Documents/>
     {/* <PressNewshere/> */}
     <ContactUS/>   

     <Footerhere/>
     </div>
    </div>
  );
}

export default App;
