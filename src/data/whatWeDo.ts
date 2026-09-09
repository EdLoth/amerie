import { Target, Palette, Rocket, Share2, Clapperboard, Compass } from 'lucide-react'

export interface WhatWeDoItem {
  slug: string
  icon: typeof Target
  title: string
  paragraphs: [string, string]
}

export const WHAT_WE_DO: WhatWeDoItem[] = [
  {
    slug: 'estrategia-e-posicionamento-de-marca',
    icon: Target,
    title: 'Estratégia e Posicionamento de Marca',
    paragraphs: [
      'Sua marca fala uma coisa hoje e outra amanhã? Isso confunde quem poderia ser seu cliente.',
      'Definimos identidade, público e diferenciais com clareza, para que cada comunicação sua tenha o mesmo motivo por trás e a mesma força.',
    ],
  },
  {
    slug: 'branding-e-diagnostico',
    icon: Palette,
    title: 'Branding e Diagnóstico',
    paragraphs: [
      'Muita marca boa perde oportunidade por não saber como está sendo vista.',
      'Analisamos sua comunicação atual e desenvolvemos uma identidade visual e verbal que representa, de fato, o que seu negócio entrega.',
    ],
  },
  {
    slug: 'campanhas-e-ativacoes',
    icon: Rocket,
    title: 'Campanhas e Ativações',
    paragraphs: [
      'Toda campanha carrega um propósito antes de carregar uma peça.',
      'Olhamos para o momento da sua marca, para a história que ela já construiu e para onde ela quer chegar, e é a partir disso que desenhamos cada ativação, com cuidado e intenção do início ao fim.',
    ],
  },
  {
    slug: 'redes-sociais',
    icon: Share2,
    title: 'Redes Sociais',
    paragraphs: [
      'Presença digital se constrói todos os dias. Suas redes sociais merecem o mesmo cuidado que você tem com o restante do seu negócio.',
      'Cuidamos desse espaço para que ele se torne ponto de conexão real entre sua marca e quem já confia nela e quem ainda vai confiar.',
    ],
  },
  {
    slug: 'direcao-criativa',
    icon: Clapperboard,
    title: 'Direção Criativa',
    paragraphs: [
      'Uma imagem, um vídeo, uma peça, tudo isso é uma forma de se aproximar de quem acompanha sua marca.',
      'Cuidamos da direção criativa com cuidado e coerência, para que cada conteúdo produzido reflita sua identidade e crie conexão com quem vê e acompanha.',
    ],
  },
  {
    slug: 'consultoria',
    icon: Compass,
    title: 'Consultoria',
    paragraphs: [
      'Toda marca passa por momentos de decisão e nem sempre é fácil saber qual caminho seguir sozinho.',
      'Oferecemos acompanhamento estratégico contínuo, para que você tenha, ao seu lado, alguém com quem pensar cada próximo passo da comunicação do seu negócio.',
    ],
  },
]
