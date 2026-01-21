const skills = [
  { name: "Java", value: 90 },
  { name: "JavaScript", value: 85 },
  { name: "C", value: 80 },
  { name: "SQL", value: 85 },
  { name: "NoSQL", value: 75 },
]

export default function Skills() {
  return (
    <section className="py-20 bg-slate-50">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Languages
      </h2>

      <div className="max-w-3xl mx-auto px-6 space-y-6">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <div className="w-full h-3 bg-slate-200 rounded-full">
              <div
                className="h-3 bg-teal-400 rounded-full"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
