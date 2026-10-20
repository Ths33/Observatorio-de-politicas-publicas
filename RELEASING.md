# Versionamento e releases

A versão do Observatório segue SemVer: `MAJOR.MINOR.PATCH`. A fonte da versão é `package.json`; o rodapé mostra `vX.Y.Z` e os sete primeiros caracteres do commit **efetivamente compilado** (`CF_PAGES_COMMIT_SHA` no Cloudflare Pages; fallback `GITHUB_SHA` ou Git). A versão pode permanecer igual entre builds, mas o hash identifica cada publicação.

## Fluxo

1. Fazer alterações e revisar em `main`.
2. Alterar a versão em `package.json` (por exemplo `npm version patch --no-git-tag-version`) e registrar a mudança em commit.
3. Rodar `npm ci && npm run build` e confirmar que o deploy de `main` está funcionando.
4. Criar tag anotada no commit aprovado: `git tag -a v1.0.1 -m 'Release v1.0.1'`.
5. Publicar: `git push origin main && git push origin v1.0.1`.
6. GitHub Actions valida a correspondência da tag com `package.json`, executa o build e cria a GitHub Release com notas automáticas. A publicação do site continua a cargo do Cloudflare Pages.

Nunca mover uma tag publicada; criar nova versão para correções. `PATCH` para correção, `MINOR` para funcionalidade compatível, `MAJOR` para mudança incompatível. Não criar tag antes de verificar o commit que será lançado.

## Primeira release

A versão `1.0.1` foi definida no projeto. A tag e a Release precisam ser criadas sobre o commit final aprovado após verificação do build. O workflow não cria a tag automaticamente: ela é o ato explícito de aprovação da release.
