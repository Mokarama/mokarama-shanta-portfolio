import { Suspense } from "react";
import "./App.css";
import experience from "./components/Experience/experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";

import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience/Experience";
 import Particle from "./components/Particle";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";
import Charts from "./components/Charts/Charts";


// Skill component ***
const dataFetch = fetch("skillsData.json")
.then((res) => res.json());

//Project component **
const projectDataFetch = fetch("projects.json")
.then((res) => res.json());
//Animation
AOS.init({
  duration: 1500, 
  once: true,      
  offset: 100,    
});


export default function App() {

//bg-[#0f0927]
  return (
    <div className="relative bg-[#0f0927]  min-h-screen">
      
      <Particle className="absolute top-0 left-0 w-full h-full -z-10"></Particle>
     
      {/* Main Content */}
      <Navbar />
      <About />

      <Suspense fallback={<h3 className="text-3xl text-red-500 text-center italic">Loading......</h3>}>
        <Skills dataFetch={dataFetch} />
      </Suspense>

      <TechnicalExpertise/>
         
     <Experience experience={experience}/>
      

      <Suspense fallback={<h3 className="text-3xl text-red-500">Loading...</h3>}>
        <Projects projectDataFetch={projectDataFetch} />
      </Suspense>

      <Work />
      <Education />
       <Certifications/>
      <Contact />
      <Footer/>
     {/* <Charts></Charts> */}
    </div>
  );
}
