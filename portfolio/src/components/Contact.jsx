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

        <form ref={formRef} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7" onSubmit={handleSubmit}>
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

          {status.message ? (
            <p
              className={`mt-4 rounded-md border px-3 py-2 text-sm ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-rose-200 bg-rose-50 text-rose-800'
              }`}
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
