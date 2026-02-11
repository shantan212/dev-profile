import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProfileCard from "./components/ProfileCard"
import ResumePreview from "./components/ResumePreview"
import Highlights from "./components/Highlights"
import CTA from "./components/CTA"

export default function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 mt-16">
        <ProfileCard />
        <ResumePreview />
      </div>
      <Highlights />
      <CTA />
    </div>
  )
}
