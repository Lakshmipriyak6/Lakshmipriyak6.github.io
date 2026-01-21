export default function Projects() {
  const projects = [
    {
      title: "Space Station Object Detection",
      description:
        "Developed an AI model to detect and classify objects in space station imagery using deep learning and TensorFlow.",
      highlight:
        "Top 300 out of 30,000 participants – HackWithHyderabad",
      tech: ["Python", "TensorFlow", "Deep Learning", "AI"],
    },
    {
      title: "ATM Interface",
      description:
        "Java-based ATM system supporting authentication, withdrawals, balance inquiry, and transaction history using OOP principles.",
      highlight: "Core Java Project",
      tech: ["Java", "OOP"],
    },
    {
      title: "Online Reservation System",
      description:
        "Train reservation system using Java, JDBC, and MySQL to manage bookings, cancellations, and records.",
      highlight: "Database Management Project",
      tech: ["Java", "JDBC", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Projects
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </h2>

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              bg-white
              rounded-2xl p-8
              border border-slate-200
              cursor-pointer
              transition-all duration-300
              hover:bg-cyan-100
              hover:border-cyan-400
              hover:shadow-xl
              hover:-translate-y-2
            "
          >
            <span className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-slate-100">
              Featured
            </span>

            <h3 className="text-2xl font-bold mb-2">
              {p.title}
            </h3>

            <p className="text-slate-700 mb-3">
              {p.description}
            </p>

            <p className="text-cyan-600 font-medium mb-4">
              {p.highlight}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm rounded-full bg-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
