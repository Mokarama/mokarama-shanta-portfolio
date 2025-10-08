import { motion } from "framer-motion";


const SkillBar = ({ skill, level, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white font-medium">{skill}</span>
      <span className="text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className={`h-2.5 rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2 }}
      ></motion.div>
    </div>
  </div>
);

export default SkillBar;