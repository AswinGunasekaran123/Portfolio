"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function Hero() {
    const { play: playClick } = useSound("/click-sound.mp3");

    const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        playClick();
        // Let the default behavior happen after sound
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
        >
            {/* Background glow orb */}
            <div className="glow-orb top-1/4 left-1/2 -translate-x-1/2" />

            {/* Vertical decorative lines */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 h-64 flex gap-2 opacity-20">
                <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <div className="w-0.5 h-3/4 mt-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="w-0.5 h-1/2 mt-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* SVG Curved Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path
                    d="M 100 300 Q 300 200 500 350 T 900 300"
                    className="curved-line"
                />
                <path
                    d="M 0 400 Q 200 350 400 400 T 800 380"
                    className="curved-line"
                />
            </svg>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6"
                >
                    Hello{" "}
                    <span className="font-medium">Momo Chutney</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10"
                >
                    Just a temporary version for testing purposes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={() => playClick()}
                    >
                        View Projects
                        <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
