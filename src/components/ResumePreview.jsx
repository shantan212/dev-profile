export default function ResumePreview() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-semibold">Resume Preview</h2>

      <div className="mt-4 bg-white text-black rounded-xl p-4 text-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-base">Aarav Mehta</h3>
            <p>Senior Full-Stack Developer</p>
            <p className="text-black/70">Bengaluru, India</p>
          </div>
          <div className="text-right text-black/70">
            <div>shantan@example.com</div>
            <div>github.com/shantan</div>
          </div>
        </div>

        <hr className="my-3" />

        <div>
          <div className="font-semibold">Summary</div>
          <p className="text-black/80 mt-1">
            Full-stack engineer building scalable APIs and clean UI experiences.
            Strong in Java, Spring Boot, React, and AWS.
          </p>
        </div>

        <div className="mt-3">
          <div className="font-semibold">Skills</div>
          <p className="text-black/80 mt-1">Java • React • Spring Boot • AWS</p>
        </div>

        <div className="mt-3">
          <div className="font-semibold">Experience</div>
          <div className="mt-1">
            <div className="font-medium">Senior Full-Stack Developer</div>
            <div className="text-black/70">FinTech Co • 2021 – Present</div>
            <ul className="list-disc pl-5 text-black/80 mt-1 space-y-1">
              <li>Built microservices and improved reliability with observability.</li>
              <li>Optimized APIs and reduced response times for critical flows.</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        disabled
        className="mt-6 w-full bg-primary/40 py-3 rounded-xl cursor-not-allowed"
      >
        Export PDF (Coming Soon)
      </button>
    </div>
  )
}
