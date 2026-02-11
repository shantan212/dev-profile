export default function Roadmap() {
  const phase1 = [
    {
      title: "Dynamic Profile Builder",
      desc: "Form inputs + live preview. Sections for basic info, skills, experience, projects, education, and links.",
    },
    {
      title: "Multiple Resume Templates",
      desc: "Modern, Minimal, Compact templates so hiring managers can scan in their preferred format.",
    },
    {
      title: "PDF Export (Paid)",
      desc: "Clean black & white, ATS-friendly spacing. Tech options: jsPDF, react-to-print; server-side later.",
    },
    {
      title: "Public Shareable Link",
      desc: "Clean URL like devprofile.com/username with SEO meta tags and mobile-optimized layout.",
    },
    {
      title: "View Analytics (Premium)",
      desc: "Profile views, last viewed, country (basic geo), and clicked links.",
    },
  ]

  const phase2 = [
    {
      title: "Resume Versioning",
      desc: "Multiple versions (backend, frontend, freelance) and quick switching per job.",
    },
    {
      title: "Job-Specific Resume Generator",
      desc: "Paste a job description to highlight matching skills, suggest missing keywords, and adjust the resume.",
    },
    {
      title: "GitHub Auto Import",
      desc: "Import repos, stars, and top languages via GitHub username.",
    },
    {
      title: "Visual Credibility",
      desc: "Skill bars/radar graph, experience timeline, impact metrics, and tech-stack breakdown.",
    },
    {
      title: "AI Summary Generator",
      desc: "Generate a strong professional summary from role + experience.",
    },
  ]

  const direction = [
    {
      title: "Start Narrow (Revenue First)",
      desc: "Profile + Resume Export for job-switching developers.",
    },
    {
      title: "Expand Into Ecosystem",
      desc: "Job tracker, resume scoring, interview checklist, and match score later.",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">What’s coming next</h2>
            <p className="text-muted mt-2">
              A product roadmap focused on job-switching developers — build fast,
              ship clean, and monetize premium features.
            </p>
          </div>
          <a href="#early-access" className="bg-primary px-5 py-3 rounded-xl text-lg">
            Join Early Access
          </a>
        </div>

        <div className="mt-8 grid gap-8">
          <div>
            <div className="text-sm text-primary font-semibold">PHASE 1</div>
            <h3 className="text-xl font-semibold mt-1">Core product features</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {phase1.map(item => (
                <div key={item.title} className="bg-bg rounded-2xl p-5 border border-white/10">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-muted text-sm mt-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-primary font-semibold">PHASE 2</div>
            <h3 className="text-xl font-semibold mt-1">Differentiation features</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {phase2.map(item => (
                <div key={item.title} className="bg-bg rounded-2xl p-5 border border-white/10">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-muted text-sm mt-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-primary font-semibold">STRATEGY</div>
            <h3 className="text-xl font-semibold mt-1">Direction</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {direction.map(item => (
                <div key={item.title} className="bg-bg rounded-2xl p-5 border border-white/10">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-muted text-sm mt-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
