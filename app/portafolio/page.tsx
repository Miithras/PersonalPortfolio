"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Database, Server, BarChart3, Code2, Globe, Package } from 'lucide-react';

export default function Portfolio() {

  // --- CONFIGURACIÓN DE ANIMACIONES (Misma que en Home) ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // --- DATOS ---
  const skills = [
    {
      category: 'Desarrollo Backend',
      icon: <Server className="w-6 h-6" />,
      items: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'API REST', 'GraphQL']
    },
    {
      category: 'Análisis de Datos',
      icon: <BarChart3 className="w-6 h-6" />,
      items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Tableau', 'Machine Learning']
    },
    {
      category: 'Desarrollo Full Stack',
      icon: <Code2 className="w-6 h-6" />,
      items: ['React', 'TypeScript', 'Next.js', 'Docker', 'Git', 'CI/CD', 'AWS']
    }
  ];

  const projects = [
    {
      title: 'Sistema de Gestión',
      description: 'Plataforma backend para gestión de inventarios y facturación con microservicios.',
      tech: ['Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      icon: <Database className="w-8 h-8" />
    },
    {
      title: 'Dashboard Analytics',
      description: 'Herramienta de visualización de datos en tiempo real para métricas de negocio.',
      tech: ['Python', 'Pandas', 'Power BI', 'SQL'],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Pipeline ETL Big Data',
      description: 'Sistema automatizado de extracción y transformación de datos.',
      tech: ['Python', 'Airflow', 'AWS S3', 'Snowflake'],
      icon: <Package className="w-8 h-8" />
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden">

      {/* --- FONDO ANIMADO (Consistente con Home) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={bgVariants} initial="hidden" animate="visible"
          className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          variants={bgVariants} initial="hidden" animate="visible"
          className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[100px]"
        />
      </div>

      {/* --- CONTENIDO CON SCROLL --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">

        {/* Header de Navegación */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors hover:-translate-x-1 duration-200">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Título de Sección */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-4 inline-block">
              Portafolio Profesional
            </span>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Proyectos y <span className="text-indigo-400">Habilidades</span>
            </h1>
          </motion.div>

          {/* Grid de Skills */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-2">
              <Code2 className="text-indigo-400" /> Stack Tecnológico
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-indigo-400 mb-4 bg-indigo-500/10 w-fit p-3 rounded-xl">{skill.icon}</div>
                  <h3 className="text-xl font-medium mb-4 text-white">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Grid de Proyectos */}
          <motion.section variants={itemVariants} className="mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-slate-200 flex items-center gap-2">
              <Package className="text-indigo-400" /> Proyectos Destacados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradiente sutil al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-4">
                    <div className="text-slate-100 font-semibold text-2xl group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </div>
                    <div className="text-indigo-400 bg-indigo-500/10 p-2 rounded-lg">{project.icon}</div>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-indigo-200 border border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action Final */}
          <motion.section
            variants={itemVariants}
            className="text-center bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
            <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para colaborar?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Si te interesa mi perfil técnico o tienes una idea de proyecto, hablemos.
            </p>
            <button className="px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Iniciar Conversación
            </button>
          </motion.section>

          <footer className="mt-20 py-8 text-center text-slate-600 text-sm border-t border-slate-900">
             © 2026 Portafolio de Ingeniería
          </footer>

        </motion.div>
      </div>
    </main>
  );
}