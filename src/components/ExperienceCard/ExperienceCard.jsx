import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";
const ExperienceCard = ({ experience }) => {
 const {title,role,tech,description,image,live,github}=experience;
  return (
    <div>
      <div className="card border-2 border-gray-400 rounded-2xl shadow-sm text-white py-5">
        <figure className="px-10">
          <img 
            src={image}
            alt="projectImg"
            className="rounded-xl h-[200px] w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-bold text-xl py-2">{title}</h2>
          <p className="py-2 px-2">{description}</p>
          <div>
            <Tilt>
             <ul className="md:flex flex-wrap justify-around gap-1 sm:w-full">
                {
                    tech.map((item, index)=>(<li className="border-2 bg-gray-700  mb-1  rounded-xl px-2" key={index}>{item}</li>))
                }
            </ul>
            </Tilt>
          </div>
          
          <div className="card-actions mt-5 flex justify-around">
            <a href='' className=" border-2 border-gray-400 rounded-xl py-2 px-5 text-xl bg-gray-500 ">
                <FaGithub />
            </a>
            <a  className="border-2 border-gray-400 rounded-xl pt-2 px-5 bg-gray-500  ">
                <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
