import { useEffect, useState, type FormEvent } from 'react'
import { X, Send } from 'lucide-react'
import { submitLead } from '../lib/leads'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  /** nome do serviço/contexto que abriu o popup, usado como origem do lead e sugestão de mensagem */
  context?: string
}

export default function ContactModal({ open, onClose, context }: ContactModalProps) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  // reseta o estado toda vez que o popup é reaberto para um novo contexto
  useEffect(() => {
    if (open) {
      setSent(false)
      setLoading(false)
    }
  }, [open])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

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
      origem: context ? `Popup - ${context}` : 'Popup de Contato',
    })

    setLoading(false)
    setSent(true)
    form.reset()
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-background rounded-3xl border border-border p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        <h3 className="text-xl font-heading font-semibold text-foreground pr-8">
          {context ? context : 'Quero saber mais'}
        </h3>
        <p className="text-sm text-muted-foreground mt-1.5">
          Preencha seus dados e nossa equipe entra em contato com você.
        </p>

        {sent ? (
          <div className="py-10 text-center">
            <p className="text-foreground font-medium">Mensagem enviada com sucesso!</p>
            <p className="text-muted-foreground text-sm mt-2">Em breve entraremos em contato.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
              <input
                required
                name="nome"
                placeholder="Seu nome completo"
                className="flex w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
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
                rows={4}
                name="mensagem"
                defaultValue={context ? `Quero saber mais sobre ${context}.` : ''}
                className="flex min-h-[60px] w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 gradient-bg text-white font-medium py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
