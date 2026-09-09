import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ImageIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CASES, renderBold } from '../data/cases'

const headline = 'Comunicando com propósito'

export default function CasesPage() {
  return (
    <div className="bg-background">
      {/* hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase"
        >
          Cases
        </motion.span>

        <h1 className="mt-4 text-4xl lg:text-6xl font-heading font-black text-foreground leading-tight max-w-3xl">
          {headline.split(' ').map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-3 ${i === 1 ? 'gradient-text' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </section>

      {/* cases — full-bleed, estética Layer Up */}
      <section className="flex flex-col">
        {CASES.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05} direction="none">
            <Link
              to={`/cases/${item.slug}`}
              className="group relative flex items-end w-full min-h-[420px] lg:min-h-[600px] p-8 lg:p-[50px] overflow-hidden cursor-pointer"
              style={{ background: item.placeholderBg }}
            >
              {/* selo indicando espaço reservado pro criativo real do cliente */}
              <div className="absolute top-6 right-6 flex items-center gap-2 text-[11px] font-medium text-white/60 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm">
                <ImageIcon className="w-3.5 h-3.5" />
                Imagem do case em breve
              </div>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col text-white w-full lg:w-[495px] lg:max-w-[50%]">
                <span className="text-sm lg:text-base font-extrabold uppercase tracking-wide">
                  {item.nome}
                </span>
                <p className="mt-4 text-xl lg:text-[31px] leading-snug lg:leading-[34px] font-medium">
                  {renderBold(item.cardContent)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 bg-white text-black text-sm font-semibold rounded px-6 py-3 w-fit group-hover:gap-3 transition-all duration-300">
                  Visualizar projeto
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  )
}
