
import { FaCode, FaTools, FaDatabase } from "react-icons/fa";
 // eslint-disable-next-line no-unused-vars
 import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { MdLanguage } from "react-icons/md";

const skills = {
  frontend: [
    { skill: "React", level: 90, color: "bg-sky-500" },
    { skill: "TypeScript", level: 50, color: "bg-indigo-400" },
    { skill: "JavaScript", level: 92, color: "bg-yellow-400" },
    { skill: "HTML/CSS", level: 95, color: "bg-orange-400" },
    { skill: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
  ],
  tools: [
    { skill: "Next.js", level: 10, color: "bg-gray-500" },
    { skill: "Vite", level: 85, color: "bg-purple-400" },
    { skill: "Git/GitHub", level: 88, color: "bg-red-500" },
    { skill: "Figma", level: 90, color: "bg-pink-400" },
    { skill: "VS Code", level: 95, color: "bg-blue-400" },
    { skill: "Responsive Design", level: 92, color: "bg-green-400" },
  ],
  backend: [
    { skill: "Node.js", level: 70, color: "bg-lime-400" },
    { skill: "Express.js", level: 50, color: "bg-emerald-400" },
    { skill: "PostgreSQL", level: 50, color: "bg-teal-400" },
    { skill: "REST APIs", level: 90, color: "bg-pink-400" },
    { skill: "Firebase", level: 90, color: "bg-orange-400" },
  ],
  language: [
    { skill: "JavaScript", level: 95, color: "bg-sky-500" },
    { skill: "TypeScript", level: 50, color: "bg-indigo-400" },
    { skill: "Python", level: 92, color: "bg-yellow-400" },
     { skill: "C", level: 90, color: "bg-cyan-400" },
    { skill: "C++", level: 95, color: "bg-orange-400" },
   
  ],
};

<SkillBar></SkillBar>

const TechnicalExpertise=()=> {
  const categories = [
    {
      title: "Frontend Technologies",
      icon: <FaCode className="text-sky-400 text-3xl mb-3" />,
      data: skills.frontend,
    },
    {
      title: "Tools & Frameworks",
      icon: <FaTools className="text-purple-400 text-3xl mb-3" />,
      data: skills.tools,
    },
    {
      title: "Backend & Database",
      icon: <FaDatabase className="text-green-400 text-3xl mb-3" />,
      data: skills.backend,
    },
     {
      title: "Language",
      icon: <MdLanguage className="text-green-400 text-3xl mb-3" />,
      data: skills.language,
    },
  ];

  return (
    <section
      id="techStack"
      className="min-h-screen bg-gradient-to-br from-[#12002b] via-[#090018] to-[#000010] text-white flex flex-col items-center px-6 py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        My <span className="text-cyan-400 pb-2">Tech Stack</span>
      </h2>
      <div className=" w-[80px] bg-blue-600 shadow-4xl shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50 "></div>
      <p className="text-gray-400 mb-12 text-center max-w-2xl">
        A comprehensive overview of my technical expertise and proficiency levels
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 w-full max-w-6xl">
        {
        categories.map((category, index) => (

          <motion.div
            key={index}
            className="bg-[#0b0120] p-8 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 border border-gray-800"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-center text-blue-300">
                {category.title}
              </h3>
            </div>
            
            {
            category.data.map((item, i) => (
              <SkillBar key={i} {...item} />
            ))
            
            }
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechnicalExpertise;