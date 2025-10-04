import { Typewriter } from "react-simple-typewriter";
// import portfolioImg from "../../assets/portfolio.jpg";
import Tilt from "react-parallax-tilt";
import "./about.css";
import mokaramaCv from "../../assets/Mokarama_CV.pdf";
import myImg from '../../assets/img.jpg';
import Motion from "./Motion";
import Motion2 from "./Motion2";


const About = () => {
  return (
    <>
    
    <Motion/>
    <div id="about" className="min-h-screen w-3/4 mx-auto font-sans  content-center items-center sm:py-40 py-10">
      <Motion2/>
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
            applications. Proficient in HTML, CSS, JavaScript, TailwindCSS, and
            ReactJS, I strive to transform design concepts into seamless digital
            experiences. With a keen eye for detail and a passion for clean,
            efficient code, I aim to deliver projects that not only meet but
            exceed client expectations. Continuously learning and adapting to
            new technologies, I am committed to creating web solutions that are
            visually engaging, performant, and impactful.
          </p>

          <a
            href={mokaramaCv}
            download
            className="btn bg-blue-600 py-2 px-6 my-3 rounded-3xl text-white shadow-2xl border-b-3 shadow-blue-200 inline-block"
          >
            Download CV
          </a>
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
