import { use } from "react";
import ProjectsCard from "../ProjectCard/ProjectsCard";
import Motion from "../Motion/Motion";


const Projects = ({ projectDataFetch }) => {
    console.log(projectDataFetch, "projects");

    const newExperienceData = use(projectDataFetch);
    console.log(newExperienceData);
    return (
        <div id="projects" className="max-w-7xl mx-auto">
            <Motion/>
            <h3 className="text-3xl pt-4 text-cyan-400 font-semibold  shadow-4xl text-center pb-2">
             Projects
            </h3>
            <div className=" w-[300px] bg-blue-600 shadow-4xl shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>
          
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                {
                    projectDataFetch.value.map((project, index) => <ProjectsCard key={index} project={project}></ProjectsCard>)
                }
            </div>
        
        </div>
    );
};

export default Projects;