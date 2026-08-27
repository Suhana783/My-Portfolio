const quickInfo = [
  { label: 'Location', value: 'India' },
  { label: 'Focus', value: 'Full Stack / Backend Development' },
  { label: 'Availability', value: 'Open to Opportunities' },
]

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
            I&apos;m a <strong className="font-semibold text-slate-700">MERN Stack Developer</strong> passionate about building modern, practical, and user-focused web applications. I enjoy working across <strong className="font-semibold text-slate-700">JavaScript, React.js, Node.js, Express.js, and MongoDB</strong>, turning ideas into clean and reliable solutions. With hands-on experience building real-world projects, I&apos;m always eager to <strong className="font-semibold text-slate-700">learn, explore new technologies, solve challenging problems, and grow as a developer</strong>.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            I enjoy understanding how different parts of an application work together and continuously improving the way I build and approach problems. I&apos;m looking forward to <strong className="font-semibold text-slate-700">contributing to meaningful projects, collaborating with others, and taking on new challenges that help me grow professionally</strong>.
          </p>
        </div>

        <aside className="h-fit self-start rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick Information</h3>
          <dl className="mt-4 space-y-4">
            {quickInfo.map((item) => (
              <div key={item.label} className="border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default About
