import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const gtmId = env.VITE_GTM_ID?.trim();
  if (gtmId && !/^GTM-[A-Z0-9]+$/i.test(gtmId)) {
    throw new Error('VITE_GTM_ID must be a valid GTM-XXXXXXX container ID');
  }
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'optional-google-tag-manager',
        transformIndexHtml(html) {
          if (!gtmId) return html;
          const id = JSON.stringify(gtmId);
          const script = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${id});</script>`;
          const noscript = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
          return html.replace('</head>', script + '</head>').replace('<body>', '<body>' + noscript);
        }
      }
    ],
    build: { rollupOptions: { input: { main: resolve(process.cwd(), 'index.html'), observatorio: resolve(process.cwd(), 'politicas-publicas/index.html'), metodologia: resolve(process.cwd(), 'politicas-publicas/metodologia/index.html') } } }
  };
});