"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { User } from 'lucide-react'

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const socials = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    // { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    // { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#home" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-xs">
                                <User />
                            </div>
                            <span className="font-semibold text-lg">
                                Kennedy kitavi<span className="text-primary">.</span>
                            </span>
                        </a>
                        <p className="text-sm text-muted">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2.5 rounded-lg border border-border/50 text-muted hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

             
            </div>
        </footer>
    );
}
