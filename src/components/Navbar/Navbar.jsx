import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Education", link: "/education" },
  ];

  return (
    <nav className="px-44 fixed top-0 left-0 w-full z-50 bg-[#141334]  py-5">
      {/* Full width navbar */}
      <div className="w-full flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-semibold text-lg hover:text-indigo-400 transition"
        >
          Mokarama<span className="text-indigo-400"> / Shanta</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-indigo-400">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-300">
          <a
            href="https://github.com/Mokarama"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800 py-4">
          <ul className="flex flex-col space-y-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-indigo-400"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
