const quickInfo = [
  { label: 'Location', value: 'India' },
  { label: 'Focus', value: 'Full Stack / Backend Development' },
  { label: 'Availability', value: 'Open to Opportunities' },
]

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            I&apos;m a MERN Stack developer with a stronger interest in backend development and building
            reliable web applications. I enjoy designing APIs, structuring scalable server-side systems,
            and integrating databases that support real-world product requirements.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            My work includes JavaScript, React.js, Node.js, Express.js, MongoDB, and REST API
            development, with a focus on backend architecture, database design, and practical project
            execution from development to deployment.
          </p>
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick Information</h3>
          <dl className="mt-4 space-y-4">
            {quickInfo.map((item) => (
              <div key={item.label} className="border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default About
