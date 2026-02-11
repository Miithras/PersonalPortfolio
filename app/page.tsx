"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, //Atributo staggerChildren represnta el tiempo que demora el siguiente objeto en aparecer después del anterior
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const bgVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 }, // Empieza un poco más pequeño e invisible
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5, // Tarda 1.5 segundos en aparecer completamente
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-center items-center px-4">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={bgVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-[-10%] left-[-10%] w-160 h-160 bg-rose-950/30 rounded-full blur-[100px]"
        />
        <motion.div
          variants={bgVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-[-10%] right-[-10%] w-160 h-160 bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-4 flex justify-center">
          <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm backdrop-blur-sm">
            Disponible para proyectos
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400 mb-6">

          Ingeniero en informática <br />
          <span className="text-indigo-400">
            y desarrollador full stack
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Construyo experiencias digitales robustas y escalables.
          Especializado en el ecosistema moderno de JavaScript y soluciones de alto rendimiento.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/portafolio">
            <button className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-slate-200 transition-colors">
              Ver Portafolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-6 justify-center text-slate-400"
        >
            <a href="https://github.com/Miithras" className="hover:text-white transition-colors hover:scale-110 transform duration-200" title="Github link">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/diegohenriquez-47822b251/" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200" title="LinkedIn Link">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://www.diegoh2004@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200" title="Mail link">
              <Mail className="w-8 h-8" />
            </a>
        </motion.div>
      </motion.div>
    </main>
  );
}