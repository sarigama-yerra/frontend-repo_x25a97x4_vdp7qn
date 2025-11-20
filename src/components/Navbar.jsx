import { useState } from 'react'
import { ShieldCheck, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#trust', label: 'Trust' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-slate-900/70 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 blur-lg rounded-full bg-emerald-400/30 group-hover:bg-emerald-400/40 transition-colors" />
                <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">SentinelX</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-slate-300 hover:text-white text-sm">Pricing</a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 px-4 py-2 rounded-lg transition-colors">
                Get a demo
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-emerald-400/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {links.map(l => (
                  <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 px-4 py-2 rounded-lg transition-colors">
                  Get a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
