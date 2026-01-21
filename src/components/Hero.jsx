export default function Hero() {
  return (
    <section id="home" className="pt-28 min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="text-center max-w-3xl px-6">
        <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
          Computer Science Student
        </span>

        <h1 className="mt-6 text-5xl font-serif font-bold">
          Hi, I’m <span className="text-teal-500">Lakshmipriya</span>
        </h1>

        <p className="mt-6 text-slate-600">
          A passionate software developer with strong interest in web technologies,
          AI, and problem-solving.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a href="#contact" className="px-8 py-3 bg-teal-500 text-white rounded-full">
            Contact Me
          </a>
          <a href="#projects" className="px-8 py-3 border-2 border-teal-400 text-teal-600 rounded-full">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
