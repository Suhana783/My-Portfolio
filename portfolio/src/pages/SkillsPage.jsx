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

function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col justify-start bg-transparent pt-24 pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 my-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">MERN Stack Developer</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Skills</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Technologies, tools, and professional skills I use to build reliable applications, collaborate effectively, and continuously grow as a developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 space-y-10">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200 pb-2">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Technical Skills</h3>
              <p className="text-sm text-slate-500">Core technologies and tools across the stack.</p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technicalSkillGroups.map((group) => (
                <article
                  key={group.category}
                  className="relative flex flex-col justify-between rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:bg-white hover:shadow-[0_22px_60px_-35px_rgba(37,99,235,0.22)] sm:p-6"
                >
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{group.category}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.description}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors hover:bg-white hover:border-blue-300 hover:text-blue-700"
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
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200 pb-2">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Professional Skills</h3>
              <p className="text-sm text-slate-500">How I communicate, adapt, and work with others.</p>
            </div>

            <article className="mt-6 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:bg-white hover:shadow-[0_22px_60px_-35px_rgba(37,99,235,0.22)] sm:p-6">
              <div className="flex flex-wrap gap-2.5">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-200/60 bg-blue-50/40 px-4 py-1.5 text-[15px] font-bold text-blue-700 transition-all hover:bg-white hover:border-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
