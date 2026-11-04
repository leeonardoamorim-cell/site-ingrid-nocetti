# Ingrid Nocetti — React + Vite + GitHub Pages

Cópia independente do site institucional, preservando conteúdo, fotos, logomarca, CSS, links e funcionalidades da versão atual. O site publicado no Work não foi alterado.

## 1. Publicação gratuita: escolha do repositório

No GitHub Free, o GitHub Pages só está disponível para repositórios públicos. Para usar um repositório privado, é necessário GitHub Pro ou outro plano compatível. Não há cobrança ou contratação configurada neste projeto.

- Gratuito: criar `site-ingrid-nocetti` como público, se você concordar em disponibilizar o código e as fotos do site.
- Privado: criar o mesmo nome como privado, mas ativar Pages somente se sua conta já tiver plano compatível.
- O ZIP funciona com as duas opções. Nenhum repositório foi criado ou tornado público automaticamente.

Documentação: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## 2. Enviar os arquivos

Extraia o ZIP. Envie o CONTEÚDO da pasta `site-ingrid-nocetti` para a raiz do repositório. `package.json`, `index.html`, `vite.config.js` e a pasta `.github` devem estar na raiz, sem uma pasta extra por cima.

A branch deve se chamar `main`. Se usar GitHub Desktop, adicione a pasta como repositório local, faça o primeiro commit e use Publish repository com o nome exato. A opção Keep this code private define a privacidade: mantenha marcada para privado; desmarque somente se quiser a opção pública gratuita.

Inclua `.github/workflows/deploy.yml` (alguns gerenciadores de arquivos ocultam pastas iniciadas por ponto). Não envie node_modules ou dist.

## 3. Ativar a publicação (uma vez)

1. No repositório, abra Settings → Pages.
2. Em Build and deployment → Source, escolha GitHub Actions.
3. Abra Actions → Publicar site no GitHub Pages → Run workflow → main → Run workflow.
4. Aguarde os jobs build e deploy ficarem verdes.
5. O endereço final aparece em Settings → Pages e no ambiente github-pages.

O endereço segue o formato `https://SEU-USUARIO.github.io/site-ingrid-nocetti/`. O nome da conta é seu login GitHub, não seu e-mail.

Se Actions estiver desativado, habilite-o em Settings → Actions → General. O workflow solicita somente contents:read durante a compilação e pages:write/id-token:write durante a publicação. Não precisa criar tokens ou cadastrar senhas.

## 4. Rodar no Windows / VS Code

Instale Node.js 22.12 ou superior (Node 24 também funciona). Abra a pasta extraída no VS Code e execute no terminal:

```bash
npm ci
npm run dev
```

Abra a URL indicada no terminal, terminando em `/site-ingrid-nocetti/`.

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

Abra a URL indicada com o mesmo caminho. Não abra index.html com duplo clique: o projeto React precisa do servidor Vite ou da compilação publicada.

## 5. Alterações futuras

| Arquivo/pasta | Conteúdo |
| --- | --- |
| src/components/Header.jsx | Cabeçalho e menu |
| src/components/Hero.jsx | Apresentação e foto principal |
| src/components/ContentSections.jsx | Especialidades, sobre, benefícios, etapas, galeria, cidades, dúvidas e contato |
| src/components/Footer.jsx | Rodapé e contatos |
| src/components/Overlays.jsx | Botão flutuante e janela da galeria |
| src/styles.css | Estilos originais e regras responsivas |
| src/interactions.js | WhatsApp, menu e galeria |
| src/assets | Todas as seis imagens usadas pelo site, incluindo logomarca |
| vite.config.js | Caminho base e configuração Vite |
| .github/workflows/deploy.yml | Publicação automática |

Edite os arquivos e envie um commit à main. O GitHub Actions instala as dependências, recompila e republica automaticamente. Você não precisa reconstruir o projeto do zero nem enviar dist manualmente. Alterações locais só aparecem online após serem enviadas ao GitHub.

As fotos são importadas pelo Vite, que gera os caminhos corretos incluindo a base e nomes versionados. Não troque por caminhos absolutos como `/assets/foto.webp`. Os links das seções usam âncoras e não precisam de React Router nem de uma página 404 de redirecionamento.

Caso renomeie o repositório, ajuste `base` em vite.config.js. Para domínio próprio na raiz, mude a base para `/` e configure o domínio separadamente.

## 6. Validação e limites

- Compilação de produção executada com sucesso.
- CSS preservado byte a byte em relação ao site original, incluindo os breakpoints mobile, foco de teclado e movimento reduzido.
- Seis arquivos WebP conferidos com os originais.
- Imagens e caminhos verificados sob `/site-ingrid-nocetti/`.
- Galeria ampliável, fechamento e perguntas frequentes testados no navegador.
- WhatsApp mantém número, mensagem e abertura em nova aba. Instagram e e-mail preservados.
- O workflow foi preparado, mas não executado no GitHub: não foi possível criar o repositório com a conexão disponível. A publicação final e sua URL dependem do envio e da ativação de Pages.
- As fontes continuam vindo do Google Fonts como na versão original, com fontes alternativas caso não carreguem.
- Não inclui backend, cadastro, banco de dados ou coleta de dados clínicos.
- Preserve as proteções de identidade presentes nas fotos. Dados de convênios e clínica devem ser confirmados antes de incluídos.
