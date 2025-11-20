import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="absolute inset-0" aria-hidden>
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-xs text-emerald-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Realtime Threat Monitoring
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white"
              >
                Secure your cloud with AI-driven protection
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-4 text-lg text-slate-300 max-w-xl"
              >
                SentinelX continuously scans your infrastructure, detects anomalies, and autopatches vulnerabilities before they become incidents.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-300 transition-colors">
                  Start free trial
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-emerald-400/30 px-5 py-3 font-medium text-white hover:bg-white/5 transition-colors">
                  Explore features
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 flex items-center gap-6"
              >
                <div className="text-emerald-300 text-sm">SOC2 • ISO27001 • GDPR</div>
                <div className="h-4 w-px bg-emerald-400/20" />
                <div className="text-slate-400 text-sm">Free for teams up to 5</div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 h-[480px] md:h-[540px] lg:h-[620px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
