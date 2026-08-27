import ProjectCard from './ProjectCard'

const featuredProjects = [
  {
    title: 'SourceXCloud',
    role: 'Backend Developer',
    description:
      'SourceXCloud is a technology platform providing IT services and technology-focused learning offerings with a full-stack architecture.',
    features: [
      'Designed and developed backend functionality and REST APIs using Node.js and Express.js',
      'Structured backend code using reusable routes, controllers, middleware and services',
      'Designed and managed MongoDB schemas and database operations using Mongoose',
      'Integrated Resend API for transactional email workflows and XLSX library for Excel exports',
      'Implemented Morgan HTTP request logging and in-memory caching for performance optimization',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'Resend API',
      'Morgan',
      'XLSX',
    ],
    image: '/projects/sourcexcloud.png',
    liveUrl: 'https://sourcexcloud.com',
  },
]

const internshipExperience = {
  company: 'Codesoar Technologies',
  role: 'Backend Developer Intern',
  description: 'Worked on backend development across two projects during internship.',
  projects: [
    {
      title: 'FOA-Services',
      role: 'Backend Development',
      description:
        'Worked on backend development for FOA-Services, contributing to API development, business logic, request validation, database operations, and backend module implementation.',
      features: [
        'Developed and worked on backend APIs using Node.js and Express.js.',
        'Implemented and maintained business logic and request validation.',
        'Worked with Prisma ORM for database operations.',
        'Followed a modular backend structure with controllers, services, and validation.',
        'Debugged backend issues and improved API reliability.',
      ],
      techStack: ['Node.js', 'Express.js', 'Prisma', 'REST APIs', 'API Validation'],
    },
    {
      title: 'ERP Module',
      role: 'Backend Development & Debugging',
      description:
        'Worked with an existing ERP backend to understand its architecture and business logic, identify issues, and implement fixes across backend modules.',
      features: [
        'Analyzed existing backend logic and API workflows.',
        'Debugged and fixed issues across different ERP modules.',
        'Worked with validation, database operations, and API handling.',
        'Gained experience working with a large, modular backend codebase.',
        'Improved understanding of business-driven backend logic and maintaining existing systems.',
      ],
      techStack: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Prisma'],
    },
  ],
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          A selection of projects I&apos;ve built and worked on.
        </p>

        <div className="mt-10 grid gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}

          {/* Codesoar Technologies Block */}
          <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  {internshipExperience.company}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
                  {internshipExperience.description}
                </p>
              </div>
              <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                {internshipExperience.role}
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {internshipExperience.projects.map((proj) => (
                <div
                  key={proj.title}
                  className="flex flex-col rounded-lg border border-slate-200 bg-slate-50/20 p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100/50 pb-2">
                    <h4 className="text-lg font-bold text-slate-900">{proj.title}</h4>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100/30">
                      {proj.role}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {proj.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-grow">
                    {proj.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100/50">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
