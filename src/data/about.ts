export const ORIGIN_STORY = {
  title: 'Uma decisão que virou propósito',
  paragraphs: [
    'A Ameriê nasceu da união de pessoas que já sabiam, antes de qualquer coisa, que toda marca precisa de estratégia para crescer com consistência. Foi essa convicção que nos trouxe até aqui, em fevereiro de 2026, e é o que nos move em cada projeto.',
    'Com DNA baiano, carregamos identidade, cor e verdade em cada projeto que assinamos, e a intenção de levar esse jeito de fazer comunicação para marcas em todo o Brasil.',
  ],
}

export type MissionTabKey = 'missao' | 'visao' | 'valores'

export interface MissionTab {
  key: MissionTabKey
  label: string
  text?: string
  values?: string[]
}

export const MISSION_TABS: MissionTab[] = [
  {
    key: 'missao',
    label: 'Missão',
    text: 'Nossa missão é ser o pilar que transforma propósito em impacto. Existimos para oferecer estratégia e presença digital que o mercado costuma negligenciar. Comunicação e movimento de crescimento.',
  },
  {
    key: 'visao',
    label: 'Visão',
    text: 'Ser a parceira estratégica indispensável para marcas que buscam autenticidade e resultados que permanecem. Queremos levar a nossa marca de marketing, com confiança e inovação técnica como motores de crescimento sem limites.',
  },
  {
    key: 'valores',
    label: 'Valores',
    values: ['Compromisso', 'Movimento', 'Confiança', 'Estratégia', 'Presença', 'Relevância'],
  },
]

export interface Founder {
  name: string
  role: string
  bio: string[]
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Laís Liz',
    role: 'Sócia Fundadora',
    bio: [
      'Formada em Comunicação Social com ênfase em Cinema e Vídeo. Atua há anos no mercado de comunicação, com experiência em produção audiovisual mobile, redação, mídias sociais, coordenação de equipes e projetos e desenvolvimento de estratégias para campanhas.',
      'Assinou trabalhos como a campanha da Tribuna da Bahia (55 anos), a redação publicitária para a Basílica do Senhor do Bonfim e a estrutura e copywriting do site da Têm Dendê.',
      'Entre o marketing, a publicidade e o audiovisual, construiu um olhar que une estratégia, criatividade e narrativa para transformar ideias em projetos que conectam marcas e pessoas.',
    ],
  },
  {
    name: 'Amanda Sacramento',
    role: 'Sócia Fundadora',
    bio: [
      'Publicitária de formação, Amanda construiu sua trajetória entre estratégia de marketing, redação, roteiro e criação de conteúdo digital. Passou por agências de comunicação e chegou a liderar a área de Marketing em uma adtech de alta performance, assinando trabalhos para marcas como Leroy Merlin, Unilever e Gino-Canesten (Bayer), experiência que uniu visão comercial a um olhar apurado sobre posicionamento de conteúdo.',
    ],
  },
  {
    name: 'Adriano Araújo',
    role: 'Sócio-diretor de criação',
    bio: [
      'Com atuação em Design Gráfico, Adriano construiu sua trajetória entre identidade visual, social media e motion design, assinando projetos de branding como a identidade visual da Sonus e da Nabuco. Em cada peça, busca unir estética e propósito, nunca um sem o outro.',
      'Hoje, aplica esse repertório na Ameriê como sócio-diretor de criação, transformando estratégia em imagem com o cuidado de manter fidelidade à identidade de cada marca.',
    ],
  },
]
