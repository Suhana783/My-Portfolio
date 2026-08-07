import ProjectCard from './ProjectCard'

const featuredProjects = [
  {
    title: 'SourceXCloud',
    role: 'Backend Developer',
    description:
      'A technology platform providing IT services and technology-focused learning offerings with a scalable full-stack setup.',
    features: [
      'Designed REST API modules with structured backend architecture',
      'Implemented MongoDB integration and secure data handling',
      'Built utility flows for email workflows, logs, and export-ready services',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    githubUrl: 'SOURCEXCLOUD_GITHUB_URL',
    liveUrl: 'SOURCEXCLOUD_LIVE_URL',
  },
  {
    title: 'Project Placeholder One',
    role: 'Full Stack Developer',
    description:
      'PLACEHOLDER: Replace with your major project summary highlighting backend system design and business impact.',
    features: [
      'PLACEHOLDER: Mention core backend feature',
      'PLACEHOLDER: Mention database or architecture decision',
      'PLACEHOLDER: Mention deployment or optimization outcome',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'FEATURED_PROJECT_ONE_GITHUB_URL',
    liveUrl: 'FEATURED_PROJECT_ONE_LIVE_URL',
  },
  {
    title: 'Project Placeholder Two',
    role: 'Backend-Focused Developer',
    description:
      'PLACEHOLDER: Replace with a concise overview of a production-style application and your technical contributions.',
    features: [
      'PLACEHOLDER: Mention API layer or service integration',
      'PLACEHOLDER: Mention data model or workflow implementation',
      'PLACEHOLDER: Mention measurable improvement or result',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    githubUrl: 'FEATURED_PROJECT_TWO_GITHUB_URL',
    liveUrl: 'FEATURED_PROJECT_TWO_LIVE_URL',
  },
]

const moreProjects = [
  {
    title: 'Mini Project One',
    description:
      'PLACEHOLDER: Short project summary with one or two outcomes showcasing practical backend or full-stack execution.',
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'MORE_PROJECT_ONE_GITHUB_URL',
    liveUrl: 'MORE_PROJECT_ONE_LIVE_URL',
  },
  {
    title: 'Mini Project Two',
    description:
      'PLACEHOLDER: Brief description explaining the problem solved and your implementation approach.',
    techStack: ['Express.js', 'REST APIs', 'Postman'],
    githubUrl: 'MORE_PROJECT_TWO_GITHUB_URL',
    liveUrl: 'MORE_PROJECT_TWO_LIVE_URL',
  },
  {
    title: 'Mini Project Three',
    description:
      'PLACEHOLDER: Short details on architecture, API integration, or deployment workflow.',
    techStack: ['React.js', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'MORE_PROJECT_THREE_GITHUB_URL',
    liveUrl: 'MORE_PROJECT_THREE_LIVE_URL',
  },
  {
    title: 'Mini Project Four',
    description:
      'PLACEHOLDER: Mention a backend functionality, data workflow, or optimization experiment.',
    techStack: ['Node.js', 'PostgreSQL', 'Prisma'],
    githubUrl: 'MORE_PROJECT_FOUR_GITHUB_URL',
    liveUrl: 'MORE_PROJECT_FOUR_LIVE_URL',
  },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          A selection of projects I&apos;ve built and worked on.
        </p>

        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900">More Projects</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {moreProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
