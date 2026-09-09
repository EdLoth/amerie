import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-black mt-3 text-foreground leading-tight max-w-xl">
            Soluções completas para sua <span className="gradient-text">presença digital</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group bg-background p-8 hover:bg-secondary/40 transition-colors duration-300 cursor-pointer h-full">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.text}</p>
                <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-foreground/50 group-hover:text-foreground transition-colors duration-300">
                  Saiba mais
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
