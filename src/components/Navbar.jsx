import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <span className="text-2xl font-bold text-cyan-500">
          LK
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Navigation Links */}
          {["Home", "Education", "Skills", "Projects", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-700 hover:text-cyan-500 transition"
            >
              {item}
            </a>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com/lakshmipriyak6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-cyan-500 text-xl transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kalvakota-lakshmipriya-30783a305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-cyan-500 text-xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow">

          {["Home", "Education", "Skills", "Projects", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-slate-700 hover:text-cyan-500"
            >
              {item}
            </a>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/lakshmipriyak6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-700 hover:text-cyan-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kalvakota-lakshmipriya-30783a305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-700 hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
