export default function ProfileCard() {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold">Aarav Mehta</h2>
      <p className="text-muted">Senior Full-Stack Developer</p>
      <div className="mt-2 text-sm text-muted">
        <span>Bengaluru, India</span>
        <span className="mx-2">•</span>
        <span>7+ yrs</span>
        <span className="mx-2">•</span>
        <span>Open to remote</span>
      </div>

      <div className="mt-5">
        <h3 className="font-medium">About</h3>
        <p className="text-muted text-sm mt-2">
          I build high-scale backend systems and polished frontends, with a focus
          on performance, clean APIs, and maintainable architecture.
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Java", "Spring Boot", "React", "AWS"].map(skill => (
            <span key={skill} className="bg-bg px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-medium">Contact</h3>
        <div className="mt-2 text-sm text-muted space-y-1">
          <div>
            <span className="text-white/80">Email:</span> shantan@example.com
          </div>
          <div>
            <span className="text-white/80">GitHub:</span> github.com/shantan
          </div>
          <div>
            <span className="text-white/80">LinkedIn:</span> linkedin.com/in/shantan
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-medium">Projects</h3>
        <ul className="text-muted text-sm mt-2 space-y-1">
          <li>• Developer Profile SaaS</li>
          <li>• Job Tracker Platform</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="font-medium">Highlights</h3>
        <ul className="text-muted text-sm mt-2 space-y-1">
          <li>• Designed microservices + event-driven workflows</li>
          <li>• Reduced API latency by 40% via caching and query tuning</li>
          <li>• Led code reviews and mentoring for a 6-person team</li>
        </ul>
      </div>
    </div>
  )
}
