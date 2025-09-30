import { Suspense } from "react";
import "./App.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Particle from "./components/Particle";


const dataFetch = fetch("skillsData.json").then((res) => res.json());
const experienceDataFetch = fetch("experience.json").then((res) => res.json());

export default function App() {


  return (
    <div className="relative bg-[#0f0927] min-h-screen">
    
      <Particle className="absolute top-0 left-0 w-full h-full -z-10"></Particle>
  
      {/* Main Content */}
      <Navbar />
      <About />
      <Suspense fallback={<h3 className="text-3xl text-red-500 text-center italic">Loading......</h3>}>
        <Skills dataFetch={dataFetch} />
      </Suspense>
      <Suspense fallback={<h3 className="text-3xl text-red-500">Loading...</h3>}>
        <Experience experienceDataFetch={experienceDataFetch} />
      </Suspense>
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
