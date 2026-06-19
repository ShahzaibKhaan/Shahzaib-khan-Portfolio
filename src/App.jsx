import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const skills = [
  "HTML5",
  "CSS3",
  "JavaScript ES6+",
  "React",
  "Next.js",
  "WordPress",
  "WooCommerce",
  "Figma",
  "Git",
  "GitHub",
  "Vercel"
];

  const projects = [
  {
    title: "Shopping Store",
    tech: "HTML, CSS, JavaScript",
  },
  {
    title: "Sindh Cultural Archive",
    tech: "Next.js, React, Vercel",
  },
  {
    title: "Construction Company Website",
    tech: "HTML, CSS, JavaScript, Figma",
  },
];

  return (
    <>
      <nav className="navbar">
        <h2>Shahzaib</h2>

        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
  <h1>Muhammad Shahzaib Khan</h1>

  <h2>
    Front-End Developer | WordPress Developer
  </h2>

  <p>
    Final-Year Software Engineering Student.
    Building responsive websites and modern web applications.
  </p>

  <div className="hero-btns">
    <button>Download CV</button>
  </div>
</section>
     <section id="about" className="section">
  <h2>About Me</h2>

  <p>
    I am a Final-Year Software Engineering student at SMIU,
    Karachi. I have professional internship experience as a
    Front-End Developer at FourFox, where I developed
    responsive websites, implemented WooCommerce solutions,
    and converted Figma designs into production-ready code.
  </p>
</section>
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

<section className="section">
  <h2>Experience</h2>

  <div className="card">
    <h3>Front-End Developer Intern</h3>

    <p>FourFox | Aug 2024 - Feb 2025</p>

    <ul>
      <li>Built 5+ responsive websites</li>
      <li>Implemented WooCommerce solutions</li>
      <li>Converted Figma designs into code</li>
      <li>Improved website performance</li>
      <li>Worked in Agile/Scrum teams</li>
    </ul>
  </div>
</section>
      <section id="contact" className="section">
  <h2>Contact</h2>

  <div className="icons">
    <a
      href="https://github.com/ShahzaibKhaan"
      target="_blank"
    >
      <FaGithub />
    </a>

    <a
      href="https://linkedin.com/in/shahzaib-khan-16b8a227a"
      target="_blank"
    >
      <FaLinkedin />
    </a>

    <a href="mailto:shahzebkhaan097@gmail.com">
      <FaEnvelope />
    </a>
  </div>

  <p>Karachi, Pakistan</p>
  <p>shahzebkhaan097@gmail.com</p>
</section>
    </>
  );
}

export default App;