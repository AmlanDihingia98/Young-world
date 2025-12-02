export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-primary/60 font-medium">© 2025 Young World Yentertainment.</p>
                <div className="flex gap-8">
                    {['Instagram', 'TikTok', 'Twitter'].map((social) => (
                        <a key={social} href="#" className="text-sm text-primary/60 hover:text-white transition-colors uppercase tracking-wider font-bold">
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
