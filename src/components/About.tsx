"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Award } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-light mb-6" style={{ fontFamily: "var(--font-display)" }}>
                            About <span className="font-medium">Me</span>
                        </h2>

                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            I'm Aswin Gunasekaran, a Data Science graduate from the University of Michigan - Dearborn
                            with a passion for building intelligent systems that solve real-world problems.
                        </p>

                        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                            My expertise spans machine learning, deep learning, cloud computing, and data analytics.
                            I specialize in developing AI-powered solutions from computer vision to predictive analytics.
                        </p>

                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                            <div className="flex items-center gap-1">
                                <MapPin size={12} />
                                <span>Dearborn, MI</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Mail size={12} />
                                <span>aswing@umich.edu</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="stat-card"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Award size={16} className="text-zinc-500" />
                            <span className="text-sm font-medium">Certifications</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                                <span className="text-lg">☁️</span>
                                <div>
                                    <p className="text-sm font-medium">AWS Academy Graduate</p>
                                    <p className="text-xs text-zinc-500">Machine Learning Foundations</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                                <span className="text-lg">☁️</span>
                                <div>
                                    <p className="text-sm font-medium">Microsoft Azure</p>
                                    <p className="text-xs text-zinc-500">Cloud Services</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
                            <div className="text-center">
                                <p className="text-xl font-light">3.9</p>
                                <p className="text-xs text-zinc-500">GPA</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-light">6+</p>
                                <p className="text-xs text-zinc-500">Projects</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl font-light">2</p>
                                <p className="text-xs text-zinc-500">Certs</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
