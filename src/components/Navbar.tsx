"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";
import { User } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
                                <User />
                            </div>
                            <span className="font-semibold text-lg tracking-tight">
                                <span className="text-foreground">Kennedy Kitavi</span>
                                <span className="text-primary">.</span>
                            </span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeSection === link.href.slice(1)
                                        ? "text-primary-light"
                                        : "text-muted hover:text-foreground"
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Theme Toggle + CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2.5 rounded-lg border border-border/50 text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                            >
                                {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
                            </button>
                            <a
                                href="#contact"
                                className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                            >
                                Let&apos;s Talk
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2 rounded-lg border border-border/50 text-muted hover:text-primary transition-all"
                            >
                                {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
                            </button>
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="p-2 text-foreground"
                            >
                                {isMobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 p-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                href="#contact"
                                onClick={() => setIsMobileOpen(false)}
                                className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium"
                            >
                                Let&apos;s Talk
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
