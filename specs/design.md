# Documentação de Design

## Arquitetura geral
- SPA (Single Page Application) construída com React + Vite.
- Estado principal gerenciado no componente `App.jsx` (navegação por estado `currentScreen`).
- Persistência simples via `localStorage`.

## Estrutura de páginas
- `Landing` — primeira página com CTA para iniciar jornada.
- `Login` — formulário de login/cadastro local.
- `Discover` — listagem e busca de quizzes.
- `QuizDetail` — informações do quiz selecionado.
- `PlayQuiz` — execução das perguntas.
- `Result` — exibição do resultado.
- `Leaderboard` — ranking (mock).
- `Profile` — edição de perfil e upload local de avatar.

## Navegação
- Navegação controlada por estado no `App.jsx` via `currentScreen`.
- `Header` e `BottomNav` são exibidos quando não está em `landing`/`login`.

## Componentes reutilizáveis
- `Header`, `BottomNav`, `Avatar`, `Button`, `QuizCard`, `QuizSelector`, `SearchInput`, `LeaderboardItem`, `Mascot`.

## Layout
- Layout fluido com containers centrais e cards,
- Uso de CSS custom properties para espaçamentos e cores (arquivo `src/styles.css`).

## Responsividade
- Mobile-first adjustments presentes via media queries (ex.: esconder `bottom-nav` em telas >= 900px).
- Grades responsivas para lista de quizzes: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.

## Design System
- Variáveis principais (em `:root` em `styles.css`):
  - `--primary-color`: #6C5CE7
  - `--secondary-color`: #A29BFE
  - `--accent-color`: #FF9FF3
  - `--background-color`: #F5F6FA

## Cores
- Primária: `#6C5CE7` (gradientes entre `#6C5CE7` e `#A29BFE`).

## Tipografia
- Fonte: sistema (-apple-system, Segoe UI, Roboto, sans-serif)
- Tamanhos base: `font-size: 18px` no `body`.

## Estados da interface
- Loading: classes e spinner já definidas (`.loading-container`, `.loading-spinner`).
- Empty: mensagens de vazio em `Discover` quando busca não retorna itens.
- Error: mensagens simples exibidas em formulários (`Login`, `Profile`).

## Experiência do usuário (UX)
- Feedback imediatos para respostas (pequena animação e bloqueio temporário).
- Progresso do quiz com barra animada e porcentagem.
- Ações principais claramente destacadas com botões primários/secondários.

---
Observação: o design documenta o estado atual do CSS; melhorias (tokens, docs de componentes, Storybook) podem ser adicionadas como próximas tarefas.
