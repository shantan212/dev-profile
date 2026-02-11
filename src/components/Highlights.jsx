export default function Highlights() {
  const coreFeatures = [
    {
      title: "Dynamic Profile Builder",
      desc: "Form inputs + live preview. Sections for basic info, skills, experience, projects, education, and links.",
    },
    {
      title: "Multiple Resume Templates",
      desc: "Modern, Minimal, Compact templates so hiring managers can scan in their preferred format.",
    },
    {
      title: "Public Shareable Link",
      desc: "Clean URL like devprofile.com/username with SEO meta tags and mobile-optimized layout.",
    },
  ]

  const premiumFeatures = [
    {
      title: "PDF Export",
      desc: "Clean black & white, ATS-friendly spacing. Tech options: jsPDF, react-to-print; server-side later.",
    },
    {
      title: "View Analytics",
      desc: "Profile views, last viewed, country (basic geo), and clicked links.",
    },
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

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Product features</h2>
            <p className="text-muted mt-2">
              Everything you need to build a developer profile, share it as a
              link, and export a clean resume when you need it.
            </p>
          </div>
          <a href="#early-access" className="bg-primary px-5 py-3 rounded-xl text-lg">
            Join Early Access
          </a>
        </div>

        <div className="mt-8 grid gap-8">
          <div>
            <div className="text-sm text-primary font-semibold">CORE</div>
            <h3 className="text-xl font-semibold mt-1">Core features</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {coreFeatures.map(item => (
                <div
                  key={item.title}
                  className="bg-bg rounded-2xl p-5 border border-white/10"
                >
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-muted text-sm mt-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm text-primary font-semibold">PREMIUM</div>
            <h3 className="text-xl font-semibold mt-1">Premium features</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {premiumFeatures.map(item => (
                <div
                  key={item.title}
                  className="bg-bg rounded-2xl p-5 border border-white/10"
                >
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
