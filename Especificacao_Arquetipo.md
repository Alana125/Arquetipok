# Especificação do Sistema - Arquetipo

## Visão Geral
O **Arquetipo** é um aplicativo de quizzes interativos projetado para ajudar usuários a descobrir aspectos de sua personalidade, preferências e afinidades através de temas diversos e divertidos. Inspirado em universos fictícios e conceitos psicológicos/mitológicos, o app oferece uma experiência gamificada com perguntas envolventes e resultados personalizados.

## O que o Sistema Deve Fazer
O sistema deve fornecer uma plataforma para usuários responderem a quizzes temáticos, recebendo resultados baseados em suas respostas. O foco é na diversão, auto-descoberta e engajamento, com uma interface visual atraente e intuitiva.

### Funcionalidades Principais
1. **Tela de Seleção de Quiz**: Uma tela inicial onde o usuário pode escolher entre uma variedade de quizzes disponíveis.
2. **Execução do Quiz**: Para o quiz selecionado, apresentar perguntas sequencialmente, coletar respostas e calcular o resultado final.
3. **Exibição de Resultados**: Mostrar o resultado personalizado ao final do quiz, com explicações ou descrições relacionadas.
4. **Armazenamento de Perguntas**: Todas as perguntas e opções devem ser armazenadas em formato JSON para facilitar manutenção e expansão.
5. **Interface Visual**: Design predominantemente roxo com tons de lilás, para uma estética moderna e relaxante.

### Quizzes Incluídos (Exemplos)
- **Casa de Harry Potter**: Determina qual casa de Hogwarts o usuário pertence (Grifinória, Sonserina, Corvinal, Lufa-Lufa).
- **Fleumático ou Não**: Avalia se o usuário tem traços fleumáticos (temperamento calmo e equilibrado) ou outros temperamentos.
- **Profissões**: Sugere profissões adequadas com base em interesses e habilidades.
- **Filho de Qual Deus Grego**: Identifica afinidades com deuses gregos como Zeus, Atena, Ares, etc., baseado em características pessoais.
- Outros quizzes podem ser adicionados conforme expansão.

## Entradas
- **Seleção de Quiz**: O usuário escolhe um quiz da lista disponível na tela inicial.
- **Respostas às Perguntas**: Para cada pergunta, o usuário seleciona uma opção (múltipla escolha, verdadeiro/falso, ou escala Likert, dependendo do quiz).
- **Dados do Usuário**: Opcionalmente, nome ou outras informações para personalizar resultados (não obrigatório).

## Saídas
- **Resultado do Quiz**: Um resumo personalizado, como "Você pertence à Casa Grifinória!" ou "Você é filho de Zeus, deus do trovão!".
- **Explicação**: Breve descrição do porquê do resultado, com base nas respostas.
- **Pontuação ou Percentual**: Opcionalmente, mostrar pontuações ou percentuais para cada categoria.

## Regras e Limitações
### Regras
- **Formato das Perguntas**: Todas as perguntas devem ser definidas em arquivos JSON estruturados, com campos como `pergunta`, `opcoes`, `pontuacao` (para cada opção, associada a categorias de resultado).
- **Cálculo de Resultados**: Baseado em pontuação acumulada por categoria. A categoria com maior pontuação determina o resultado.
- **Interface**: Deve ser responsiva, funcionando em dispositivos móveis e desktop. Cores principais: roxo (#6A0DAD) e lilás (#C8A2C8).
- **Privacidade**: Não coletar dados pessoais sem consentimento; resultados são locais e não armazenados em servidor.
- **Engajamento**: Incentivar compartilhamento de resultados via redes sociais (opcional).

### Limitações
- **Número de Quizzes**: Inicialmente limitado a 4-5 quizzes; expansão futura via atualizações.
- **Tipo de Perguntas**: Foco em múltipla escolha (3-4 opções por pergunta) para simplicidade. Não suporta perguntas abertas ou imagens complexas.
- **Idioma**: Português brasileiro, com possibilidade de internacionalização futura.
- **Plataforma**: Web-based (HTML/CSS/JS), compatível com navegadores modernos. Não nativo para mobile inicialmente.
- **Performance**: Deve carregar rapidamente; limite de 10-15 perguntas por quiz para manter engajamento.
- **Acessibilidade**: Deve seguir padrões WCAG básicos, mas sem suporte avançado para deficientes visuais inicialmente.
- **Monetização**: Gratuito; sem anúncios ou compras in-app na versão inicial.

## Estrutura Técnica
- **Tecnologia**: React com JSX para componentes, CSS para estilos. Sem banco de dados; dados armazenados em JSON local.
- **Estrutura de Arquivos**:
  - `src/App.jsx`: Componente principal que gerencia o estado global (quiz selecionado, progresso).
  - `src/components/QuizSelector.jsx`: Tela de seleção de quiz, lista os quizzes disponíveis.
  - `src/components/Quiz.jsx`: Componente para executar o quiz, mostrar perguntas e coletar respostas.
  - `src/components/Result.jsx`: Exibe o resultado final com descrição.
  - `src/data/quizzes.json`: Arquivo JSON contendo todos os quizzes, perguntas, opções e pontuações.
  - `src/styles.css`: Estilos globais com paleta roxa/lilás.
- **Lógica de Cálculo**: No componente Quiz, acumular pontuações por categoria e determinar o resultado com maior pontuação.
- **Estado**: Usar useState do React para gerenciar progresso do quiz e seleções.
- **Responsividade**: CSS com media queries para mobile e desktop.
- **Build**: Usar Vite para desenvolvimento e build.

Este documento serve como base para o desenvolvimento do Arquetipo. Qualquer alteração deve ser documentada e aprovada.

## Modificações Recentes - Transformação para Desktop

### Visão Geral das Mudanças
O aplicativo foi transformado de uma interface mobile-first para um site desktop moderno, full-width e responsivo, mantendo a essência do conceito original mas adaptando-se às necessidades de usuários desktop.

### Mudanças de Layout e Design
1. **Layout Full-Width**: Removido o container centralizado de 420px, agora o conteúdo ocupa praticamente toda a largura da tela (até 1400px max-width).
2. **Grid Responsivo**: A listagem de quizzes agora usa CSS Grid com `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` para exibir múltiplas colunas (3-5 dependendo da tela).
3. **Header Desktop**: Navegação movida para o canto direito do header com botões "Descobrir", "Ranking" e "Perfil". Bottom navigation ocultada em telas maiores que 900px.
4. **Tipografia Aumentada**: Font-size base aumentado para 18px, títulos maiores (2.8rem para header, 2.6rem para seções), melhor legibilidade.
5. **Cards Maiores**: Quiz cards aumentados com padding de 32px, ícones de 96px, títulos em 1.6rem.
6. **Espaçamento Desktop**: Padding geral aumentado (32px-64px lateral), mais respiro entre seções (64px gaps).

### Remoções Mobile
- Filtros em formato de chips ("Roxo", "Azul", etc.) removidos
- Scroll horizontal de categorias removido
- Carrosséis desnecessários removidos
- Bottom navigation em desktop

### Estrutura Técnica Atualizada
- **CSS Variables**: Aumentados spacing variables (--spacing-xxl: 64px)
- **Header Component**: Reestruturado com `.header-right` para navegação no lado direito
- **Discover Screen**: Simplificado, removidos filtros complexos, foco na busca e grid
- **Landing Page**: Layout em grid com 2 colunas, max-width 1400px
- **Responsividade**: Mantida para mobile, mas otimizada para desktop

### Design System Atualizado
- **Cores**: Mantidas (roxo #6C5CE7, gradientes)
- **Sombras**: Aumentadas para desktop (--shadow-large: 0 10px 40px)
- **Border-radius**: Mantido (16px-24px)
- **Fonte**: Aumentada base para 18px, line-height 1.6

### Funcionalidades Mantidas
- Todos os quizzes originais preservados
- Lógica de cálculo de resultados intacta
- Navegação baseada em estado React
- Dados em JSON local
- Compartilhamento de resultados

### Performance e Compatibilidade
- Build com Vite mantido
- Compatibilidade com navegadores modernos
- Sem impacto negativo na performance mobile
- CSS Grid para layouts modernos

### Resultado Final
O Arquetipo agora oferece uma experiência visual ampla e fluida, similar a sites como Netflix ou Medium, aproveitando toda a tela disponível enquanto mantém a identidade visual roxa e o foco na auto-descoberta através de quizzes temáticos.