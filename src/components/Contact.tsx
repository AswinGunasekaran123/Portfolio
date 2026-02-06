"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Get in <span className="font-medium">Touch</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <a href="mailto:aswing@umich.edu" className="glass-card p-4 flex items-center gap-4 hover:border-white/20 transition-all">
                            <Mail size={18} className="text-zinc-500" />
                            <div>
                                <p className="text-xs text-zinc-500">Email</p>
                                <p className="text-sm">aswing@umich.edu</p>
                            </div>
                        </a>

                        <div className="glass-card p-4 flex items-center gap-4">
                            <Phone size={18} className="text-zinc-500" />
                            <div>
                                <p className="text-xs text-zinc-500">Phone</p>
                                <p className="text-sm">(313) 696-8022</p>
                            </div>
                        </div>

                        <div className="glass-card p-4 flex items-center gap-4">
                            <MapPin size={18} className="text-zinc-500" />
                            <div>
                                <p className="text-xs text-zinc-500">Location</p>
                                <p className="text-sm">Dearborn, MI</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="stat-card space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20"
                        />
                        <textarea
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 resize-none"
                        />
                        <button type="submit" className="btn-primary w-full justify-center">
                            {submitted ? "✓ Sent!" : (
                                <>
                                    <Send size={16} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
