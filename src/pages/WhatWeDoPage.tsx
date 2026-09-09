import { useState } from 'react'
import { ArrowRight, ImageIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import ContactModal from '../components/ContactModal'
import { WHAT_WE_DO } from '../data/whatWeDo'

export default function WhatWeDoPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <div className="bg-background">
      {/* hero — mesma linguagem tipográfica do resto do site (fundo claro, eyebrow + headline) */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
            O que fazemos
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight max-w-2xl">
            Estratégia que move marcas.{' '}
            <span className="gradient-text">Descubra como podemos mover a sua.</span>
          </h1>
        </Reveal>
      </section>

      {/* frentes de atuação — cada seção alterna o fundo (branco / cinza claro), igual às
          seções do restante do site, e o lado da imagem/texto se inverte a cada item */}
      {WHAT_WE_DO.map((item, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={item.slug}
            className={`py-16 lg:py-20 ${reversed ? 'bg-secondary/30' : 'bg-background'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <Reveal direction={reversed ? 'right' : 'left'}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div
                    className={`relative rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center bg-muted ${
                      reversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                      <item.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-5 right-5 flex items-center gap-2 text-[11px] font-medium text-muted-foreground border border-border rounded-full px-3 py-1.5 bg-background/70 backdrop-blur-sm">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Imagem em breve
                    </div>
                  </div>

                  <div className={reversed ? 'lg:order-1' : ''}>
                    <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-snug">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.paragraphs[0]}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.paragraphs[1]}</p>

                    <button
                      onClick={() => setActiveService(item.title)}
                      className="mt-7 inline-flex items-center gap-2 gradient-bg text-white font-medium text-sm px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Quero saber mais
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <ContactModal
        open={activeService !== null}
        onClose={() => setActiveService(null)}
        context={activeService ?? undefined}
      />
    </div>
  )
}
