"use client"; // Necesario para Framer Motion en App Router

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  // Variantes para la animación escalonada (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cada hijo tarda 0.2s más en aparecer
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Empieza 20px abajo e invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-center items-center px-4">
      {/* Fondo con gradiente radial sutil (Efecto Glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Contenido Principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Badge / Etiqueta pequeña */}
        <motion.div variants={itemVariants} className="mb-4 flex justify-center">
          <span className="px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm backdrop-blur-sm">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6"
        >
          Ingeniero en Informática <br />
          <span className="text-indigo-400">& Desarrollador Full Stack</span>
        </motion.h1>

        {/* Subtítulo / Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Construyo experiencias digitales robustas y escalables.
          Especializado en el ecosistema moderno de JavaScript y soluciones de alto rendimiento.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-slate-200 transition-colors">
            Ver Portafolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-3 rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800/50 transition-colors backdrop-blur-sm">
            Contactar
          </button>
        </motion.div>

        {/* Iconos Sociales */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-6 justify-center text-slate-400"
        >
          <a href="https://github.com/Miithras" className="hover:text-white transition-colors hover:scale-110 transform duration-200" title="Github link">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/diegohenriquez-47822b251/" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200" title="LinkedIn Link">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.diegoh2004@gmail.com" className="hover:text-white transition-colors hover:scale-110 transform duration-200" title="Mail link">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}