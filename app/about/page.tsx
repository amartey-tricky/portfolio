'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Palette, Cpu, GitBranch, Terminal, Coffee, Zap } from 'lucide-react';

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

const skills = [
  { name: 'Frontend Development', icon: Code2, description: 'Building responsive and interactive user interfaces' },
  { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and beautiful user experiences' },
  { name: 'Problem Solving', icon: Brain, description: 'Finding elegant solutions to complex problems' },
  { name: 'Technical Architecture', icon: Cpu, description: 'Designing scalable application structures' },
  { name: 'Version Control', icon: GitBranch, description: 'Managing code with Git and GitHub' },
  { name: 'Command Line', icon: Terminal, description: 'Proficient in terminal operations and scripting' },
  { name: 'Quick Learner', icon: Zap, description: 'Rapidly adapting to new technologies' },
  { name: 'Team Collaboration', icon: Coffee, description: 'Working effectively in agile environments' },
];

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'State Management', items: ['Redux', 'Zustand', 'React Query', 'Context API'] },
  { category: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'] },
  { category: 'Tools', items: ['VS Code', 'Git', 'Docker', 'Webpack'] },
];

export default function About() {
  const [activeTab, setActiveTab] = React.useState('skills');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-lg text-gray-300">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              seamless user experiences. With years of experience in web development, I specialize in 
              building modern, responsive applications using cutting-edge technologies.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'skills'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-400 hover:bg-purple-600/10'
              }`}
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('technologies')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'technologies'
                  ? 'bg-purple-600 text-white'
                  : 'text-purple-400 hover:bg-purple-600/10'
              }`}
            >
              Technologies
            </button>
          </motion.div>

          {/* Content Sections */}
          {activeTab === 'skills' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
                >
                  <skill.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'technologies' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-white mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Timeline Section */}
          <motion.div variants={containerVariants} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Experience Timeline</h2>
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-purple-600">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0" />
                <h3 className="text-lg font-medium text-white">Senior Frontend Developer</h3>
                <p className="text-purple-400">2022 - Present</p>
                <p className="text-gray-300 mt-2">
                  Leading frontend development for enterprise applications, mentoring junior developers,
                  and implementing best practices for scalable architecture.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-purple-600">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0" />
                <h3 className="text-lg font-medium text-white">Frontend Developer</h3>
                <p className="text-purple-400">2019 - 2022</p>
                <p className="text-gray-300 mt-2">
                  Developed and maintained multiple React applications, implemented responsive designs,
                  and collaborated with UX designers to create intuitive user interfaces.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative pl-8 border-l-2 border-purple-600">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0" />
                <h3 className="text-lg font-medium text-white">Junior Developer</h3>
                <p className="text-purple-400">2017 - 2019</p>
                <p className="text-gray-300 mt-2">
                  Started my journey in web development, working on various projects and learning
                  fundamental technologies and best practices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
