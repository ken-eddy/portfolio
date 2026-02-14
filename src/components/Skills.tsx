"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiGit,
    SiTailwindcss,
    SiFirebase,
    SiFigma,
    SiAmazonwebservices,
    SiRedux,
    SiPrisma,
    SiLaravel,
    SiGo,
    SiElixir,
    SiPhp,
    SiDjango,
    SiMysql,
} from "react-icons/si";
import { HiShieldCheck } from "react-icons/hi";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, colorDark: "#ffffff", colorLight: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Django", icon: SiDjango, color: "#092E20", colorLight: "#092E20" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "Golang", icon: SiGo, color: "#00ADD8" },
            { name: "Elixir", icon: SiElixir, color: "#4B275F" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Prisma", icon: SiPrisma, colorDark: "#ffffff", colorLight: "#2D3748" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
    {
        title: "Security",
        skills: [
            { name: "Cyber Security", icon: HiShieldCheck, color: "#10B981" },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { theme } = useTheme();

    const getColor = (skill: { color?: string; colorDark?: string; colorLight?: string }) => {
        if (skill.colorDark && skill.colorLight) {
            return theme === "dark" ? skill.colorDark : skill.colorLight;
        }
        return skill.color || "#818cf8";
    };

    return (
        <section id="skills" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
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
                        Tech Stack
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Skills &{" "}
                        <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-muted mt-4 max-w-lg text-lg">
                        The tools and technologies I use to bring products to life.
                    </p>
                </motion.div>

                {/* Skill Categories */}
                <div className="space-y-12">
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + ci * 0.15 }}
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, si) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.2 + ci * 0.1 + si * 0.05 }}
                                        className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/30 transition-all group cursor-default hover:-translate-y-1"
                                    >
                                        <skill.icon
                                            size={32}
                                            className="transition-colors"
                                            style={{ color: getColor(skill) }}
                                        />
                                        <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
