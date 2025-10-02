const Experience = ({ experience, experienceImg }) => {
  console.log(experience, experienceImg, "Img pawa gese");
  return (
    <section
      id="experience"
      className="py-24 px-[6vw] font-sans bg-skills-gradient text-white"
    >
      <h2>{experience.id}</h2>
      {/* Section Title */}
      <div className="text-center mb-8 ">
       
         <h3 className="text-3xl pt-4 text-white font-semibold  shadow-4xl text-center pb-2">Experience</h3>
            <div className=" w-[300px] bg-blue-600 shadow-4xl shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>


        <p className="text-gray-400 text-lg font-semibold mt-4">
          A collection of my work experience and roles I have taken in various
          organizations
        </p>
      </div>

      {/* Timeline */}
      <div
        className="relative mt-16
      border-green-600"
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden  sm:block"></div>

        {/* Experience Entries */}
        {experience.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col sm:flex-row items-center  mb-16 mx-0 md:mx-36  ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-3 sm:transform sm:-translate-x-1/2 z-10 bg-white border-4 border-blue-500 w-14 h-14 rounded-full flex justify-center items-center shadow-lg ">
              <img
                src={item.img}
                alt={item.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-x-5 hover:border-gray-50 hover:shadow-2xl hover:shadow-[#040e9c] backdrop-blur-md transition-transform duration-300 hover:scale-105 
                ${index % 2 === 0 ? "sm:ml-[20px]" : "sm:mr-[20px]"} 
                mt-20 sm:mt-0`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4">
                {/* Company Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex justify-center items-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* Role, Company & Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <h2 className="text-sm sm:text-base text-gray-300">
                      {item.company}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {item.date}
                  </p>
                  <p>Logo{item.icon}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4  text-sm sm:text-base">
                {item.desc}
              </p>

                {/* Skills card */}
              <div className="flex flex-wrap gap-4  mb-2 mt-5 ">
                {item.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2 py-1  bg-gray-800 hover:bg-blue-900 rounded-lg hover:border-2 hover:border-gray-400 transition mb-3 md:mb-0"
                  >
                    {/* Skill Name */}
                    <span className="text-white text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
