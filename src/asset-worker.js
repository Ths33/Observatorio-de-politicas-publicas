import { methodologyMarkdown } from './methodology-content.js';

export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (pathname === '/politicas-publicas/skill.md' || pathname === '/skill.md') {
      return new Response(request.method === 'HEAD' ? null : methodologyMarkdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'no-cache, must-revalidate',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
