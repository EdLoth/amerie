import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ImageIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CASES } from '../data/cases'

export default function CaseDetailPage() {
  const { slug } = useParams()
  const item = CASES.find((c) => c.slug === slug)

  if (!item) return <Navigate to="/cases" replace />

  return (
    <div className="bg-background">
      <section
        className="relative flex items-end min-h-[380px] lg:min-h-[520px] pt-32 pb-12 px-6 lg:px-8"
        style={{ background: item.placeholderBg }}
      >
        <div className="absolute top-24 right-6 lg:right-8 flex items-center gap-2 text-[11px] font-medium text-white/60 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm">
          <ImageIcon className="w-3.5 h-3.5" />
          Imagem do case em breve
        </div>
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para cases
          </Link>
          <span className="block text-sm lg:text-base font-extrabold uppercase tracking-wide text-white">
            {item.nome}
          </span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <Reveal>
          <h1 className="text-3xl lg:text-5xl font-heading font-black text-foreground leading-tight max-w-2xl">
            {item.complementoTitulo}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {item.complementoTexto}
          </p>
          <Link
            to="/contato"
            className="mt-10 inline-flex items-center gap-2 gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Quero um case assim para minha marca
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
