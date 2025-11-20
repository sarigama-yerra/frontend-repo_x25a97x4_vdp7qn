import { motion } from 'framer-motion'
import { Shield, Lock, Activity, LineChart, Sparkles, Cog } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Attack Surface Mapping',
    desc: 'Discover exposures across cloud, code, and devices with continuous scanning.'
  },
  {
    icon: Activity,
    title: 'Anomaly Detection',
    desc: 'ML-powered behavioral analytics to flag lateral movement and risky changes.'
  },
  {
    icon: Lock,
    title: 'Auto Remediation',
    desc: 'Generate least-privilege policies and apply safe patches automatically.'
  },
  {
    icon: LineChart,
    title: 'Risk Scoring',
    desc: 'Prioritized risks with business impact context and compliance mapping.'
  },
  {
    icon: Cog,
    title: 'Agentless Setup',
    desc: 'Connect in minutes via read-only cloud roles. No daemons to install.'
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    desc: 'Ask natural language questions about posture, incidents, and remediation.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">
            Everything you need to protect what matters
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300">
            A single, unified platform with realtime visibility, intelligent detection, and effortless response.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl group-hover:blur-3xl transition-all" />
              <f.icon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-3 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
