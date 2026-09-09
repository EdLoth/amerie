# Amerie — Clone React

Réplica em React + TypeScript + Tailwind CSS (v4) + Framer Motion da landing page criada no Base44 (`humanis-growth-lab.base44.app`), recriada via inspeção do DOM/CSS renderizado (o projeto Base44 original não pôde ser exportado por limitação de plano).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animações de entrada/scroll)
- lucide-react (ícones)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Navbar.tsx        nav fixa com estado "scrolled"
    Hero.tsx           seção inicial com vídeo de fundo
    WhyChooseUs.tsx     grid de 8 diferenciais (#diferenciais)
    About.tsx           estratégia digital + sobre a agência (#sobre)
    Services.tsx        grid de 6 serviços (#servicos)
    Portfolio.tsx        grid de cases (#portfolio)
    Contact.tsx          info de contato + formulário (#contato)
    Footer.tsx            rodapé com newsletter e redes sociais
    Reveal.tsx            wrapper de animação scroll-reveal (framer-motion)
    BrandIcons.tsx        ícones de marca (Instagram/LinkedIn/WhatsApp) que não
                          existem no lucide-react
  data/content.ts        todo o conteúdo textual/estrutural em um único lugar
```

## Sobre as imagens e o vídeo

As imagens (dashboard, equipe, cases do portfólio) e o vídeo do hero continuam
apontando para a CDN pública do Base44 (`media.base44.com`), pois são os
mesmos arquivos usados no site original e estão publicamente acessíveis. Se
quiser hospedá-los você mesmo, baixe os arquivos referenciados em
`src/data/content.ts` (campo `ASSETS` e `PORTFOLIO[].image`) e troque as URLs
por imports locais (`/src/assets/...`).

## O que foi replicado

- Estrutura completa das 6 seções (hero, diferenciais, sobre, serviços,
  portfólio, contato) + navbar + footer, com os mesmos textos, ícones e
  classes de layout do site original.
- Paleta de cores, tipografia (Inter) e o gradiente de marca
  (laranja → lilás → índigo) usados em títulos e botões.
- Micro-interações: nav que muda de aparência ao rolar, animações de entrada
  ao scrollar as seções, hover nos cards de portfólio/serviços/diferenciais.
- Formulário de contato e newsletter funcionais na interface (sem backend —
  apenas simulam o envio, já que o Base44 original usava o backend próprio
  da plataforma).

## O que NÃO foi replicado (limitação do método)

Como o projeto original não pôde ser baixado (conta sem plano Pro do
Base44), esta réplica foi feita inspecionando o HTML/CSS renderizado no
navegador — não é uma cópia do código-fonte real do Base44. Por isso:

- Qualquer lógica de backend do Base44 (auth, banco de dados, envio real do
  formulário de contato) não existe aqui.
- Pequenos detalhes de comportamento (o "badge" de edição do Base44,
  toasts internos da plataforma) foram propositalmente removidos.
