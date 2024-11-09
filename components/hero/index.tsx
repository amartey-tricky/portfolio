"use client";

import styles from "./index.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";

const codeSnippet = `
function Developer() {
  return (
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML",
              "CSS", "JavaScript", "DrizzleORM", "SQL", "PostGres"],
    passion: "Building beautiful UIs and websites",
  )
}
`.trim();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const codeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.6 }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-purple-400 font-mono">Hello, I'm</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-2">
                Patrick Annang
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-200 mt-2">
                Front-End Developer
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg max-w-xl"
            >
              I craft responsive websites where technology meets creativity. Building beautiful web experiences with modern technologies.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                <Code2 size={20} />
                View Projects
              </button>
              <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2">
                <ExternalLink size={20} />
                Contact Me
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 text-gray-400"
            >
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Code Preview */}
          <motion.div
            variants={codeVariants}
            className="hidden lg:block bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="font-mono text-sm">
              <code className="text-purple-300">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="line">
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
