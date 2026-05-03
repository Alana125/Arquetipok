# Arquetipo - App de Quizzes

## O que Foi Feito

Este repositório contém a implementação completa do aplicativo **Arquetipo**, um app de quizzes temáticos mobile-first inspirado em um UI kit de app de quiz.

### Documentação Criada
- **`Especificacao_Arquetipo.md`**: Documento completo de especificação do sistema, incluindo:
  - Visão geral do app e suas funcionalidades.
  - Descrição detalhada do que o sistema deve fazer.
  - Funcionalidades principais (seleção de quiz, execução, resultados).
  - Entradas e saídas esperadas.
  - Regras e limitações técnicas e de design.
  - Estrutura técnica com React, JSX e CSS.

### Implementação Completa
- **Estrutura do Projeto**:
  - `index.html`: Arquivo HTML principal.
  - `src/main.jsx`: Ponto de entrada do React.
  - `src/App.jsx`: Componente principal gerenciando navegação baseada em estado.
  - `src/components/`: Componentes reutilizáveis (Header, BottomNav, SearchInput, CategoryCard, QuizCard, LeaderboardItem, Avatar, Button).
  - `src/screens/`: Telas principais (Discover, QuizDetail, PlayQuiz, Leaderboard, Profile).
  - `src/data/quizzes.json`: Dados dos quizzes em JSON, incluindo 6 quizzes com múltiplas perguntas e categorias.
  - `src/styles.css`: Estilos CSS mobile-first com design system roxo, responsivos.
  - `package.json`: Dependências do projeto React com Vite.
  - `vite.config.js`: Configuração do Vite.

- **Funcionalidades Implementadas**:
  - **Discover**: Busca de quizzes, categorias horizontais, lista de quizzes em cards.
  - **QuizDetail**: Detalhes do quiz selecionado, botões para jogar solo ou com amigos.
  - **PlayQuiz**: Execução do quiz com perguntas, opções múltipla escolha, progresso e pontuação.
  - **Leaderboard**: Ranking semanal/geral com lista de usuários.
  - **Profile**: Perfil do usuário com avatar, estatísticas e badges.
  - Navegação baseada em estado (sem React Router).
  - Design mobile-first (max-width 420px), responsivo.
  - Dados mockados para usuários, quizzes e ranking.
  - Sistema de pontuação e cálculo de resultados.

### Design System
- **Cor Primária**: #6C5CE7 (roxo)
- **Fundo**: #F5F6FA
- **Cards**: Branco com sombra suave
- **Bordas**: Arredondadas (12px–20px)
- **Estilo**: Minimalista, moderno, mobile-first

### Quizzes Incluídos
1. Casa de Harry Potter (Entretenimento)
2. Fleumático ou Não (Personalidade)
3. Profissões (Carreira)
4. Filho de Qual Deus Grego (Mitologia)
5. Qual Super-Herói Você Seria? (Entretenimento)
6. Qual Animal Espiritual Você É? (Personalidade)

### Como Executar
1. Instale as dependências: `npm install`
2. Execute o servidor de desenvolvimento: `npm run dev`
3. Abra o navegador em `http://localhost:5173` (ou a porta indicada)

### Tecnologias
- **React** com JSX (componentes funcionais, hooks)
- **CSS** puro (sem bibliotecas externas)
- **Vite** para build e desenvolvimento
- Dados em **JSON** local

O app está completo, funcional e pronto para uso ou expansão!
- **Estrutura de Dados**: Desenvolver arquivos JSON com perguntas para cada quiz.
- **Lógica de Cálculo**: Implementar scripts para pontuar respostas e determinar resultados.
- **Design Visual**: Aplicar paleta roxa/lilás conforme especificado.
- **Testes**: Validar funcionalidade e responsividade.

O projeto está em fase inicial de planejamento. Qualquer contribuição ou feedback é bem-vindo!