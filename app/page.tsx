'use client'

import Navbar from '@/components/navbar'
import NewsletterForm from '@/components/newsletter-form'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-black selection:bg-primary selection:text-black">
      <Navbar />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_var(--color-secondary)]" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">Season 1 Upcoming</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter uppercase mb-6 leading-none"
        >
          Heat Check <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x bg-[length:200%_auto]">
            Challenge
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 mb-12 font-medium leading-relaxed"
        >
          Turn $1 into your biggest creator break. Get discovered, get featured, and get rewarded. The world is yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md mx-auto mb-24"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Join the movement</p>
          <NewsletterForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mx-auto border-t border-white/10 pt-16"
        >
          {[
            { val: '$15K', label: 'Prize Pool' },
            { val: 'Global', label: 'Creator Trips' },
            { val: 'iPhone 17', label: 'Giveaways' },
            { val: 'Exclusive', label: 'Brand Deals' }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <h3 className="text-4xl font-display font-black text-white mb-2 group-hover:text-primary transition-colors duration-300">{stat.val}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/40 font-medium">© 2025 Young World Yentertainment.</p>
          <div className="flex gap-8">
            {['Instagram', 'TikTok', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-sm text-white/40 hover:text-primary transition-colors uppercase tracking-wider font-bold">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
