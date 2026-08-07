const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Postman', 'Render', 'Vercel', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          A focused set of technologies I use to build production-ready, full-stack applications with a
          backend-first mindset.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.category} className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
