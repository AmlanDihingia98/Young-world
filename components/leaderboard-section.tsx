import { fetchLeaderboardData } from '@/utils/google-sheets'
import { Trophy, Medal, Crown } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface LeaderboardSectionProps {
    limit?: number;
    className?: string;
}

export default async function LeaderboardSection({ limit, className = "" }: LeaderboardSectionProps) {
    const allData = await fetchLeaderboardData()
    const leaderboard = limit ? allData.slice(0, limit) : allData

    return (
        <section className={`py-24 px-4 sm:px-6 lg:px-8 relative z-10 ${className}`}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-primary mb-6 leading-none">
                        Global <br /> Leaderboard
                    </h2>
                    <p className="text-xl text-primary/80 font-medium max-w-2xl mx-auto">
                        Top creators bringing the heat. <br />
                        Rankings update daily based on engagement, creativity, and sauce.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                    {/* Header */}
                    <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-primary/60">
                        <div className="col-span-2 md:col-span-1 text-center">Rank</div>
                        <div className="col-span-6 md:col-span-7">Creator</div>
                        <div className="col-span-4 md:col-span-4 text-right">Final Score</div>
                    </div>

                    {/* List */}
                    <div className="divide-y divide-white/5">
                        {leaderboard.map((creator, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors hover:bg-white/5 ${index === 0 ? 'bg-primary/10' : ''
                                    }`}
                            >
                                <div className="col-span-2 md:col-span-1 flex justify-center">
                                    {index === 0 && <Crown className="w-6 h-6 text-primary" />}
                                    {index === 1 && <Medal className="w-6 h-6 text-gray-300" />}
                                    {index === 2 && <Medal className="w-6 h-6 text-amber-700" />}
                                    {index > 2 && (
                                        <span className="text-xl font-black font-display text-primary/40">
                                            {creator.rank}
                                        </span>
                                    )}
                                </div>

                                <div className="col-span-6 md:col-span-7">
                                    <div className="flex items-center gap-4">
                                        {/* Avatar Placeholder */}
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-black ${index === 0 ? 'bg-primary' : 'bg-white/20 text-white'
                                            }`}>
                                            {creator.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg leading-none mb-1">{creator.name}</h3>
                                            <p className="text-xs text-primary/60 font-medium">{creator.handle}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-4 md:col-span-4 text-right">
                                    <span className="text-2xl font-display font-black text-primary">
                                        {creator.score}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
