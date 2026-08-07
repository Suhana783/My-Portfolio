function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600">Designed & Built with React and Tailwind CSS</p>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            GitHub
          </a>
          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Email
          </a>
          <span className="text-slate-500">{year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
