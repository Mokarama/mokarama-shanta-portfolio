import React, { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Img1 from "../../assets/certificates/Img1.png";
import Img2 from "../../assets/certificates/img2.jpg";
import expressJsImg from "../../assets/certificates/expressjs.png";
import reactJsImg from "../../assets/certificates/reactjs.png";
import Motion from "../Motion/Motion";

const Certifications = () => {
  const flickingRef = useRef(null);

  // Plugins
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }),
  ];

  // Button Handlers
  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  return (
    <div id="certifications" className="pt-20">
      <Motion />
      <h3 className="text-3xl pt-4 text-cyan-400 font-semibold my-2 text-center">
        Certifications
      </h3>
      <div className="w-[300px] bg-blue-600 shadow-4xl mb-3 shadow-gray-400 flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>
      <p className="text-xl text-white text-center my-2 pb-7">
        Professional certifications and continuous learning achievements
      </p>

      <div className="relative px-10 flex justify-center items-center">
        {/* ← Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-10 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Flicking Slider */}
        <div className="w-full max-w-5xl">
          <Flicking
            ref={flickingRef}
            align="center"
            circular={true}
            moveType="snap"
            bound={true}
            plugins={plugins}
          >
            {[Img1, reactJsImg, expressJsImg, Img2].map((img, i) => (
              <div
                key={i}
                className="w-[500px] flex items-center justify-center px-4"
              >
                <img
                  src={img}
                  alt={`cert-${i}`}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Flicking>
        </div>

        {/* → Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-10 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg z-10 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Certifications;
