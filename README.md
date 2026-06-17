# Arquetipo

Aplicação SPA em React para descoberta pessoal através de quizzes interativos.

## Rodando localmente

Instale dependências e rode em modo de desenvolvimento:

```bash
npm install
npm run dev
```

O app usa Vite e abre em `http://localhost:5173` por padrão.

## Estrutura importante

- Specs e documentação: [specs](specs)
  - [requirements.md](specs/requirements.md)
  - [tasks.md](specs/tasks.md)
  - [design.md](specs/design.md)
  - [firebase.md](specs/firebase.md)
  - [pages.md](specs/pages.md)
- Código fonte: `src/`
  - Páginas principais: `Landing`, `Login`, `Discover`, `QuizDetail`, `PlayQuiz`, `Result`, `Leaderboard`, `Profile` (veja [src/](src)).

## Estado do Firebase

Existe `.env.example` com chaves `VITE_FIREBASE_*`. Atualmente não há `src/config/firebase.js` nem uso do SDK no código — o sistema usa `localStorage` para autenticação simulada e perfil do usuário. Consulte [specs/firebase.md](specs/firebase.md) para passos de integração.

## Notas rápidas
- Dados de quizzes: `src/data/quizzes.json` (fonte atual).
- Autenticação e perfil: implementados via `localStorage` (`arquetipoAuth`, `arquetipoUser`, `arquetipoLoggedIn`).
- Para ativar Firebase, adicione suas credenciais em `.env` e implemente `src/config/firebase.js` seguindo as instruções em `specs/firebase.md`.

## Contato
Para dúvidas ou contribuições, abra uma issue ou PR neste repositório.
