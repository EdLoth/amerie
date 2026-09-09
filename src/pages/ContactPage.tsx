import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { WhatsAppIcon } from '../components/BrandIcons'
import { submitLead } from '../lib/leads'

const headline = 'Todo propósito começa numa conversa.'

const selectClass =
  'flex w-full h-12 rounded-xl border border-input bg-transparent px-3 text-base shadow-sm transition-colors text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm'
const inputClass =
  'flex w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setLoading(true)

    await submitLead({
      nome: String(data.get('nome') || ''),
      empresa: String(data.get('empresa') || ''),
      email: String(data.get('email') || ''),
      telefone: String(data.get('telefone') || ''),
      comoConheceu: String(data.get('comoConheceu') || ''),
      assunto: String(data.get('assunto') || ''),
      mensagem: String(data.get('mensagem') || ''),
      origem: 'Página de Contato',
    })

    setLoading(false)
    setSent(true)
    form.reset()
  }

  return (
    <div className="bg-background">
      {/* hero animado na entrada da página */}
      <section className="pt-40 pb-14 lg:pt-48 lg:pb-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase">
          Contato
        </span>

        <h1 className="mt-4 text-4xl lg:text-6xl font-heading font-black text-foreground leading-tight">
          {headline.split(' ').map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-2 ${i >= 3 ? 'gradient-text' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
        >
          Quer tirar uma dúvida, propor uma ideia ou começar um projeto? Fale com a Ameriê, nosso time está pronto para te atender.
        </motion.p>
      </section>

      <section className="pb-24 lg:pb-32 bg-secondary/30 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <Reveal direction="left">
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
                className="bg-background rounded-3xl border border-border p-8 lg:p-10 shadow-xl"
              >
                {sent ? (
                  <div className="py-16 text-center">
                    <p className="text-foreground font-medium text-lg">Mensagem enviada com sucesso!</p>
                    <p className="text-muted-foreground text-sm mt-2">Em breve entraremos em contato.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                        <input required name="nome" placeholder="Seu nome completo" className={inputClass} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
                        <input name="empresa" placeholder="Nome da sua empresa" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mt-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                        <input required type="email" name="email" placeholder="seu@email.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone</label>
                        <input name="telefone" placeholder="(11) 99999-0000" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mt-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">
                          Como conheceu a Ameriê?
                        </label>
                        <select required name="comoConheceu" defaultValue="" className={selectClass}>
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option value="Anúncios">Anúncios</option>
                          <option value="Redes sociais">Redes sociais</option>
                          <option value="Indicação">Indicação</option>
                          <option value="Outros">Outros</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Assunto</label>
                        <select required name="assunto" defaultValue="" className={selectClass}>
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option value="Redes sociais">Redes sociais</option>
                          <option value="Tráfego pago">Tráfego pago</option>
                          <option value="Consultoria">Consultoria</option>
                          <option value="Carreira">Carreira</option>
                          <option value="Outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Deixe sua mensagem
                      </label>
                      <textarea
                        required
                        rows={5}
                        name="mensagem"
                        placeholder="Conte-nos sobre seu projeto..."
                        className="flex min-h-[60px] w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-7 gradient-bg text-white font-medium py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
