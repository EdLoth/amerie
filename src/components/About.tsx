import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { ASSETS } from '../data/content'

export default function About() {
  return (
    <section id="sobre" className="bg-background overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Estratégia Digital */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28 border-b border-border">
          <Reveal direction="left">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase border border-border px-3 py-1 rounded-full text-muted-foreground mb-6">
              Estratégia Digital
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground leading-tight mb-6">
              Faça sua marca aparecer nos <span className="gradient-text">primeiros resultados</span> com estratégias que convertem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Por meio de estratégias, técnicas e ferramentas de otimização, a <strong>Amerie</strong> projeta a estrutura digital da sua marca para aumentar a visibilidade e alcançar posicionamentos relevantes no mercado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unindo estratégia, design e performance, criamos presenças digitais preparadas não apenas para atrair mais clientes, mas para converter esses acessos em oportunidades reais.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 font-semibold text-sm text-foreground hover:gradient-text transition-all duration-300 group cursor-pointer"
            >
              Iniciar estratégia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div className="rounded-2xl border border-border bg-secondary overflow-hidden p-2 shadow-xl">
              <img
                alt="Dashboard de performance digital"
                className="w-full aspect-[4/3] object-cover rounded-xl"
                src={ASSETS.dashboardImage}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
