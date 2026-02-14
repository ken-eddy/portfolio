"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiHeart } from "react-icons/hi";

const highlights = [
    {
        icon: HiCode,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that teams love to work with.",
    },
    {
        icon: HiLightningBolt,
        title: "Fast Delivery",
        description: "Delivering high-quality solutions on time, every time.",
    },
    {
        icon: HiHeart,
        title: "User-Centric",
        description: "Designing experiences that delight users and drive engagement.",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
                        About Me
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Building the{" "}
                        <span className="gradient-text">future of the web</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted leading-relaxed">
                            I&apos;m a passionate Full Stack Developer with a keen eye for design and a
                            love for building products that make a difference. With experience across
                            the entire development stack, I bring ideas to life from concept to
                            deployment.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            My journey in software development has equipped me with a versatile skill
                            set spanning frontend frameworks, backend systems, databases, and cloud
                            infrastructure. I thrive in collaborative environments and enjoy
                            tackling complex challenges.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                            contributing to open-source projects, or sharing knowledge with the
                            developer community.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            {[
                                { number: "3+", label: "Years Experience" },
                                { number: "15+", label: "Projects Done" },
                                { number: "100%", label: "Dedication" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                                    <div className="text-sm text-muted mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group cursor-default"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
