import {
  Target,
  Rocket,
  Clapperboard,
  Compass,
  Palette,
  Globe,
  TrendingUp,
  Camera,
  Share2,
  Mail,
} from 'lucide-react'

// "Contato" não entra aqui: o botão "Fale Conosco" já cobre esse destino,
// e duplicar o link no menu deixava a navegação redundante
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/cases', label: 'Cases' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/quem-somos', label: 'Quem somos' },
]


export const FEATURES = [
  {
    icon: Target,
    title: 'Estratégia e Posicionamento de Marca',
    text: 'Definição de identidade, público e diferenciais da marca, servindo de base para toda a comunicação.',
  },
  {
    icon: Palette,
    title: 'Branding e Diagnóstico',
    text: 'Análise da comunicação atual e desenvolvimento de identidade visual e verbal alinhada ao negócio.',
  },
  {
    icon: Rocket,
    title: 'Campanhas e Ativações',
    text: 'Planejamento e execução de campanhas para lançamentos, datas comerciais e ações pontuais.',
  },
  {
    icon: Share2,
    title: 'Redes Sociais',
    text: 'Produção e publicação de conteúdo com cronograma definido, mantendo presença constante nos canais da marca.',
  },
  {
    icon: Clapperboard,
    title: 'Direção Criativa',
    text: 'Produção de peças visuais e audiovisuais alinhadas à identidade da marca.',
  },
  {
    icon: Compass,
    title: 'Consultoria',
    text: 'Acompanhamento estratégico recorrente, com suporte para decisões de comunicação e marketing.',
  },
]

export const ABOUT_STATS = [
  { value: '35+', label: 'Profissionais' },
  { value: '12', label: 'Prêmios do Setor' },
  { value: '200+', label: 'Clientes Ativos' },
  { value: '4.9★', label: 'Avaliação Média' },
]

export const SERVICES = [
  {
    icon: Palette,
    title: 'Branding & Identidade Visual',
    text: 'Criamos identidades que ficam na memória.',
  },
  {
    icon: Globe,
    title: 'Websites & Plataformas',
    text: 'Sites que convertem visitantes em clientes.',
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago & Performance',
    text: 'Seu investimento gerando retorno real.',
  },
  {
    icon: Camera,
    title: 'Produção de Conteúdo',
    text: 'Conteúdo que engaja e inspira.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    text: 'Presença digital que gera conexão.',
  },
  {
    icon: Mail,
    title: 'Automação & CRM',
    text: 'Fluxos inteligentes que vendem por você.',
  },
]

export const PORTFOLIO = [
  {
    category: 'Branding & Social Media',
    title: 'Campanha Digital — Arteva',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/da7ed6f9a_generated_d67c4073.png',
    span: false,
  },
  {
    category: 'Website & Performance',
    title: 'E-commerce — Moda Élevé',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/68b139775_generated_faf9f88f.png',
    span: true,
  },
  {
    category: 'Vídeo & Conteúdo',
    title: 'Produção Audiovisual — NovaStar',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/4721e1c6e_generated_ebb53de7.png',
    span: true,
  },
  {
    category: 'Identidade Visual',
    title: 'Rebranding — Saboroso',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/9fc964168_generated_f5cfd499.png',
    span: false,
  },
  {
    category: 'UX/UI & Desenvolvimento',
    title: 'Website — Luxe Imóveis',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/b28d28f9f_generated_fd54d56c.png',
    span: false,
  },
  {
    category: 'Conteúdo & Engajamento',
    title: 'Social Media — Vibe Studio',
    image: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/03074eb3a_generated_974f5423.png',
    span: true,
  },
]

export const FOOTER_NAV = [
  { href: '/', label: 'Home' },
  { href: '/cases', label: 'Cases' },
  { href: '/o-que-fazemos', label: 'O que fazemos' },
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/contato', label: 'Contato' },
]

export const FOOTER_SERVICES = [
  'Estratégia e Posicionamento de Marca',
  'Branding e Diagnóstico',
  'Campanhas e Ativações',
  'Redes Sociais',
  'Criação de Conteúdo e Direção Criativa',
  'Consultoria',
]

export const ASSETS = {
  heroVideo: 'https://media.base44.com/videos/public/6a0b22ab020d69d8ff4af8b0/0433a00c8_generated_video.mp4',
  dashboardImage: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/f42064677_generated_image.png',
  teamImage: 'https://media.base44.com/images/public/6a0b22ab020d69d8ff4af8b0/c9d86f118_generated_4ab3cd97.png',
}
