# Arquetipo - App de Quizzes

Aplicação web de quizzes interativos onde usuários podem responder perguntas, receber resultados e acompanhar seu desempenho.

O projeto foi desenvolvido com React e possui autenticação de usuários, sistema de quizzes, perfil e ranking.
---

## Funcionalidades

- Cadastro e login de usuários (simulado em localStorage)
- Proteção de acesso para usuários autenticados
- Criação e execução de quizzes
- Cálculo de resultados
- Visualização de ranking
- Perfil do usuário
- Upload de imagem de perfil local
- Pesquisa de quizzes por nome, descrição ou categoria

---

## Tecnologias Utilizadas

- React
- JavaScript (JSX)
- CSS
- Vite
- LocalStorage para persistência local
- Firebase: pacote instalado, mas não utilizado no código atual

---

## Estrutura do Projeto

Visão geral da organização do repositório e dos principais diretórios/arquivos.

- `index.html` - entrada estática do Vite.
- `package.json` / `package-lock.json` - dependências e scripts (dev, build, preview).
- `vite.config.js` - configuração do Vite.
- `.env.example` - variáveis de ambiente (ex.: chaves Firebase). Nunca commitar valores reais.
- `src/` - código-fonte principal:
	- `src/main.jsx` - bootstrap da aplicação.
	- `src/App.jsx` - componente raiz que controla navegação por estado.
	- `src/styles.css` - tokens e estilos globais / design system.
	- `src/data/quizzes.json` - fonte de dados atual dos quizzes (mock/local).
	- `src/components/` - componentes reutilizáveis (Avatar, Button, Header, QuizCard, Mascot, etc.).
	- `src/screens/` - páginas/rotas da aplicação (Landing, Login, Discover, QuizDetail, PlayQuiz, Result, Leaderboard, Profile).
	- `src/config/` *(opcional)* - local sugerido para `firebase.js` quando integrar SDK (atualmente não presente).
- `specs/` - documentação do projeto (requisitos, tasks, design, firebase, pages).
- `dist/` - saída gerada pelo build (`npm run build`).

Estrutura de alto nível exemplificada:

```
Arquetipok/
├─ specs/
│  ├─ requirements.md
│  ├─ tasks.md
│  ├─ design.md
│  ├─ firebase.md
│  └─ pages.md
├─ src/
│  ├─ components/
│  ├─ screens/
│  ├─ data/quizzes.json
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.example
├─ package.json
├─ vite.config.js
└─ README.md
```

Observações:
- O código atual usa `localStorage` para autenticação simulada e perfil do usuário (consultar `src/screens/Login.jsx` e `src/screens/Profile.jsx`).
- Para integrar Firebase: adicionar `src/config/firebase.js`, instalar `firebase` e configurar variáveis em `.env` conforme `specs/firebase.md`.


## Principais Páginas

### Login
Permite que o usuário entre ou crie uma conta.

### Discover
Exibe os quizzes disponíveis e permite pesquisar.

### QuizDetail
Mostra informações do quiz selecionado.

### PlayQuiz
Executa o quiz e registra as respostas.

### Result
Mostra o resultado final do usuário.

### Leaderboard
Apresenta o ranking dos usuários.

### Profile
Permite visualizar e editar informações do perfil.

---