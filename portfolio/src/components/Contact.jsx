import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
console.log('EmailJS config:', {
  serviceId,
  templateId,
  publicKey: publicKey ? 'Loaded' : 'Missing',
})
if (publicKey) {
  emailjs.init(publicKey)
}

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/suhana123',
    href: 'https://www.linkedin.com/in/suhana123',
  },
  {
    label: 'Email',
    value: 'suhanachauhan133@gmail.com',
    href: 'mailto:suhanachauhan133@gmail.com',
  },
  { label: 'GitHub', value: 'https://github.com/Suhana783', href: 'https://github.com/Suhana783' },
  { label: 'Phone', value: '+91 8287345690', href: 'tel:+918287345690' },
]

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email form is missing configuration. Add the EmailJS environment variables first.',
      })
      return
    }

    if (!formRef.current) {
      return
    }

    const form = formRef.current
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields (name, email, and message).',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    const templateParams = {
      name,
      email,
      message,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      form.reset()
      setStatus({ type: 'success', message: 'Message sent successfully!' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: 'error',
        message: 'Message could not be sent. Please try again or use the email link above.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-4 sm:py-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Contact</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m currently open to opportunities and would be happy to discuss projects,
            collaborations, or developer roles.
          </p>

          <ul className="mt-8 space-y-4">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <a
                  href={item.href}
                  target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                  rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noopener noreferrer'}
                  className="mt-1 inline-block text-sm font-semibold text-slate-800 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form 
          ref={formRef} 
          className="relative rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-35px_rgba(15,23,42,0.55)] sm:p-7" 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="text-xs font-bold tracking-wide uppercase text-slate-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 shadow-xs outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="text-xs font-bold tracking-wide uppercase text-slate-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 shadow-xs outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-xs font-bold tracking-wide uppercase text-slate-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about your project or role"
              required
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 shadow-xs outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          {status.message ? (
            <p
              className={`mt-3.5 rounded-xl border px-3.5 py-2 text-sm font-medium ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-rose-200 bg-rose-50 text-rose-800'
              }`}
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}

          <div className="mt-5">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-700 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:shadow-none"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
