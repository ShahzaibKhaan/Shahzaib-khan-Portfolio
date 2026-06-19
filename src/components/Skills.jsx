function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Figma",
    "PHP",
    "MySQL",
    "GitHub"
  ];

  return (
    <section>
      <h2>Skills</h2>
      {skills.map((skill) => (
        <button key={skill}>{skill}</button>
      ))}
    </section>
  );
}

export default Skills;