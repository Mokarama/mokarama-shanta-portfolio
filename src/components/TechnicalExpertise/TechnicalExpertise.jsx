// Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 92 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ],
  tools: [
    { name: "Next.js", level: 80 },
    { name: "Vite", level: 85 },
    { name: "Git/GitHub", level: 88 },
    { name: "Figma", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "Responsive Design", level: 92 },
  ],
  backend: [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "PostgreSQL", level: 60 },
    { name: "REST APIs", level: 75 },
    { name: "Firebase", level: 90 },
  ],
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center py-10">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-pink-400">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        {Object.entries(skills).map(([category, list], i) => (
          <motion.div
            key={category}
            className="card bg-base-200 shadow-xl p-6 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-5 capitalize flex items-center gap-2">
              {category === "frontend" && <FaReact />}
              {category === "tools" && <FaDatabase />}
              {category === "backend" && <FaNodeJs />}
              {category.replace("&", " & ")}
            </h3>
            <ul className="space-y-3">
              {list.map((skill) => (


                <li key={skill.name}>
                  <p className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </p>
                  <progress
                    className="progress progress-primary w-full"
                    value={skill.level}
                    max="100"
                  ></progress>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
