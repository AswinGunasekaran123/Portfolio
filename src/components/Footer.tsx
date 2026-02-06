"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Links */}
                    <div className="flex items-center gap-6 text-xs text-zinc-500">
                        <a href="#contact" className="hover:text-white transition-colors">Support</a>
                        <a href="#about" className="hover:text-white transition-colors">Register</a>
                    </div>

                    {/* Center - Copyright */}
                    <p className="text-xs text-zinc-600">
                        © Designed with love at Aswin's PM Studio . 2026
                    </p>

                    {/* Right - Social */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://linkedin.com/in/aswingunasekaran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Linkedin size={16} className="text-zinc-400" />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Github size={16} className="text-zinc-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
