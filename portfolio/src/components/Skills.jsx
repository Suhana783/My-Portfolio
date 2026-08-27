const technicalSkillGroups = [
  {
    category: 'Frontend Development',
    description: 'Interfaces and user experiences I build with a modern frontend stack.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    description: 'Server-side development and API work for reliable application logic.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Databases & Backend Tools',
    description: 'Data modeling and persistence tools used to support backend workflows.',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    category: 'Development Tools',
    description: 'Everyday tools I use to build, test, and manage projects efficiently.',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm'],
  },
  {
    category: 'Deployment & Platforms',
    description: 'Hosting platforms I use to share and ship projects online.',
    skills: ['Render', 'Vercel'],
  },
]

const professionalSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Presentation',
  'Collaboration',
  'Adaptability',
  'Continuous Learning',
]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">MERN Stack Developer</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Technologies, tools, and professional skills I use to build reliable applications, collaborate effectively, and continuously grow as a developer.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">Technical Skills</h3>
              <p className="text-sm text-slate-500">Core technologies and tools across the stack.</p>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technicalSkillGroups.map((group) => (
                <article
                  key={group.category}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors sm:p-6"
                >
                  <h4 className="text-base font-semibold text-slate-900">{group.category}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">Professional Skills</h3>
              <p className="text-sm text-slate-500">How I communicate, adapt, and work with others.</p>
            </div>

            <article className="mt-5 rounded-xl border border-slate-300 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
