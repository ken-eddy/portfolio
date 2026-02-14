"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern noise-overlay"
        >
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="flex flex-col items-center text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-surface/50 backdrop-blur-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm text-muted">Available for opportunities</span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight"
                    >
                        <span className="text-foreground">Hi, I&apos;m </span>
                        <span className="gradient-text">Ken</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-xl sm:text-2xl lg:text-3xl font-light text-muted"
                    >
                        Full Stack Developer
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 max-w-2xl text-base sm:text-lg text-muted/80 leading-relaxed"
                    >
                        I craft modern, scalable web applications with clean code and beautiful interfaces.
                        Passionate about turning ideas into impactful digital experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            View My Work
                            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-3.5 border border-border rounded-xl font-medium text-foreground hover:bg-surface-light transition-all hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <HiOutlineDownload />
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 flex items-center gap-5"
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                            { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                            { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-3 rounded-xl border border-border/50 text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all hover:-translate-y-1"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-muted/40 flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-2.5 rounded-full bg-muted/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
