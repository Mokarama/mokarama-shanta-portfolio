// import "../Skills/icons";

import Tilt from "react-parallax-tilt";
const SkillCard = ({ skill }) => {
  return (
    <>
      <div
        className=" backdrop-blur-xs px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl hover:shadow-2xl  hover:border-2 hover:border-[#696772] hover:shadow-[#5830e7] border border-gray-700 "
      >
        <Tilt>
          {/* Category Name */}
          <h2 className="text-2xl font-semibold text-white  mb-4 text-center">
            {skill.category}
          </h2>

          {/* Skills List */}
          <div className="md:grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 ">
            {skill.skills.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg hover:bg-blue-500 transition  mb-3 md:mb-0 "
              >
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                )}

                {/* Skill Name */}
                <span className="text-white text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default SkillCard;
