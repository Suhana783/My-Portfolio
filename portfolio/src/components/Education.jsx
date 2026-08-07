const educationItems = [
  {
    degree: 'DEGREE / PROGRAM PLACEHOLDER',
    institution: 'INSTITUTION NAME PLACEHOLDER',
    duration: 'YEAR - YEAR',
    description:
      'PLACEHOLDER: Add relevant coursework, achievements, or project-based learning highlights.',
  },
  {
    degree: 'ADDITIONAL PROGRAM / CERTIFICATION PLACEHOLDER',
    institution: 'INSTITUTION NAME PLACEHOLDER',
    duration: 'YEAR',
    description:
      'PLACEHOLDER: Add concise information that supports your developer profile.',
  },
]

function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Education</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {educationItems.map((item) => (
            <article key={`${item.degree}-${item.duration}`} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{item.duration}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-600">{item.institution}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
