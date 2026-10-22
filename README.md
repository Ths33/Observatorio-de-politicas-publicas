# Tales Henrique — Site institucional

Base limpa em **Astro** (site estático), pronta para desenvolvimento.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Saída: `dist/`. Deploy atual via Cloudflare Workers: `npm run build` e `npx wrangler deploy`.

## Estrutura

- `src/pages/`: rotas Astro
- `src/layouts/`: layouts reutilizáveis
- `public/`: arquivos estáticos
- `astro.config.mjs`: configuração Astro
- `wrangler.jsonc`: publicação de assets estáticos via Cloudflare Workers

O projeto antigo foi retirado da branch principal. O histórico Git permanece recuperável.
