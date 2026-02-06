"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function Insights() {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Meet <span className="font-medium">Marvellous Insights</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Save your team's precious time. Config replaces the lengthy process of manual BOM.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Main Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="stat-card"
                    >
                        {/* Big Stat */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-light">98.2%</span>
                                    <span className="text-xs text-zinc-500">•</span>
                                </div>
                                <p className="text-sm text-zinc-500 mt-1">Model Accuracy : Achieved</p>
                            </div>
                            {/* Mini Line Chart */}
                            <div className="flex items-end gap-1 h-12">
                                {[30, 45, 35, 55, 50, 65, 60, 75].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-gradient-to-t from-zinc-700 to-zinc-500 rounded-full"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tab Toggles */}
                        <div className="tab-toggle mb-6">
                            <button className="active">Data Science</button>
                            <button>Machine Learning</button>
                            <button>Cloud & MLOps</button>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-medium text-sm mb-1">Deep Learning</h4>
                                <p className="text-xs text-zinc-500">
                                    TensorFlow, PyTorch, CNN, RNN for computer vision and NLP applications.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-medium text-sm mb-1">Data Analytics</h4>
                                <p className="text-xs text-zinc-500">
                                    SQL, Power BI, Tableau for insights and visualization at scale.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Growth Stats */}
                        <div className="stat-card">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={16} className="text-zinc-500" />
                                <span className="text-xs text-zinc-500">Project Impact</span>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-light">6+</span>
                                    </div>
                                    <p className="text-xs text-zinc-500">Major Projects</p>
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-light">90%</span>
                                    </div>
                                    <p className="text-xs text-zinc-500">Avg. Accuracy</p>
                                </div>
                            </div>

                            {/* Bar Chart */}
                            <div className="mt-6 flex items-end gap-2 h-24">
                                {[45, 60, 35, 80, 55, 70, 40, 90, 65, 75, 50, 85].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-zinc-800 to-zinc-600 rounded-t opacity-60 hover:opacity-100 transition-opacity"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Opportunities Section */}
                        <div className="stat-card">
                            <h4 className="text-sm font-medium mb-2">AI/ML Space . Opportunities</h4>
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                Where each stroke is a smart algorithm and every case is a chance to build a data pipeline.
                                Specializing in Computer Vision, NLP, and Cloud-native ML solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
