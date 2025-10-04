import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";

const Motion = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <SparklesIcon className="text-blue-400 w-10 h-10" />
      </motion.div>
    </>
  );
};

export default Motion;
