export default function Education() {
  const education = [
    {
      title: "K L E F Deemed to be University",
      degree: "B.Tech – Computer Science and Engineering",
      duration: "July 2023 – May 2027 · Hyderabad, India",
      extra: "CGPA 9.39",
    },
    {
      title: "Alphores Junior College",
      degree: "Intermediate",
      duration: "Telangana State Board·  2020 – 2022",
    },
    {
      title: "Secondary School Certificate (SSC)",
      degree: "Telangana State Board",
      duration: "2019-2020",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Education
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-8">
        {education.map((edu, i) => (
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
            <h3 className="text-2xl font-bold">{edu.title}</h3>

            <p className="mt-1">{edu.degree}</p>

            <p className="text-slate-600 mt-1">
              {edu.duration}
            </p>

            {edu.extra && (
              <span className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-slate-100">
                {edu.extra}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
