"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Shield, Download } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { play: playClick } = useSound("/click-sound.mp3");

    // Calculate scale based on distance from hovered item
    const getScale = (index: number) => {
        if (hoveredIndex === null) return 1;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 1.4; // Hovered item
        if (distance === 1) return 1.2; // Adjacent items
        if (distance === 2) return 1.1; // Next adjacent
        return 1; // Rest
    };

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={() => playClick()}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="relative w-10 h-10"
                    >
                        <div className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AG</span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation - Curved Pill Container with Dock Effect */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => playClick()}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    animate={{
                                        scale: getScale(index),
                                        y: hoveredIndex === index ? -4 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                    className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5 origin-bottom"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* Protection/Resume link inside pill */}
                            <motion.a
                                href="/Aswin_Gunasekaran_Resume.pdf"
                                download
                                onClick={() => playClick()}
                                whileHover={{ scale: 1.1, y: -4 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                                className="flex items-center gap-1 px-4 py-2 text-sm bg-white/10 rounded-full text-white hover:bg-white/15 transition-colors origin-bottom"
                            >
                                Resume
                                <ArrowUpRight size={14} />
                            </motion.a>

                            {/* Shield icon inside pill */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                                className="ml-1 p-2 rounded-full bg-white/10 cursor-pointer"
                            >
                                <Shield size={16} className="text-white" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right side - Contact with hover effect */}
                    <motion.a
                        href="#contact"
                        onClick={() => playClick()}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="hidden md:flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                        <span>Contact Me</span>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            playClick();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-6"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                                playClick();
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-2xl text-zinc-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="/Aswin_Gunasekaran_Resume.pdf"
                        download
                        onClick={() => playClick()}
                        className="btn-primary mt-4"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </motion.div>
            )}
        </>
    );
}
