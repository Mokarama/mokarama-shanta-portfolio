import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; 

const Motion2 = () => {
  return (
    <div className="relative w-full  flex justify-center items-center">
      {/* Floating Sparkle */}
      <motion.div
        className="absolute"
        animate={{ y: [0, -50, 50, 0] }} 
        transition={{
          duration: 2,   
          repeat: Infinity,  
          ease: "easeInOut", 
        }}
      >
        <Sparkles className="text-pink-400 w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute left-1/3 top-1/2"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="text-yellow-400 w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-1/3"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="text-blue-400 w-5 h-5" />
      </motion.div>
    </div>
  );
};

export default Motion2;
