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


const dataFetch=fetch('skillsData.json')
.then(res=>res.json())
console.log(dataFetch)

const experienceDataFetch =fetch('experience.json')
.then(res=>res.json())
console.log(experienceDataFetch);

function App() {

  return (
    <>
     <div className="bg-[#05081f] ">
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
   
    </>
  );
}

export default App;
