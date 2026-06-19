const projects = [
  {
    title: "Digital Archive of Sindh Heritage",
    image: "/p1.jpg",
  },
  {
    title: "Portfolio Website",
    image: "/p2.jpg",
  },
  {
    title: "E-Commerce Store",
    image: "/p3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section">

        <h2 className="text-5xl font-bold mb-16">
          Selected Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1d012f] rounded-3xl overflow-hidden"
            >
              <img
                src={project.image}
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}