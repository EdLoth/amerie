import { WhatsAppIcon } from './BrandIcons'

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5571999423804&text&type=phone_number&app_absent=0'

// Botão flutuante de WhatsApp, fixo no site inteiro (não só na seção de
// contato), sempre visível por cima do conteúdo ao rolar a página.
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-black/20 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
