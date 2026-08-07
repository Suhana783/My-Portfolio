const contactLinks = [
  { label: 'Email', value: 'YOUR_EMAIL@example.com', href: 'mailto:YOUR_EMAIL@example.com' },
  { label: 'LinkedIn', value: 'YOUR_LINKEDIN_URL', href: 'YOUR_LINKEDIN_URL' },
  { label: 'GitHub', value: 'YOUR_GITHUB_URL', href: 'YOUR_GITHUB_URL' },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            I&apos;m currently open to opportunities and would be happy to discuss projects,
            collaborations, or developer roles.
          </p>

          <ul className="mt-8 space-y-4">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <a
                  href={item.href}
                  target={item.label === 'Email' ? undefined : '_blank'}
                  rel={item.label === 'Email' ? undefined : 'noreferrer'}
                  className="mt-1 inline-block text-sm font-semibold text-slate-800 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or role"
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
