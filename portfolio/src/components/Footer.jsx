function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600">© Suhana Chauhan. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          <a
            href="https://github.com/Suhana783"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suhana123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suhanachauhan133@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
