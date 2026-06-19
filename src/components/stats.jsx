export default function Stats() {
  const stats = [
    ["40+", "Projects"],
    ["20+", "Clients"],
    ["5+", "Technologies"],
    ["100%", "Dedication"],
  ];

  return (
    <section className="gradient py-12">
      <div className="section grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

        {stats.map((s) => (
          <div key={s[0]}>
            <h2 className="text-4xl font-bold">
              {s[0]}
            </h2>

            <p>{s[1]}</p>
          </div>
        ))}

      </div>
    </section>
  );
}