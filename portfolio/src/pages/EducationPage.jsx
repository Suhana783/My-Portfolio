function EducationPage() {
  return (
    <div className="flex flex-1 flex-col justify-center bg-transparent pt-20 pb-8">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Left-aligned) */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Education
          </h2>
        </div>

        {/* Education Card (Stretched Rectangle) */}
        <article className="relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/80 pl-7 pr-6 py-8 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-35px_rgba(15,23,42,0.55)] sm:pl-9 sm:pr-8 sm:py-10">
          {/* Special Left-Side Navy Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-slate-800 rounded-l-xl" aria-hidden="true" />
          
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Bachelor of Computer Applications (B.C.A.) Hons. with Research
            </h3>
            <p className="mt-2 text-base font-semibold text-blue-700">
              Eternal University
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              2024 – 2027 (Expected)
            </p>
          </div>

          {/* Subtle Divider */}
          <hr className="my-6 border-slate-100" />

          {/* Coursework & Focus Description */}
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Currently in my 3rd Year, with a strong focus on MERN Stack development using JavaScript, web development, database management, and building practical software projects.
          </p>
        </article>

      </div>
    </div>
  )
}

export default EducationPage
