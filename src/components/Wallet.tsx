"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send, ArrowDownLeft, Clock, CheckCircle } from "lucide-react";

const transactions = [
    { type: "Sent", target: "Production", amount: "Model v2.1", status: "Deployed", icon: "↗" },
    { type: "Received", target: "Dataset", amount: "6,400 MRI", status: "Processed", icon: "↙" },
    { type: "Sent", target: "API", amount: "RESTful", status: "Active", icon: "↗" },
];

const tags = [
    { label: "6+ Projects", active: false },
    { label: "AWS Certified", active: false },
    { label: "ML/DL Expert", active: true },
    { label: "Data Analytics", active: false },
    { label: "Cloud Native", active: false },
    { label: "Full Stack", active: false },
];

export default function Wallet() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Project <span className="font-medium">Showcase</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Exploratory mission with AI & navigating through the vast possibilities
                    </p>
                </motion.div>

                {/* How it works button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <button className="btn-secondary text-xs">
                        How it works?
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Stats & Transactions */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Big number */}
                        <div className="mb-8">
                            <p className="text-xs text-zinc-500 mb-2">Project Portfolio</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xs text-zinc-600">+</span>
                                <span className="text-5xl font-light tracking-tight">A3.9</span>
                            </div>
                            <p className="text-xs text-zinc-600 mt-1">GPA Score</p>
                        </div>

                        {/* Transaction Cards */}
                        <div className="space-y-3">
                            {transactions.map((tx, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="transaction-card"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs">
                                        {tx.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-zinc-500">{tx.type}</span>
                                            <span className="text-xs text-zinc-600">→</span>
                                            <span className="text-xs">{tx.target}</span>
                                        </div>
                                        <p className="text-sm font-medium">{tx.amount}</p>
                                    </div>
                                    <span className="text-xs text-zinc-500">{tx.status}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pending indicator */}
                        <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600">
                            <Clock size={12} />
                            <span>More projects in progress...</span>
                        </div>
                    </motion.div>

                    {/* Right - Circular Progress & Tags */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                    >
                        {/* Circular Element */}
                        <div className="relative w-48 h-48 mb-8">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                {/* Background circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="1"
                                />
                                {/* Progress arc */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth="2"
                                    strokeDasharray="200 283"
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                />
                                {/* Dot indicators */}
                                {[0, 72, 144, 216, 288].map((angle, i) => (
                                    <circle
                                        key={i}
                                        cx={50 + 45 * Math.cos((angle - 90) * Math.PI / 180)}
                                        cy={50 + 45 * Math.sin((angle - 90) * Math.PI / 180)}
                                        r="2"
                                        fill={i === 0 ? "white" : "rgba(255,255,255,0.3)"}
                                    />
                                ))}
                            </svg>
                            {/* Center content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-[10px] text-zinc-600">Team</p>
                                <p className="text-[10px] text-zinc-600">2024</p>
                                <p className="text-xs font-medium mt-2">Step 01</p>
                                <div className="w-6 h-6 mt-2 rounded-full bg-white/10 flex items-center justify-center">
                                    <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={tag.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                    className={`tag-pill ${tag.active ? "active" : ""}`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                    {tag.label}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
