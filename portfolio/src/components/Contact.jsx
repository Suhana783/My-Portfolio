import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const formRef = useRef(null)

  const [status, setStatus] = useState({
    type: '',
    message: '',
  })

  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus({
      type: '',
      message: '',
    })

   
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing:', {
        serviceId,
        templateId,
        publicKey: publicKey ? 'Loaded' : 'Missing',
      })

      setStatus({
        type: 'error',
        message: 'Email service is not configured correctly.',
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
        message: 'Please fill in all fields.',
      })

      return
    }

    setIsSending(true)

    try {
      const templateParams = {
        name: name,
        email: email,
        message: message,
        reply_to: email,
      }

      console.log('Sending EmailJS request...')

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('EmailJS response:', response)

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!',
        })

        form.reset()
      }
    } catch (error) {
      console.error('EmailJS error:', error)

      setStatus({
        type: 'error',
        message:
          'Message could not be sent. Please try again or use the email link above.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-4 sm:py-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m currently open to opportunities and would be happy to
            discuss projects, collaborations, or developer roles.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <p className="text-sm font-medium text-slate-500">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/suhana123"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-blue-700"
              >
                https://www.linkedin.com/in/suhana123
              </a>
            </li>

            <li>
              <p className="text-sm font-medium text-slate-500">
                Email
              </p>

              <a
                href="mailto:suhanachauhan133@gmail.com"
                className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-blue-700"
              >
                suhanachauhan133@gmail.com
              </a>
            </li>

            <li>
              <p className="text-sm font-medium text-slate-500">
                GitHub
              </p>

              <a
                href="https://github.com/Suhana783"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-blue-700"
              >
                https://github.com/Suhana783
              </a>
            </li>

            <li>
              <p className="text-sm font-medium text-slate-500">
                Phone
              </p>

              <a
                href="tel:+918287345690"
                className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-blue-700"
              >
                +91 8287345690
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-35px_rgba(15,23,42,0.55)] sm:p-7"
        >

          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="text-xs font-bold uppercase tracking-wide text-slate-600"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          {/* EMAIL */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-xs font-bold uppercase tracking-wide text-slate-600"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-1.5 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-wide text-slate-600"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about your project or role"
              required
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
            />
          </div>

          {/* STATUS MESSAGE */}
          {status.message && (
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
          )}

          {/* BUTTON */}
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