export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 bg-purple-700 rounded-full"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}