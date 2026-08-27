function ProjectCard({ project, featured = false }) {
  const cardBase = featured
    ? 'group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
    : 'group overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm'

  return (
    <article className={cardBase}>
      {featured && (
        <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-56 w-full object-cover object-top bg-slate-100 transition duration-300 group-hover:scale-[1.02] sm:h-72 md:h-[360px]"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.style.display = 'none'
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.classList.add(
                    'flex',
                    'h-44',
                    'items-center',
                    'justify-center',
                    'text-slate-400',
                    'text-sm',
                    'font-medium'
                  )
                  e.currentTarget.parentElement.innerText = `${project.title} Screenshot Placeholder`
                }
              }}
            />
          ) : (
            <div className="flex h-44 items-center justify-center bg-slate-100 text-sm font-medium text-slate-500 transition duration-300 group-hover:scale-[1.02] sm:h-52">
              Project Screenshot Placeholder
            </div>
          )}
        </div>
      )}

      <div className={featured ? 'p-5 sm:p-6' : ''}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{project.title}</h3>
          {project.role && (
            <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {project.role}
            </span>
          )}
        </div>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">{project.description}</p>

        {project.features?.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-slate-600 sm:text-base">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.476 2 2 6.59 2 12.253c0 4.53 2.865 8.372 6.839 9.727.5.097.682-.222.682-.495 0-.245-.01-1.055-.014-1.913-2.782.617-3.369-1.214-3.369-1.214-.455-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.004.073 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.667.349-1.114.635-1.37-2.22-.26-4.555-1.137-4.555-5.062 0-1.118.39-2.033 1.03-2.75-.103-.261-.447-1.31.097-2.73 0 0 .84-.275 2.75 1.05A9.325 9.325 0 0 1 12 6.868a9.3 9.3 0 0 1 2.504.347c1.909-1.325 2.748-1.05 2.748-1.05.546 1.42.202 2.469.1 2.73.641.717 1.028 1.632 1.028 2.75 0 3.935-2.339 4.799-4.566 5.055.359.319.678.944.678 1.903 0 1.374-.012 2.482-.012 2.82 0 .275.18.597.688.494C19.138 20.621 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Live Demo
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
 