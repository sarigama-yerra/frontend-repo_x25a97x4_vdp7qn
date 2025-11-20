import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For small teams getting started',
    features: ['Up to 5 seats', 'Cloud posture scan', 'Weekly reports', 'Email support'],
    cta: 'Start free',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$99/mo',
    desc: 'Advanced protection for growing teams',
    features: ['Unlimited seats', 'Realtime alerts', 'Auto remediation', 'Slack/Jira integrations'],
    cta: 'Start 14‑day trial',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Security at company scale',
    features: ['SSO & SAML', 'Dedicated SOC', 'Custom SLAs', 'On‑prem options'],
    cta: 'Talk to sales',
    highlight: false
  }
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">
            Simple, transparent pricing
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300">
            Choose a plan that fits your team. Upgrade or cancel anytime.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border ${p.highlight ? 'border-emerald-400/40 bg-slate-900' : 'border-emerald-400/20 bg-slate-900/60'} p-6`}
            >
              {p.highlight && (
                <div className="absolute inset-x-4 -top-3 rounded-full bg-emerald-400/20 text-emerald-200 text-xs px-2 py-1 text-center border border-emerald-400/30">
                  Most popular
                </div>
              )}
              <h3 className="text-white font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-emerald-300">{p.price}</div>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {p.features.map(f => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors ${p.highlight ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300' : 'border border-emerald-400/30 text-white hover:bg-white/5'}`}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
