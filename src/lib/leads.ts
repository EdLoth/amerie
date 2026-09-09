// Envia leads (formulário de contato e newsletter) para uma planilha do
// Google Sheets, via um Web App do Google Apps Script. Veja LEADS_SETUP.md
// na raiz do projeto pra criar a planilha e obter a URL do Web App.
const WEBHOOK_URL = import.meta.env.VITE_LEADS_WEBHOOK_URL as string | undefined

export interface LeadPayload {
  nome?: string
  empresa?: string
  email: string
  telefone?: string
  /** como a pessoa conheceu a Ameriê — usado na página de contato completa */
  comoConheceu?: string
  /** assunto selecionado na página de contato completa */
  assunto?: string
  mensagem?: string
  origem: string
}

export async function submitLead(payload: LeadPayload): Promise<boolean> {
  if (!WEBHOOK_URL) {
    console.warn(
      '[leads] VITE_LEADS_WEBHOOK_URL não configurada — o lead não foi enviado para a planilha. Veja LEADS_SETUP.md.'
    )
    return false
  }

  try {
    // Web Apps do Apps Script não respondem com cabeçalhos CORS, então usamos
    // "no-cors": a requisição chega e é processada normalmente do lado do
    // Google (a linha é gravada na planilha), só não conseguimos ler a
    // resposta de volta aqui no navegador — por isso "text/plain" no
    // Content-Type, pra evitar o preflight de CORS que travaria a chamada.
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    return true
  } catch (err) {
    console.error('[leads] Falha ao enviar lead:', err)
    return false
  }
}
