import { use } from "react";
import SkillCard from "../SkillCard/SkillCard";

const Skills = ({ dataFetch }) => {
  const newSkills = use(dataFetch);
  // console.log(newSkills)

  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl text-white font-semibold  shadow-4xl text-center pb-2">
        Skills
      </h3>
      <div className=" w-[80px] bg-blue-600 shadow-4xl shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50 "></div>

      <p class="text-gray-100 text-lg my-3 leading-relaxed max-w-3xl mx-auto text-center">
        I am a <strong>Frontend Web Developer</strong> with a passion for
        creating
        <strong>modern, responsive, and user-friendly web applications</strong>.
        I specialize in{" "}
        <strong>
          HTML, CSS, JavaScript, React, Redux, Next.js, and Tailwind CSS
        </strong>
        to build clean and interactive user interfaces. I also work with{" "}
        <strong>TypeScript</strong> for building scalable and maintainable
        projects and use tools such as{" "}
        <strong>Git, GitHub, VS Code, and Vercel</strong> for efficient
        development and smooth deployment.
      </p>

      
      <div className=" md:flex flex-wrap gap-1 lg:gap-5 py-10 justify-baseline">
        {newSkills.map((skill, index) => (
          <SkillCard skill={skill} key={index}></SkillCard>
        ))}
      </div>

    </div>
  );
};

export default Skills;
