import { motion } from 'framer-motion'
import { ShieldCheck, LockKeyhole, Server, Globe } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Compliance-ready', text: 'Built with SOC2 Type II, ISO27001, and GDPR in mind.' },
  { icon: LockKeyhole, title: 'Zero trust by default', text: 'Principle of least privilege across data, apps, and infra.' },
  { icon: Server, title: 'Enterprise grade', text: 'Multi-region, HA architecture with 99.99% uptime SLA.' },
  { icon: Globe, title: 'Privacy-first', text: 'Your data stays in your region with in‑place processing.' },
]

function Trust() {
  return (
    <section id="trust" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-8 md:p-12 overflow-hidden">
          <div className="absolute -z-[1] inset-0 bg-[radial-gradient(40%_40%_at_70%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-white">
                Trust is our north star
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300">
                From encryption to access controls, every layer of SentinelX is designed to keep your data safe and your auditors happy.
              </motion.p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((it, i) => (
                <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-2xl border border-emerald-400/20 bg-slate-900/80 p-5">
                  <it.icon className="w-6 h-6 text-emerald-400" />
                  <div className="mt-2 text-white font-medium">{it.title}</div>
                  <div className="text-sm text-slate-300">{it.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
