import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ASSETS } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black w-full"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={ASSETS.heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-8 h-px bg-white/50" />
            <span className="text-xs font-medium text-white/70 tracking-[0.25em] uppercase">
              Agência de Comunicação Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black leading-[1.0] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Sua marca
            <br />
            <span className="inline whitespace-nowrap">
              merece{' '}
              <span className="inline-block relative">
                <span className="gradient-text">mais audiência</span>
                <span className="inline-block w-[3px] h-[0.85em] gradient-bg ml-1 align-middle rounded-sm animate-[blink_1s_step-end_infinite]" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-base lg:text-xl text-white/60 font-light leading-relaxed max-w-xl"
          >
            Construímos estratégias criativas que transformam marcas e referências.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#contato"
              className="group gradient-bg text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer text-sm"
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full transition-all duration-300 cursor-pointer"
            >
              Ver cases
            </a>
          </motion.div>

        </div>
      </div>

      <a
        href="#diferenciais"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
        </motion.div>
      </a>
    </section>
  )
}
