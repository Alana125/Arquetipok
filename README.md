# Arquetipo - App de Quizzes

## Melhorias Recentes (2024)

### 🔐 Autenticação e Segurança
- ✅ **Firebase Authentication**: Sistema completo de login/registro com email e senha
- ✅ **Proteção de Rotas**: Rotas autenticadas protegidas, redireciona para login quando necessário
- ✅ **Logout**: Botão de logout na header com sair seguro
- ✅ **Contexto de Autenticação**: `AuthContext` centraliza estado de autenticação

### 📱 Navegação Simplificada
- ✅ **Remover "Descobrir"**: Removido da navegação principal, pois é redundante com a barra de pesquisa
- ✅ **Avatar Clicável**: Avatar na header agora é um botão que leva ao perfil
- ✅ **Navegação Limpa**: Header mostra apenas "Ranking" e "Perfil"
- ✅ **BottomNav Simplificada**: Navegação móvel reduzida para itens essenciais

### 👤 Perfil do Usuário Melhorado
- ✅ **Upload de Foto**: Funcionalidade de upload de imagem de perfil
- ✅ **Firebase Storage**: Fotos armazenadas no Firebase Storage
- ✅ **Persistência**: Dados do usuário salvos no Firestore
- ✅ **UI Intuitiva**: Clique no avatar para trocar a foto

### 🎮 Quiz Simplificado
- ✅ **Remover "Jogar com Amigos"**: Funcionalidade removida de `QuizDetail.jsx`
- ✅ **Renomear para "Jogar"**: Botão renomeado de "Jogar Solo" para "Jogar"

### 🔍 Pesquisa Melhorada
- ✅ **Botão Limpar**: Adicionar ✕ para limpar a busca rapidamente
- ✅ **UX Aprimorada**: Melhor feedback visual na busca
- ✅ **Funcionamento Completo**: Filtragem em tempo real por título, descrição e categoria

### 🔥 Integração Firebase
- ✅ **Firebase Auth**: Email/Senha, gerenciamento de usuários
- ✅ **Firebase Firestore**: Armazenamento de dados do usuário
- ✅ **Firebase Storage**: Armazenamento de fotos de perfil
- ✅ **Configuração Fornecida**: Arquivo `FIREBASE_SETUP.md` com instruções completas

### 📋 Qualidade de Código
- ✅ **Componentes Não Utilizados Identificados**: CategoryCard.jsx, Quiz.jsx, QuizSelector.jsx
- ✅ **Responsividade**: Mobile-first, testado em desktop e mobile
- ✅ **Loading States**: Spinner de carregamento durante autenticação

---

## O que Foi Feito (Original)

Este repositório contém a implementação completa do aplicativo **Arquetipo**, um app de quizzes temático mobile-first inspirado em um UI kit de app de quiz.

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
  - `src/screens/`: Telas principais (Discover, QuizDetail, PlayQuiz, Leaderboard, Profile, Login).
  - `src/contexts/`: Contexto de autenticação (`AuthContext.jsx`)
  - `src/config/`: Configuração do Firebase (`firebase.js`)
  - `src/data/quizzes.json`: Dados dos quizzes em JSON, incluindo 6 quizzes com múltiplas perguntas e categorias.
  - `src/styles.css`: Estilos CSS mobile-first com design system roxo, responsivos.
  - `package.json`: Dependências do projeto React com Vite.
  - `vite.config.js`: Configuração do Vite.

- **Funcionalidades Implementadas**:
  - **Login**: Página de autenticação com Firebase Auth
  - **Discover**: Busca de quizzes, barra de pesquisa funcional, lista de quizzes em cards.
  - **QuizDetail**: Detalhes do quiz selecionado, botão "Jogar".
  - **PlayQuiz**: Execução do quiz com perguntas, opções múltipla escolha, progresso e pontuação.
  - **Leaderboard**: Ranking semanal/geral com lista de usuários.
  - **Profile**: Perfil do usuário com avatar clicável, upload de foto, estatísticas e badges.
  - Navegação baseada em estado (sem React Router).
  - Design mobile-first (max-width 420px), responsivo.
  - Sistema de pontuação e cálculo de resultados.
  - Autenticação com Firebase
  - Armazenamento em Firestore e Storage

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

## Como Usar

### 1. Instalar Dependências
```bash
npm install
npm install firebase
```

### 2. Configurar Firebase
Siga o arquivo `FIREBASE_SETUP.md` para configurar suas credenciais do Firebase.

### 3. Executar Desenvolvimento
```bash
npm run dev
```

### 4. Build para Produção
```bash
npm run build
```

---

## Arquivos Principais

- **`src/App.jsx`**: Componente raiz com gerenciamento de estado
- **`src/contexts/AuthContext.jsx`**: Contexto de autenticação global
- **`src/config/firebase.js`**: Configuração do Firebase
- **`src/screens/`**: Telas principais da aplicação
- **`src/components/`**: Componentes reutilizáveis
- **`src/styles.css`**: Estilos globais da aplicação
- **`FIREBASE_SETUP.md`**: Guia de configuração do Firebase
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