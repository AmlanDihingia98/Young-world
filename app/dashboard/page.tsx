import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, MapPin, Globe, Trophy } from 'lucide-react'
import Image from 'next/image'

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[var(--primary)] selection:text-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Navbar */}
            <nav className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/dashboard" className="flex items-center gap-2 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Young World Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </Link>
                        <div className="flex items-center gap-4">
                            <form action="/auth/signout" method="post">
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors">
                                    <LogOut className="w-4 h-4" />
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm sticky top-24">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-1 mb-6">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <User className="w-12 h-12 text-white/50" />
                                    </div>
                                </div>
                                <h1 className="text-3xl font-display font-black uppercase tracking-tighter mb-2">
                                    {profile?.full_name || 'Creator'}
                                </h1>
                                <p className="text-white/40 font-medium text-sm uppercase tracking-widest mb-8">
                                    {user.email}
                                </p>

                                <div className="w-full space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <MapPin className="w-5 h-5 text-[var(--primary)]" />
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Location</p>
                                            <p className="font-bold">{profile?.country || 'Unknown'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <Globe className="w-5 h-5 text-[var(--secondary)]" />
                                        <div className="text-left overflow-hidden">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Social</p>
                                            <a href={profile?.social_url} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[var(--primary)] transition-colors truncate block">
                                                {profile?.social_url ? new URL(profile.social_url).hostname + new URL(profile.social_url).pathname : 'No Link'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hype / Coming Soon Section */}
                        <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 border border-white/10 rounded-3xl p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-center items-center text-center">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 opacity-50 animate-pulse" />

                            <div className="relative z-10 space-y-6">
                                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-4 animate-bounce">
                                    Season 1 Loading...
                                </div>
                                <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                    The Heat<br />Is Coming
                                </h2>
                                <p className="text-xl text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
                                    $15,000 Prize Pool. Global Exposure. <br />
                                    Prepare your best clips. The world is watching.
                                </p>
                                <div className="pt-8">
                                    <button disabled className="bg-white/10 text-white/50 cursor-not-allowed border border-white/10 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                                        Submissions Opening Soon
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hype Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-[var(--primary)]/50 transition-colors">
                                <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-4xl font-display font-black text-[var(--primary)] mb-2">$15K</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Prize Pool</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-[var(--secondary)]/50 transition-colors">
                                <div className="absolute inset-0 bg-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-4xl font-display font-black text-[var(--secondary)] mb-2">Global</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Competition</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden group hover:border-white/50 transition-colors">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-4xl font-display font-black text-white mb-2">Soon</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40">Launch Date</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
