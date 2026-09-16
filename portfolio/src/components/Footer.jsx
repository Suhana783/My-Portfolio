function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80 py-3 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-semibold text-slate-900">© Suhana Chauhan. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-blue-700">
          <a
            href="https://github.com/Suhana783"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suhana123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suhanachauhan133@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
