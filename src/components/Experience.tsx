"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Research Assistant",
        company: "University of Michigan - Dearborn",
        period: "June 2025 – Present",
        type: "work",
    },
    {
        title: "Grant Database Manager",
        company: "Agape National Academy of Music",
        period: "June 2025 – Present",
        type: "work",
    },
    {
        title: "MS Data Science (3.9 GPA)",
        company: "University of Michigan - Dearborn",
        period: "April 2025",
        type: "education",
    },
    {
        title: "Teaching Assistant",
        company: "Sri Ramachandra Institute",
        period: "Feb – June 2023",
        type: "work",
    },
    {
        title: "ML Intern",
        company: "Sri Ramachandra Institute",
        period: "Oct – Dec 2021",
        type: "work",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Experience <span className="font-medium">Timeline</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.title}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-start gap-8 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-2 h-2 rounded-full bg-white/50 md:-translate-x-1/2 mt-2" />

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                <div className="glass-card p-4">
                                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.type === "education" ? (
                                            <GraduationCap size={14} className="text-zinc-500" />
                                        ) : (
                                            <Briefcase size={14} className="text-zinc-500" />
                                        )}
                                        <span className="text-xs text-zinc-500">{exp.period}</span>
                                    </div>
                                    <h3 className="font-medium text-sm mb-1">{exp.title}</h3>
                                    <p className="text-xs text-zinc-500">{exp.company}</p>
                                </div>
                            </div>

                            {/* Spacer */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
