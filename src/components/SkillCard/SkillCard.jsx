
import "../Skills/icons";
import Tilt from "react-parallax-tilt";
const SkillCard = ({ skill }) => {
  return (
    <>
    <div
      className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 
                    w-full sm:w-[48%] rounded-2xl border 
                    shadow-[0_0_20px_rgba(130,69,236,0.3)] "
    >
      <Tilt>
        {/* Category Name */}
        <h2 className="text-2xl font-semibold text-gray-300 mb-4 text-center">
          {skill.category}
        </h2>

        {/* Skills List */}
        <div className="md:grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 ">
          {skill.skills.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition  mb-3 md:mb-0"
            >
              {item.icon && (
                <img
                  src={item.icon}
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
