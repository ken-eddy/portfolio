"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    github: string;
    live: string;
    featured: boolean;
    category: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce platform with real-time inventory management, secure payments via Stripe, and an admin dashboard for analytics and order tracking.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
        category: "Full Stack",
    },
    {
        title: "AI Chat Application",
        description:
            "An intelligent chat application powered by OpenAI's GPT API with conversation history, streaming responses, and a sleek real-time interface.",
        tags: ["React", "Node.js", "OpenAI API", "Socket.IO", "MongoDB"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
        category: "AI/ML",
    },
    {
        title: "Task Management Dashboard",
        description:
            "A collaborative project management tool with drag-and-drop kanban boards, real-time updates, team assignments, and progress analytics.",
        tags: ["React", "Redux", "Express", "MongoDB", "Tailwind CSS"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
        category: "Full Stack",
    },
    {
        title: "Real-Time Weather App",
        description:
            "A beautiful weather application featuring location-based forecasts, interactive weather maps, severe weather alerts, and a 7-day forecast view.",
        tags: ["Next.js", "Weather API", "Mapbox", "Tailwind CSS"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: false,
        category: "Frontend",
    },
    {
        title: "Portfolio CMS",
        description:
            "A headless CMS built for developers to manage their portfolio content with markdown support, media uploads, and automatic SEO optimization.",
        tags: ["Node.js", "Express", "React", "AWS S3", "PostgreSQL"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: false,
        category: "Full Stack",
    },
    {
        title: "Fitness Tracking App",
        description:
            "A cross-platform fitness tracker with workout logging, progress charts, social challenges, and personalized training recommendations.",
        tags: ["React Native", "Firebase", "Chart.js", "Node.js"],
        image: "",
        github: "https://github.com",
        live: "https://example.com",
        featured: false,
        category: "Mobile",
    },
];

const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Mobile"];

// Generate gradient placeholders for project thumbnails
function ProjectPlaceholder({ title, index }: { title: string; index: number }) {
    const gradients = [
        "from-violet-600/30 via-indigo-600/20 to-cyan-600/30",
        "from-rose-600/30 via-pink-600/20 to-purple-600/30",
        "from-emerald-600/30 via-teal-600/20 to-cyan-600/30",
        "from-amber-600/30 via-orange-600/20 to-red-600/30",
        "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
        "from-cyan-600/30 via-teal-600/20 to-emerald-600/30",
    ];

    return (
        <div
            className={`w-full aspect-video rounded-t-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}
        >
            {/* Code-like decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="p-6 font-mono text-xs text-white/60 overflow-hidden">
                    <p>{"const "}<span className="text-primary-light">app</span>{" = {"}</p>
                    <p className="ml-4">{"name: '"}{title}{"',"}</p>
                    <p className="ml-4">{"status: 'production',"}</p>
                    <p className="ml-4">{"version: '1.0.0'"}</p>
                    <p>{"}"}</p>
                    <p className="mt-2">{"export default app"}</p>
                </div>
            </div>
            <div className="text-5xl font-bold text-white/10">{title.charAt(0)}</div>
        </div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
                        Portfolio
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                        Featured{" "}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted mt-4 max-w-lg text-lg">
                        A selection of projects I&apos;ve built — from full-stack web apps to AI-powered tools.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${activeFilter === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/40"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Project Image / Placeholder */}
                            <div className="relative overflow-hidden">
                                <ProjectPlaceholder title={project.title} index={i} />
                                {project.featured && (
                                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full backdrop-blur-sm">
                                        Featured
                                    </div>
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-surface border border-border text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-surface border border-border text-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-light transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-sm mt-2 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-mono bg-surface-light rounded-md text-muted border border-border/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
