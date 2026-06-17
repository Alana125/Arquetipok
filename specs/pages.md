# Documentação de Páginas

Para cada página listada abaixo o conteúdo reflete o código atual em `src/screens`.

---

# Landing

## Objetivo
Recepcionar o usuário e incentivá-lo a começar a jornada de quizzes.

## Componentes
- `Mascot` (composição), layout da `landing`.

## Funcionalidades
- Exibir hero, estatísticas e botão "Começar Jornada" que inicia fluxo de autenticação ou navegação.

## Dados utilizados
- Não usa Firebase; conteúdo estático e estado local (`showWelcome`).

## Estados
- Loading: animação do welcome
- Empty: N/A
- Error: N/A
- Success: Redireciona para `Login` ou `Discover`.

## Responsividade
- Desktop: layout de três colunas
- Tablet/Mobile: empilhamento vertical, ajuste do `mascot` e botões.

---

# Login

## Objetivo
Permitir login/cadastro (simulado) e navegar para `Discover`.

## Componentes
- `Mascot`, formulários de input, botão.

## Funcionalidades
- Login com e-mail/senha (confere com `localStorage`).
- Cadastro que escreve `arquetipoAuth` e `arquetipoUser` em `localStorage`.

## Dados utilizados
- `localStorage` keys: `arquetipoAuth`, `arquetipoUser`, `arquetipoLoggedIn`.

## Estados
- Loading: `loading` boolean no componente.
- Error: mensagens para senha incorreta ou validação.

## Responsividade
- Formulário responsivo com layouts adaptados via `Login.css`.

---

# Discover

## Objetivo
Listar e permitir busca por quizzes.

## Componentes
- `SearchInput`, `QuizCard`, `Mascot`.

## Funcionalidades
- Busca por título, descrição e categoria.
- Seleção de quiz dispara `onQuizSelect` (navega para `QuizDetail`).

## Dados utilizados
- `src/data/quizzes.json` (fonte única atual).

## Estados
- Loading: N/A (dados locais)
- Empty: mensagem quando filtro não retorna quizzes
- Error: N/A
- Success: lista de cards exibida

## Responsividade
- Grid responsivo para cards (min-width 280px).

---

# QuizDetail

## Objetivo
Apresentar informações do quiz e iniciar execução.

## Componentes
- `Button` (para iniciar), exibição de stats.

## Funcionalidades
- Exibir título, descrição, número de perguntas, categoria e botão de jogar.

## Dados utilizados
- Recebe objeto `quiz` do `Discover`.

## Estados
- N/A (componente controlado por props)

## Responsividade
- Conteúdo centralizado; ajusta tipografia e espaçamento.

---

# PlayQuiz

## Objetivo
Executar perguntas sequenciais do quiz e calcular pontuação por categoria.

## Componentes
- `Button` e componentes nativos de opção.

## Funcionalidades
- Navegar entre perguntas, registrar opções, calcular `scores`, mostrar feedback visual e progresso.

## Dados utilizados
- `quiz.questions` do objeto `quiz`.

## Estados
- Loading: N/A
- Error: N/A
- Success: Ao finalizar, chama `onComplete(scores)`.

## Responsividade
- Layout vertical com botões adaptáveis para mobile.

---

# Result

## Objetivo
Exibir resultado calculado do quiz com porcentagem, detalhes e ações (refazer, compartilhar).

## Componentes
- `Mascot`, `Button`.

## Funcionalidades
- Mostrar título do resultado, descrição e porcentagem calculada.
- Compartilhar via Web Share API ou copiar texto para clipboard.

## Dados utilizados
- `quiz`, `result`, `score` (passados por props).

## Estados
- N/A (controlado por props)

## Responsividade
- Card de resultado escalável.

---

# Leaderboard

## Objetivo
Exibir ranking de usuários (mock data).

## Componentes
- `LeaderboardItem`.

## Funcionalidades
- Alternar entre tabs `Semanal` e `Geral` com dados mockados.

## Dados utilizados
- Array `mockUsers` definido no componente.

## Estados
- Tab ativa (`activeTab`)

## Responsividade
- Lista vertical com itens responsivos.

---

# Profile

## Objetivo
Exibir e permitir edição de perfil, incluindo upload de avatar (Data URL local).

## Componentes
- `Avatar`, `Button`.

## Funcionalidades
- Visualizar dados do usuário, editar campos, salvar em `localStorage`, selecionar imagem (FileReader → Data URL).

## Dados utilizados
- `localStorage` (`arquetipoUser`)

## Estados
- Editing mode, error messages, form state.

## Responsividade
- Formulário empilhado para mobile e layout em colunas para desktop.

---

Observação: onde houver integração futura com Firebase (autenticação, storage, firestore), marqueis como "A definir" até que `src/config/firebase.js` exista.
