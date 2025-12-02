'use client'

import Navbar from '@/components/navbar'
import GrainOverlay from '@/components/grain-overlay'
import HeroSection from '@/components/hero-section'
import NewsletterSection from '@/components/newsletter-section'
import StatsSection from '@/components/stats-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-black selection:bg-primary selection:text-black">
      <Navbar />
      <GrainOverlay />
      <HeroSection />
      <StatsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
