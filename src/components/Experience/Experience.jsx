import { use } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";


const Experience = ({ experienceDataFetch }) => {
    console.log(experienceDataFetch, "experience");

    const newExperienceData = use(experienceDataFetch);
    console.log(newExperienceData);
    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl pt-4 text-white font-semibold  shadow-4xl text-center pb-2">
                Experience & Projects
            </h3>
            <div className=" w-[300px] bg-blue-600 shadow-4xl shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>
          
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                {
                    experienceDataFetch.value.map((experience, index) => <ExperienceCard key={index} experience={experience}></ExperienceCard>)
                }
            </div>
        
        </div>
    );
};

export default Experience;