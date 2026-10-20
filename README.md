# taleshenrique.dev

Vite + React + Tailwind 4 + Motion (framer-motion) + Radix/shadcn-style components.

## Rotas
- `/` — apresentação pessoal e link de contato para contato@taleshenrique.dev.
- `/politicas-publicas/` — landing page do Observatório de Políticas Públicas.
- `/politicas-publicas/skill.zip` — download da Skill.

## Desenvolvimento
`npm install` e `npm run dev`. Build: `npm run build` (saída `dist/`).

## Cloudflare Pages
Crie um projeto Pages com diretório de saída `dist`, faça upload dos arquivos compilados ou conecte um repositório Git e associe o domínio `taleshenrique.dev` ao projeto. A migração exige ajustar o DNS do domínio existente. Não publique apenas o ZIP do código-fonte como se fosse um build estático.

## SEO
O build Vite gera `dist/index.html` (homepage) e `dist/politicas-publicas/index.html` (Observatório), cada um com título, descrição, canonical, Open Graph e JSON-LD próprios. Os arquivos `robots.txt` e `sitemap.xml` são copiados de `public/`.

Depois do deploy, valide em https://search.google.com/test/rich-results e https://search.google.com/search-console; envie `https://taleshenrique.dev/sitemap.xml` ao Search Console. JSON-LD não garante rich results ou posições no Google.

## Google Tag Manager (GTM)
1. Crie um contêiner Web em https://tagmanager.google.com/ e copie o ID no formato `GTM-XXXXXXX`.
2. No Cloudflare Pages, acesse **Settings → Environment variables** (ou **Variables and Secrets**, conforme a interface) e crie `VITE_GTM_ID` com esse ID para **Production**. Se necessário, configure também Preview.
3. Faça um novo deploy: o Vite insere automaticamente o script GTM no `<head>` e o fallback `<noscript>` logo após `<body>` nas duas páginas. Sem a variável, nada é inserido.
4. Valide com Tag Assistant / Preview do GTM e publique seu contêiner.

**Privacidade:** antes de habilitar tags que usem cookies ou rastreamento não essencial, implemente um mecanismo de consentimento apropriado e configure Consent Mode no GTM conforme sua política de privacidade e LGPD. Não adicione Google Analytics duas vezes (diretamente e via GTM).
