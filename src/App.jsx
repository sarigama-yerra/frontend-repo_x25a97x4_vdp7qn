import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Trust />
        <footer className="py-12">
          <div className="mx-auto max-w-7xl px-6 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} SentinelX — All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
