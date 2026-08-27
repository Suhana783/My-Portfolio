const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Suhana783' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suhana123' },
]

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 pb-20 pt-32 sm:px-6 md:pb-24 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-700">Hi, I&apos;m</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Suhana Chauhan
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-700 sm:text-xl">
            MERN Stack Developer | Backend-Focused Developer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            I build scalable web applications, reliable REST APIs, and maintainable backend systems while
            delivering clean and intuitive user experiences with modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden="true" />
          </div>
          <pre className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 text-xs leading-6 text-slate-700 sm:text-sm">
            <code>{`const developer = {
  name: "Suhana Chauhan",
  role: "Backend-Focused MERN Developer",
  strengths: [
    "REST APIs",
    "Backend Architecture",
    "Database Design",
    "Performance Optimization"
  ],
  available: true
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
