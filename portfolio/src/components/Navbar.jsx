import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Contact Me', href: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl supports-backdrop-filter:bg-white/70"
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="text-base font-extrabold tracking-tight text-slate-900 transition-colors hover:text-blue-700 focus-visible:outline-none sm:text-lg"
          onClick={closeMenu}
        >
          Suhana Chauhan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-100/70 text-blue-700 border border-blue-200/50 font-semibold shadow-sm'
                    : 'text-slate-600 hover:bg-blue-50/90 hover:text-blue-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `ml-2 rounded-full border px-4 py-1.5 text-sm font-semibold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                isActive
                  ? 'border-blue-800 bg-blue-50 text-blue-700'
                  : 'border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800'
              }`
            }
          >
            Resume
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-blue-100/70 text-blue-700 border border-blue-200/50 font-semibold'
                      : 'text-slate-700 hover:bg-blue-50/90 hover:text-blue-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/resume"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mt-3 rounded-lg border px-4 py-2 text-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-blue-800 bg-blue-50 text-blue-700'
                    : 'border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800'
                }`
              }
            >
              Resume
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
