import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, Heart, Compass, Target } from 'lucide-react'
import Reveal from '../components/Reveal'
import { ORIGIN_STORY, MISSION_TABS, FOUNDERS } from '../data/about'

const GRAPHIC_TILES = [
  { icon: Sparkles, bg: 'bg-muted' },
  { icon: Target, bg: 'gradient-bg' },
  { icon: Compass, bg: 'gradient-bg' },
  { icon: Heart, bg: 'bg-muted' },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0)

  // avança sozinho entre missão / visão / valores, e reinicia a contagem se a pessoa clicar
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab((v) => (v + 1) % MISSION_TABS.length)
    }, 6000)
    return () => clearInterval(id)
  }, [activeTab])

  const initials = (name: string) =>
    name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

  return (
    <div className="bg-background">
      {/* hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase border border-border px-3 py-1 rounded-full text-muted-foreground mb-6">
            Quem somos
          </span>
          <h1 className="text-4xl lg:text-6xl font-heading font-black text-foreground leading-tight max-w-2xl">
            Somos a Ameriê. <span className="gradient-text">Movimento que acontece.</span>
          </h1>
        </Reveal>
      </section>

      {/* origem */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-28 border-b border-border">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal direction="left">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-snug mb-6">
              {ORIGIN_STORY.title}
            </h2>
            {ORIGIN_STORY.paragraphs.map((p) => (
              <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {GRAPHIC_TILES.map((tile, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-2xl flex items-center justify-center ${tile.bg}`}
                >
                  <tile.icon
                    className={`w-8 h-8 ${tile.bg === 'gradient-bg' ? 'text-white' : 'text-muted-foreground'}`}
                    strokeWidth={1.5}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* frase de marca — pausa visual entre a origem e a missão/visão/valores */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl lg:text-4xl font-heading font-bold text-foreground leading-snug">
            Estratégia com <span className="gradient-text">alma</span>. Presença com propósito.
          </p>
        </Reveal>
      </section>

      {/* missão, visão e valores — alternam sozinhos, com transição animada */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="text-center mb-10">
          <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
            Três olhares, um propósito
          </span>
        </Reveal>

        <div className="flex justify-center gap-2 mb-10">
          {MISSION_TABS.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? 'gradient-bg text-white'
                  : 'text-muted-foreground hover:text-foreground bg-muted'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={MISSION_TABS[activeTab].key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-2xl"
            >
              {MISSION_TABS[activeTab].values ? (
                <div className="flex flex-wrap justify-center gap-3">
                  {MISSION_TABS[activeTab].values!.map((v) => (
                    <span
                      key={v}
                      className="gradient-bg text-white text-sm font-medium px-5 py-2.5 rounded-full"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {MISSION_TABS[activeTab].text}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* os três sócios */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
              Quem faz acontecer
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-heading font-black text-foreground leading-tight">
              Três olhares, uma <span className="gradient-text">Ameriê</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 0.1}>
                <div className="bg-background rounded-3xl border border-border p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white font-heading font-bold text-lg shrink-0">
                    {initials(founder.name)}
                  </div>
                  <h3 className="mt-6 text-lg font-heading font-bold text-foreground">{founder.name}</h3>
                  <span className="text-sm text-muted-foreground">{founder.role}</span>
                  <div className="mt-4 space-y-3">
                    {founder.bio.map((p) => (
                      <p key={p} className="text-sm text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
