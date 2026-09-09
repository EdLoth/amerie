import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

// links de rota real (/, /cases, /quem-somos...) usam <Link> do react-router;
// os que ainda não têm section própria ('#') continuam como âncora simples
function isRouteLink(href: string) {
  return href === '/' || href.startsWith('/')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // só a Home tem hero escuro (vídeo) por trás do topo — nas outras páginas o
  // conteúdo já começa com fundo claro, então o menu transparente com texto
  // branco ficava ilegível até rolar. Nelas o header já nasce sólido.
  const isHome = pathname === '/'
  const solid = scrolled || !isHome

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        solid ? 'bg-foreground shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* logo (esquerda) / menu (centro) / cta (direita) — mesma estrutura de 3 colunas da asminas.co,
            usando grid pra manter o menu sempre centralizado independente da largura da logo e do botão */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 lg:h-20 gap-4">
          <Link to="/" className="relative z-10 justify-self-start">
            <span className="text-xl font-heading font-bold tracking-tight">
              <span className="gradient-text">Amerie</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-8">
            {NAV_LINKS.map((link) => {
              const className =
                'relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 py-2 group'
              const underline = (
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              )
              return isRouteLink(link.href) ? (
                <Link key={link.href} to={link.href} className={className}>
                  {link.label}
                  {underline}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                  {underline}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <Link
              to="/contato"
              className="hidden lg:inline-flex gradient-bg text-white text-sm font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Fale Conosco
            </Link>
            <button
              className="lg:hidden relative z-10 p-2 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-foreground border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const className =
              'px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
            return isRouteLink(link.href) ? (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={className}>
                {link.label}
              </a>
            )
          })}
          <Link
            to="/contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 gradient-bg text-white text-sm font-medium px-6 py-3 rounded-full text-center"
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </nav>
  )
}
