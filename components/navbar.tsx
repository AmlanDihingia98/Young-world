'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs))
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                    scrolled ? "bg-black/80 backdrop-blur-xl border-white/10 py-3" : "bg-transparent py-5"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Young World Logo"
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Leaderboard', href: '#' },
                                { name: 'Heat Check Challenge', href: '/challenge' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/login"
                                className="text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-wide"
                            >
                                Login
                            </Link>
                            <Link
                                href="/login?mode=signup"
                                className="bg-[var(--color-button)] text-white hover:scale-105 transition-transform duration-300 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(253,7,4,0.2)]"
                            >
                                Sign Up
                            </Link>
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Leaderboard', href: '#' },
                                { name: 'Heat Check Challenge', href: '/challenge' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-display font-black uppercase text-primary hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 w-full px-8 mt-8">
                                <Link
                                    href="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full border border-primary/20 text-primary py-3 rounded-full text-lg font-bold uppercase tracking-wide hover:border-white hover:text-white transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/login?mode=signup"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full bg-[var(--color-button)] text-white py-3 rounded-full text-lg font-bold uppercase tracking-wide hover:scale-105 transition-transform"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
