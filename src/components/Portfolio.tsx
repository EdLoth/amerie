import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { PORTFOLIO } from '../data/content'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
              Portfólio
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-black mt-3 text-foreground leading-tight">
              Cases que <span className="gradient-text">geram impacto</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Projetos desenvolvidos para marcas que confiaram em nossa visão.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className={item.span ? 'lg:col-span-2' : undefined}
            >
              <a
                href="#"
                className="group relative overflow-hidden rounded-xl cursor-pointer block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={item.image}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 flex flex-col justify-end p-5">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-0.5">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
