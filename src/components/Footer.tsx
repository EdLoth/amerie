import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon, LinkedInIcon, MailOutlineIcon, WhatsAppIcon } from './BrandIcons'
import { FOOTER_NAV, FOOTER_SERVICES } from '../data/content'
import { submitLead } from '../lib/leads'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = String(new FormData(form).get('email') || '')
    await submitLead({ email, origem: 'Newsletter' })
    setSubscribed(true)
    form.reset()
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-20 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                <span className="gradient-text">Transforme</span> a presença da sua marca!
              </h2>
              <p className="mt-3 text-white/50 text-lg">
                Vamos conversar sobre como podemos impulsionar seus resultados.
              </p>
            </div>
            <Link
              to="/contato"
              className="gradient-bg text-white font-medium px-8 py-4 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
            >
              Iniciar Conversa
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <span className="text-xl font-heading font-bold">
              <span className="gradient-text">Amerie</span>
            </span>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              Comunicação com Propósito!
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/agencia.amerie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/ag%C3%AAncia-ameri%C3%AA/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                aria-label="E-mail"
                href="mailto:contato@agenciaamerie.com"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <MailOutlineIcon className="w-5 h-5" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://api.whatsapp.com/send/?phone=5571999423804&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Navegação</h4>
            <ul className="space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Serviços</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    to="/#diferenciais"
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Newsletter</h4>
            <p className="text-sm text-white/40 mb-4">Receba insights e tendências de marketing digital.</p>
            {subscribed ? (
              <p className="text-sm text-white/60">Inscrição confirmada!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="flex-1 h-10 px-4 text-sm rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Assinar
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Amerie. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors cursor-pointer">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white/60 transition-colors cursor-pointer">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
