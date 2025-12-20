import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import GrainOverlay from '@/components/grain-overlay'
import LeaderboardSection from '@/components/leaderboard-section'

export const dynamic = 'force-dynamic'

export default function LeaderboardPage() {
    return (
        <main className="min-h-screen flex flex-col relative bg-black selection:bg-primary selection:text-black">
            <Navbar />
            <GrainOverlay />

            <div className="pt-20">
                <LeaderboardSection />
            </div>

            <Footer />
        </main>
    )
}
