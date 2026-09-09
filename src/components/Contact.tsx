import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { WhatsAppIcon } from './BrandIcons'
import { submitLead } from '../lib/leads'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setLoading(true)

    await submitLead({
      nome: String(data.get('nome') || ''),
      email: String(data.get('email') || ''),
      telefone: String(data.get('telefone') || ''),
      mensagem: String(data.get('mensagem') || ''),
      origem: 'Formulário de Contato',
    })

    setLoading(false)
    setSent(true)
    form.reset()
  }

  return (
    <section id="contato" className="py-28 lg:py-36 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <Reveal direction="left">
            <div className="max-w-2xl mb-16 text-left">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                Contato
              </span>
              <h2 className="text-3xl lg:text-5xl font-heading font-black leading-tight gradient-text">
                Vamos criar algo incrível juntos
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg -mt-8 mb-10">
              Tem um projeto em mente? Adoraríamos ouvir sobre ele. Entre em contato e vamos transformar suas ideias em realidade.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-all duration-300 group-hover:gradient-bg">
                  <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <span className="text-foreground font-medium">Salvador, BA | São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-all duration-300 group-hover:gradient-bg">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <span className="text-foreground font-medium">+55 (71) 99942-3804</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-all duration-300 group-hover:gradient-bg">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <span className="text-foreground font-medium">contato@agenciaamerie.com</span>
              </div>
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5571999423804&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>

          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 p-8 lg:p-10 shadow-xl"
            >
              <h3 className="text-xl font-heading font-semibold mb-6">Envie sua mensagem</h3>

              {sent ? (
                <div className="py-10 text-center">
                  <p className="text-foreground font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-muted-foreground text-sm mt-2">Em breve entraremos em contato.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                    <input
                      required
                      name="nome"
                      placeholder="Seu nome completo"
                      className="flex w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        className="flex w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone</label>
                      <input
                        name="telefone"
                        placeholder="(11) 99999-0000"
                        className="flex w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      name="mensagem"
                      placeholder="Conte-nos sobre seu projeto..."
                      className="flex min-h-[60px] w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm resize-none"
                    />
                  </div>
                </div>
              )}

              {!sent && (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 gradient-bg text-white font-medium py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
