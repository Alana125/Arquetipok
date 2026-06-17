# Requisitos do Sistema

## Visão geral do sistema
Arquetipo é uma aplicação web SPA (React + Vite) para descoberta pessoal por meio de quizzes interativos. O app apresenta telas de entrada, navegação, seleção e execução de quizzes, resultados personalizados e perfil de usuário.

## Objetivo do projeto
Fornecer uma experiência leve e interativa para que usuários realizem quizzes, obtenham resultados personalizados e gerenciem um perfil simples.

## Público-alvo
- Usuários interessados em autoconhecimento e entretenimento (desktop e mobile).

## Problema que resolve
Facilitar o acesso a quizzes guiados com resultados explicativos, em uma interface moderna e responsiva.

## Requisitos Funcionais (RF)

RF01:
- Nome: Acesso à Landing
- Descrição: Exibir página inicial com chamada para iniciar jornada.
- Entrada: Clique no botão "Começar Jornada".
- Processo: Mostrar animação e redirecionar para login ou discover dependendo do estado.
- Saída: Navegação para tela `Login` ou `Discover`.

RF02:
- Nome: Autenticação local (localStorage)
- Descrição: Criar/entrar em conta usando armazenamento local (simulação de auth).
- Entrada: E-mail e senha (ou cadastro com nome, senha e confirmação).
- Processo: Validação básica e gravação em `localStorage` (`arquetipoAuth`, `arquetipoUser`, `arquetipoLoggedIn`).
- Saída: Usuário autenticado e navegado para `Discover`.

RF03:
- Nome: Listagem de quizzes
- Descrição: Mostrar lista de quizzes a partir de `src/data/quizzes.json` e permitir busca.
- Entrada: Acesso à tela `Discover` e termo de busca.
- Processo: Filtrar por título, descrição ou categoria.
- Saída: Lista de `QuizCard` filtrada ou estado vazio.

RF04:
- Nome: Detalhe do quiz
- Descrição: Exibir detalhes do quiz selecionado.
- Entrada: Seleção de quiz na lista.
- Processo: Mostrar `QuizDetail` com estatísticas e botão de jogar.
- Saída: Usuário pode iniciar o quiz.

RF05:
- Nome: Execução do quiz
- Descrição: Percorrer perguntas, acumular pontos por categoria e finalizar.
- Entrada: Respostas do usuário para cada pergunta.
- Processo: Atualizar estado local `scores`, feedback visual e progresso.
- Saída: Invocar callback `onComplete` com pontuação por categoria.

RF06:
- Nome: Resultado do quiz
- Descrição: Calcular e exibir resultado com porcentagem e descrição.
- Entrada: `scores` calculado ao final do quiz.
- Processo: Calcular total e porcentagem; exibir `Result` com opções de compartilhar e refazer.
- Saída: Visualização do resultado e ações disponíveis.

RF07:
- Nome: Perfil de usuário
- Descrição: Exibir e editar perfil local (nome, avatar, score, badges) e upload de avatar (Data URL local).
- Entrada: Interações no `Profile` (editar campos, enviar imagem).
- Processo: Validar e persistir em `localStorage` (`arquetipoUser`).
- Saída: Perfil atualizado e refletido na UI.

RF08:
- Nome: Ranking (Leaderboard)
- Descrição: Exibir ranking com dados mockados.
- Entrada: Acesso à tela `Leaderboard`.
- Processo: Mostrar tabs `Semanal`/`Geral` com dados mock.
- Saída: Lista de usuários ordenada.

## Requisitos Não Funcionais (RNF)
- RNF01: Aplicação cliente em SPA usando React + Vite.
- RNF02: Tempo de carregamento inicial aceitável (< 2s em conexões razoáveis).
- RNF03: Responsividade para Desktop / Tablet / Mobile (CSS media queries já presentes).
- RNF04: Persistência local via `localStorage` (dados de sessão e perfil).
- RNF05: Código organizado em componentes reutilizáveis.
- RNF06: Acessibilidade básica: estados visuais, foco em botões, labels em formulários.

## Regras de negócio
- Usuário pode criar conta local (simulada); caso já exista, login valida contra `localStorage`.
- Quizzes são carregados de `src/data/quizzes.json` e são fonte única de perguntas.
- Upload de avatar é mantido como Data URL no `localStorage` (não há backend configurado).

## Restrições do sistema
- Não há backend persistente configurado. Integração com Firebase está documentada, mas não implementada no código atual (`src/config/firebase.js` ausente).
- Dados sensíveis não devem ser commitados (variáveis de ambiente em `.env` não devem ser públicas).

## Critérios de aceitação
- Todas as telas listadas funcionam localmente conforme RFs.
- Fluxo de quiz registra pontuação e exibe resultado correto.
- Edição de perfil persiste em `localStorage`.

## Fluxos principais dos usuários
- Flow A: Visitante → Começar → (se não autenticado) Login → Discover → Selecionar Quiz → Jogar → Resultado.
- Flow B: Usuário autenticado → Discover → Perfil → Editar → Salvar.

## Casos de uso resumidos
- UC01: Fazer login / criar conta (local)
- UC02: Explorar quizzes e buscar
- UC03: Jogar quiz e ver resultado
- UC04: Editar perfil e upload de avatar

---
Observação: onde o projeto referencia Firebase em documentação antiga, marquei como "A definir" ou descrito como opcional, pois o código atual usa `localStorage`.
