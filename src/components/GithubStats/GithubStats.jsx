
import GitHubCalendar from "react-github-calendar";
import {
  FaGithub,
  FaCodeBranch,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

const GitHubStats = () => {
 
  const statsData = [
    {
      id: 1,
      icon: <FaGithub className="text-4xl text-sky-400 mb-2" />,
      number: "25+",
      label: "Public Repos",
    },
    {
      id: 2,
      icon: <FaCodeBranch className="text-4xl text-sky-400 mb-2" />,
      number: "500+",
      label: "Total Commits",
    },
    {
      id: 3,
      icon: <FaCalendarAlt className="text-4xl text-sky-400 mb-2" />,
      number: "365+",
      label: "Contributions",
    },
    {
      id: 4,
      icon: <FaStar className="text-4xl text-sky-400 mb-2" />,
      number: "50+",
      label: "Stars Earned",
    },
  ];

  return (
    <section className="text-center  py-16 bg-[#0b1120] text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-sky-400">
        GitHub Contribution Activity
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto mb-10 text-gray-300">
        My journey as a developer is reflected in my daily GitHub contributions.
        Here’s a quick overview of my open-source activity and coding habits.
      </p>

      {/* 🔹 Step 2: Dynamic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20 mb-10">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#111b2b] p-6 rounded-2xl shadow-lg hover:scale-105 hover:border-2 hover:border-indigo-950  hover:shadow-xl hover:shadow-blue-700 transition-transform duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              {item.icon}
              <h3 className="text-2xl font-semibold">{item.number}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Step 3: GitHub Calendar */}
      <div className="bg-[#0f172a] mx-auto rounded-2xl shadow-xl p-6 w-[95%] sm:w-[80%]">
        <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
          <FaGithub className="text-sky-400" /> Contribution Activity
        </h3>

        <div className="overflow-x-auto">
          <GitHubCalendar
            username="Mokarama"
            colorScheme="dark"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
          />
        </div>

        <a
          href="https://github.com/Mokarama"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full font-medium transition-colors duration-300"
        >
          View Full Profile
        </a>
      </div>
    </section>
  );
};

export default GitHubStats;
