# Captura de leads no Google Sheets

O formulário de contato (seção "Vamos criar algo incrível juntos") e a
newsletter do rodapé já estão preparados pra enviar cada envio como uma
linha numa planilha do Google Sheets, usando um Web App do Google Apps
Script — sem precisar de nenhum backend próprio.

Colunas gravadas: `Timestamp | Nome | Empresa | Email | Telefone | Como
Conheceu | Assunto | Mensagem | Origem` (a página de contato completa
(`/contato`) preenche todas; o formulário rápido da home, a newsletter do
rodapé e os popups de "Quero saber mais" preenchem só os campos que têm.
`Origem` identifica de onde veio o lead: `Formulário de Contato`, `Página de
Contato`, `Newsletter` ou `Popup - <nome do serviço>`).

## Passo a passo

1. Crie uma planilha nova em [sheets.google.com](https://sheets.google.com).
2. Renomeie a primeira aba pra `Leads` e, na primeira linha, adicione o
   cabeçalho: `Timestamp`, `Nome`, `Empresa`, `Email`, `Telefone`, `Como
   Conheceu`, `Assunto`, `Mensagem`, `Origem`.
3. No menu, vá em **Extensões → Apps Script**.
4. Apague o conteúdo padrão do arquivo `Código.gs` e cole isto:

   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads')
       || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);

     sheet.appendRow([
       new Date(),
       data.nome || '',
       data.empresa || '',
       data.email || '',
       data.telefone || '',
       data.comoConheceu || '',
       data.assunto || '',
       data.mensagem || '',
       data.origem || '',
     ]);

     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

5. Clique em **Implantar → Nova implantação**.
   - Tipo: **App da Web**.
   - Executar como: **Eu** (sua conta Google).
   - Quem pode acessar: **Qualquer pessoa**.
6. Autorize as permissões quando o Google pedir (ele vai avisar que o script
   não é verificado — é normal pra script pessoal, pode confirmar).
7. Copie a URL do Web App gerada (termina em `/exec`).
8. Na raiz do projeto, copie `.env.example` pra `.env.local` e cole a URL:

   ```
   VITE_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
   ```

9. Reinicie o `npm run dev` (variáveis de ambiente só são lidas ao iniciar o
   servidor).

Pronto — a partir daí, cada envio do formulário de contato ou da newsletter
vira uma linha nova na planilha `Leads`.

## Observações

- Sem a variável `VITE_LEADS_WEBHOOK_URL` configurada, os formulários
  continuam funcionando normalmente na interface (mostram a mensagem de
  sucesso), mas o envio pra planilha é simplesmente pulado — dá pra ver um
  aviso no console do navegador (`[leads] VITE_LEADS_WEBHOOK_URL não
  configurada...`).
- Como o Apps Script não devolve cabeçalhos de CORS, o envio é feito em modo
  "fire-and-forget" (`no-cors`): a linha é gravada normalmente na planilha,
  mas o navegador não consegue ler a resposta de volta — por isso não dá pra
  mostrar erro caso a URL esteja errada, só o aviso no console.
- Essa URL fica visível no código JS final do site (é assim que qualquer
  integração 100% client-side com Apps Script funciona). Não é uma
  informação sensível tipo senha, mas em teoria alguém poderia descobrir a
  URL e enviar linhas falsas pra planilha. Se isso vier a ser um problema,
  a solução é mover esse envio pra um backend próprio (ex: uma rota NestJS)
  que valide e repasse pro Sheets.
