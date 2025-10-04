import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10 md:px-20">
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Name and Description */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-3 py-5">
            Mokarama Akter Shanta
          </h2>
          <p className="leading-relaxed">
            Passionate Frontend Developer skilled in React, TailwindCSS, and
            modern web technologies. Dedicated to crafting beautiful and
            user-friendly interfaces with attention to detail.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com/Mokarama"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-gray-900 p-3 rounded-lg hover:bg-cyan-400 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-gray-900 p-3 rounded-lg hover:bg-cyan-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mokaramaaktershanta@gmail.com"
              className="bg-cyan-500 text-gray-900 p-3 rounded-lg hover:bg-cyan-400 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Contact</h3>
          <p>Email: youremail@gmail.com</p>
          <p>Phone: +880 1776 669 345</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "certifications",
              "contact",
              "git-collaboration",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="hover:text-cyan-400 cursor-pointer capitalize"
                >
                  {item.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-gray-300 text-sm">
        © 2025 Mokarama Akter Shanta. Crafted with ❤️ and precision for
        creativity.
      </div>
    </footer>
  );
};

export default Footer;
