const quickInfo = [
  { label: 'Location', value: 'India' },
  { label: 'Focus', value: 'Full Stack / Backend Development' },
  { label: 'Availability', value: 'Open to Opportunities' },
]

function AboutMe() {
  return (
    <div className="flex flex-1 flex-col justify-center bg-transparent pt-16 pb-4">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          
          {/* Left Column: About Me Paragraphs */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
                Who I Am
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                About Me
              </h2>
              {/* Subtle blue accent line */}
              <div className="mt-3 h-[3px] w-12 rounded-full bg-blue-600" />
            </div>
            
            <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 max-w-2xl">
              <p>
                I&apos;m a <strong className="font-semibold text-slate-800">MERN Stack Developer</strong> passionate about building modern, practical, and user-focused web applications. I enjoy working across <strong className="font-semibold text-slate-800">JavaScript, React.js, Node.js, Express.js, and MongoDB</strong>, turning ideas into clean and reliable solutions. With hands-on experience building real-world projects, I&apos;m always eager to <strong className="font-semibold text-slate-800">learn, explore new technologies, solve challenging problems, and grow as a developer</strong>.
              </p>
              <p>
                I enjoy understanding how different parts of an application work together and continuously improving the way I build and approach problems. I&apos;m looking forward to <strong className="font-semibold text-slate-800">contributing to meaningful projects, collaborating with others, and taking on new challenges that help me grow professionally</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Information Card */}
          <div className="relative h-fit w-full overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_25px_80px_-35px_rgba(15,23,42,0.55)]">
            {/* Subtle vertical blue accent strip */}
            <div className="absolute bottom-0 left-0 top-0 w-[4px] rounded-l-xl bg-blue-600" aria-hidden="true" />
            
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Quick Information
            </h3>
            <dl className="mt-5 space-y-4">
              {quickInfo.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800 leading-snug">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe
