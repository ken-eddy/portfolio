"use client";

import emailjs from '@emailjs/browser'
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    HiMail,
    HiLocationMarker,
    HiPhone,
    HiPaperAirplane,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { datalist } from 'framer-motion/client';

const contactInfo = [
    {
        icon: HiMail,
        label: "Email",
        value: "kitavimuuo@gmail.com",
        href: "mailto:kitavimuuo@gmail.com",
    },
    {
        icon: HiPhone,
        label: "Phone",
        value: "+254 710407995",
        href: "tel:+254710407995",
    },
    {
        icon: HiLocationMarker,
        label: "Location",
        value: "Nairobi, Kenya",
        href: "#",
    },
];

const socials = [
    { icon: FaGithub, href: "https://github.com/ken-eddy", label: "GitHub" },
    // { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    // { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

//    const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//         const response = await fetch('api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json',
//             },
//             body: JSON.stringify(formState),
//         })

//         const data = await response.json()
//         if (data.success) {
//             alert("Thanks for reaching out! I'll get back to you soon.");
//             setFormState({
//                 name: '',
//                 email: '',
//                 subject: '',
//                 message: ''
//             })
//         } else {
//             throw new Error(data.error)
//         }
//     } catch (error) {
//         alert('failed to send email')
//         console.log(error)
//     }
//    }

    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
    // formData.append("access_key", "c25a07c0-617f-435f-b682-f9159b282213");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key:process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      })
    });

    const data = await response.json();

    if (data.success) {
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
            })
        console.log(data)
        } else {
      console.log("Error", data);
      throw new Error(data.error)
    }
    } catch(error) {
        alert('failed to send email')
        console.log(error)
    }
  };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Let&apos;s Work{" "}
                        <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-muted mt-4 max-w-lg mx-auto text-lg">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted">{item.label}</p>
                                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="pt-6">
                            <p className="text-sm text-muted mb-4">Follow me on</p>
                            <div className="flex gap-3">
                                {socials.map((social) => (
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
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 glass-card rounded-2xl p-8 space-y-6"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none text-foreground transition-all placeholder:text-muted/50"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none text-foreground transition-all placeholder:text-muted/50"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                required
                                value={formState.subject}
                                onChange={(e) =>
                                    setFormState({ ...formState, subject: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none text-foreground transition-all placeholder:text-muted/50"
                                placeholder="Project inquiry"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted mb-2">
                                Message
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formState.message}
                                onChange={(e) =>
                                    setFormState({ ...formState, message: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none text-foreground transition-all resize-none placeholder:text-muted/50"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3.5 px-6 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            <HiPaperAirplane className="rotate-90" />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
