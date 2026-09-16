import ProjectCard from '../components/ProjectCard'

const sourceXCloudProject = {
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
}

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

function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col justify-start bg-transparent pt-24 pb-20">
      <div className="mx-auto my-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Development Experience</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A selection of projects I have built and worked on, with a strong focus on practical backend development, API integration, and database management.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-10 space-y-12">
          {/* Main Featured Project: SourceXCloud */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-slate-400">Professional Experience</h3>
            <ProjectCard project={sourceXCloudProject} featured />
          </div>

          {/* Internship Experience Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-slate-400">Professional Experience</h3>
            <article className="group overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-35px_rgba(15,23,42,0.55)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {internshipExperience.company}
                  </h4>
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
                    className="flex flex-col rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_18px_45px_-40px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100/50 pb-2">
                      <h5 className="text-lg font-bold text-slate-900">{proj.title}</h5>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100/30">
                        {proj.role}
                      </span>
                    </div>
                    
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {proj.description}
                    </p>

                    <ul className="mt-4 grow space-y-2 text-sm text-slate-600">
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
      </div>
    </div>
  )
}

export default ProjectsPage
