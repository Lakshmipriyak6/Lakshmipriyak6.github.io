export default function Certifications() {
  const certifications = [
    "AWS Cloud Practitioner",
    "NPTEL – Operating Systems",
    "React Basics – Coursera",
    "Java Server Pages – Coursera",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Certifications
        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2"></div>
      </h2>

      <div className="max-w-3xl mx-auto px-6 grid gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="
              bg-white
              rounded-xl p-6 text-center
              border border-slate-200
              cursor-pointer
              transition-all duration-300
              hover:bg-cyan-100
              hover:border-cyan-400
              hover:shadow-xl
              hover:-translate-y-2
            "
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
