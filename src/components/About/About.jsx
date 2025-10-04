import { Typewriter } from "react-simple-typewriter";
// import portfolioImg from "../../assets/portfolio.jpg";
import Tilt from "react-parallax-tilt";
import "./about.css";
import mokaramaCv from "../../assets/Mokarama_CV.pdf";
import myImg from "../../assets/img.jpg";
import Motion from "./Motion";
import Motion2 from "./Motion2";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen w-3/4 mx-auto font-sans  content-center items-center py-30 "
      >
         <Motion />
        <Motion2 />
        <div className="md:flex justify-between gap-20  ">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight pt-9 md:pt-0">
              Mokarama Shanta
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00df9a]">
              <span className="text-white">I am </span>
              <Typewriter
                words={[
                  "Frontend Developer",
                  "HTML & CSS Expert",
                  "TailwindCSS User",
                  "JavaScript Lover",
                  "DOM Manipulation Pro",
                  "API Integration",
                  "ReactJS Enthusiast",
                  "Git & GitHub User",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>

            <p className="text-white mt-7">
              I am Mokarama Shanta, a dedicated Frontend Developer with a strong
              focus on building modern, responsive, and user-friendly web
              applications. Proficient in HTML, CSS, JavaScript, TailwindCSS,
              and ReactJS, I strive to transform design concepts into seamless
              digital experiences. With a keen eye for detail and a passion for
              clean, efficient code, I aim to deliver projects that not only
              meet but exceed client expectations. Continuously learning and
              adapting to new technologies, I am committed to creating web
              solutions that are visually engaging, performant, and impactful.
            </p>
            {/* Button area */}
            <div className="flex gap-4 items-center justify-center my-8">
              <div className="projects btn glow-btn bg-blue-600 py-2 px-6 my-3 rounded-sm text-white  font-bold shadow-xl  shadow-blue-800 hover:animate-bounce">
                <a
                  href="#projects">
                  View My Work
                </a>
              </div>
              <div>
                <div className="flex btn glow-btn bg-blue-600 py-2 px-6 my-3 rounded-sm text-white shadow-xl  shadow-blue-800 w-50 hover:animate-bounce">
                  <div className="flex items-center gap-1">
                    <div><HiOutlineDownload className="text-xl text-white animate-bounce" /></div>
                    <div ><IoDocumentTextOutline className="text-xl text-white mr-2" /></div>
                    
                  </div>
                  <div><a
                  href={mokaramaCv}
                  download
                   > Download CV </a></div>
                </div>
                
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 items-center justify-center">
              <a
                href="https://github.com/Mokarama"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0e172b] border hover:animate-bounce border-blue-400 text-white p-3 rounded-lg hover:bg-cyan-400 hover:shadow-2xl hover:shadow-blue-100 transition"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mokarama-mim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0e172b] border hover:animate-bounce border-blue-600 text-white p-3 rounded-lg hover:bg-cyan-400 hover:shadow-2xl hover:shadow-blue-100 transition"
              >
                <LuLinkedin size={20} />
              </a>

              <a
                href="mailto:mokaramaaktershanta@gmail.com"
                className="bg-[#0e172b] border hover:animate-bounce border-blue-600 text-white p-3 rounded-lg hover:bg-cyan-400 hover:shadow-2xl hover:shadow-blue-100 transition"
              >
                <CiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2  flex fl-col justify-center ">
            <Tilt>
              <img
                className="rounded-full h-[450px] w-[450px]  object-cover mt-10 border-5 border-blue-600 border-x-fuchsia-500 shadow-2xl shadow-blue-500"
                src={myImg}
                alt="portfolio"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
