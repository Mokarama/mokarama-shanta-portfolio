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

function App() {

  return (
    <>
     <div className="bg-[#05081f] ">
        <Navbar />
        <About />
        <Skills dataFetch={dataFetch} />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
        </div>
   
    </>
  );
}

export default App;
