
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineTags } from "react-icons/ai";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProjectsCard = ({ project }) => {
 const {title,duration,name,tech,description,image,live,github}=project;
  return (
    <div>
      <div  className="card border-2 border-cyan-200   rounded-2xl shadow-xl shadow-blue-900 hover:shadow-blue-400 text-white py-5 font-sans  bg-[#37547f21]
 ">

     <figure data-aos="zoom-in" 
     data-aos-duration="3000" data-aos-once="false" className="px-5 hover:px-0 hover:mx-10">
         <img 
            src={image}
            alt="projectImg"
            className="rounded-xl h-[260px] w-full object-cover hover:scale-110"
          />  
        </figure>
 
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-3xl  md:text-2xl py-3 text-cyan-400">{title}</h2>
          {/* Tech name and date */}
        <div className="mb-1 flex items-center ml-5 gap-7 justify-center">
          <div className="flex items-center justify-center border-2  rounded-lg px-1 bg-[#3cc9c422] text-cyan-600 font-bold hover:bg-blue-400 hover:text-black hover:animate-bounce ">
            <div><AiOutlineTags className="text-2xl mr-2" /></div>
            <div className="">{name}</div>
          </div>
          <div className="flex items-center ">
            <div><CiCalendar className="text-2xl mr-2" /></div>
            <div>{duration}</div>
            </div>
        </div>

          <p className="py-2 px-2">{description}</p>
          <div>
           
             <ul className="flex flex-wrap items-center justify-center gap-6  ">
                {
                    tech.map((item, index)=>(<li className="border-2 border-cyan-400 hover:bg-blue-300  bg-blue-500 text-black font-semibold  animate-bounce mb-1 hover:shadow-3xl hover:shadow-emerald-400  rounded-xl px-2" key={index}>{item}</li>))
                }
            </ul>
          
          </div>
          
          <div className="card-actions mt-5 flex  justify-center gap-5">
            <a href={github} className=" border-2 border-cyan-600 hover:bg-cyan-400 rounded-xl px-4 text-xl bg-[#12101040] flex items-center gap-3 py-1"><FaGithub  /><p>code</p></a>
            <a href={live}  className="border-2 border-cyan-400 rounded-xl  px-5 bg-blue-500 flex items-center gap-4 hover:bg-cyan-800 hover:animate-bounce py-1">
                <FaExternalLinkAlt /> <p className="font-semibold">Demo</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
