import type { ReactNode } from 'react'
export interface CaseStudy {
  slug: string
  nome: string
  /** trecho curto exibido sobre a imagem do case, na listagem — **texto** vira <strong> */
  cardContent: string
  /** título do "texto de complemento", exibido na página individual do case */
  complementoTitulo: string
  /** corpo do "texto de complemento", exibido na página individual do case */
  complementoTexto: string
  /** placeholder de cor enquanto a imagem/criativo real não chega */
  placeholderBg: string
}

export const CASES: CaseStudy[] = [
  {
    slug: 'cna-rio-vermelho',
    nome: 'CNA Rio Vermelho',
    cardContent:
      'A presença estratégica da Amerie na trajetória do CNA Rio Vermelho: antes da inauguração ao sucesso de matrículas da unidade. **+860% de crescimento no Instagram.**',
    complementoTitulo: 'Uma parceria que tem dado muito certo',
    complementoTexto:
      'A CNA Rio Vermelho chegou ao mercado em maio de 2026 como uma franquia nova, sem presença digital prévia e com inauguração marcada para o dia 31 de maio. A Amerie assumiu a operação completa das redes sociais e do tráfego pago desde o zero absoluto.',
    placeholderBg: 'linear-gradient(135deg, #ff2f76 0%, #c2003f 55%, #7a0030 100%)',
  },
  {
    slug: 'tem-dende',
    nome: 'Têm Dendê',
    cardContent:
      'A Têm Dendê conectada à audiência certa no digital através de **conteúdos com a cara e a estratégia da Amerie.**',
    complementoTitulo: 'Estratégia de conteúdo para uma marca baiana em expansão global.',
    complementoTexto:
      'Cuidamos da estratégia de conteúdo orgânico da Têm Dendê (Instagram, LinkedIn e YouTube) acompanhando de perto o momento de internacionalização da produtora, com o mesmo olhar técnico que ela tem por trás das câmeras.',
    placeholderBg: 'linear-gradient(135deg, #0f3d2e 0%, #145036 55%, #0a2a1f 100%)',
  },
  {
    slug: 'capelinha',
    nome: 'Capelinha',
    cardContent:
      'A Capelinha entrega o sabor. A Amerie garante que **o público sinta só de olhar a tela.**',
    complementoTitulo: 'Uma marca que refresca o dia a dia soteropolitano.',
    complementoTexto:
      'Com conteúdo orgânico que dá visibilidade aos sabores e campanhas da marca, mantendo viva, no digital, a mesma tradição que ela já tem nas ruas de Salvador.',
    placeholderBg: 'linear-gradient(135deg, #ff8a00 0%, #ff8a00 50%, #1f6fb2 50%, #14507f 100%)',
  },
]

/** transforma **trecho** em <strong>trecho</strong>, sem precisar de dangerouslySetInnerHTML */
export function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i): ReactNode => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}
