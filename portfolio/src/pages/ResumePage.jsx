const resumeLink = 'https://drive.google.com/file/d/18tcnfvdfAAi58XzEagbhHxfDQcjh2oh4/view?usp=sharing'

const highlights = [
  {
    title: 'Backend Development',
    details: 'Node.js • Express.js • REST APIs',
  },
  {
    title: 'MERN Stack',
    details: 'JavaScript • React.js • MongoDB',
  },
  {
    title: 'Experience',
    details: 'Backend Developer Intern',
  },
  {
    title: 'Education',
    details: 'B.C.A. Hons. with Research (2024 – 2027)',
  },
]

function ResumePage() {
  return (
    <div className="flex flex-1 flex-col justify-center bg-transparent pt-20 pb-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-left mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
            PROFESSIONAL PROFILE
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Resume
          </h2>
          <p className="mt-2 text-base text-slate-500 sm:text-lg">
            View my resume for a concise overview of my education, technical skills, projects, and development experience.
          </p>
        </div>

        {/* Main Resume Card */}
        <article className="relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/80 pl-7 pr-6 py-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:pl-9 sm:pr-8 sm:py-7">
          {/* Left-Side Navy Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-slate-800 rounded-l-xl" aria-hidden="true" />
          
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Suhana Chauhan
            </h3>
            <p className="mt-1 text-sm font-semibold text-blue-700">
              Backend-Focused MERN Stack Developer
            </p>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
              Focused on building reliable backend systems, REST APIs, and practical web applications using modern JavaScript technologies.
            </p>
          </div>

          {/* Quick Resume Highlights */}
          <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-100/80 bg-white/70 p-4 transition duration-200 hover:border-slate-200 hover:bg-white"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm font-semibold text-slate-700 leading-snug">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Resume Actions Buttons */}
          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              View Resume
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Download Resume
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </article>

        {/* Clean document-style preview card */}
        <div className="mt-5 max-w-md">
          <div className="flex items-center justify-between rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded bg-blue-50 text-blue-700 border border-blue-100" aria-hidden="true">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Suhana_Chauhan_Resume.pdf</h4>
                <p className="text-xs text-slate-400">PDF Document</p>
              </div>
            </div>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition"
            >
              View Resume
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResumePage
