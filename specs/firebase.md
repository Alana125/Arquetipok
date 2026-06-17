# Integração Firebase (status e guia)

## Estado atual
- O repositório contém documentação e exemplos relativos ao Firebase (`.env.example`), mas não existe o arquivo `src/config/firebase.js` no código atual.
- O aplicativo, na sua versão atual, utiliza `localStorage` para autenticação simulada e armazenamento de perfil.

## Decisão
- Integração com Firebase: A definir. Todas as referências existentes na documentação antiga devem ser revistas antes de implementar.

## Arquivos/variáveis detectadas
- `.env.example` com chaves VITE_FIREBASE_* indicadas.

## Requisitos para integração (passos recomendados)
1. Instalar SDK: `npm install firebase`
2. Criar `src/config/firebase.js` com inicialização padrão: usar `import { initializeApp } from 'firebase/app'` e exportar `auth`, `firestore`, `storage` conforme necessidade.
3. Salvar credenciais em `.env` (Vite: `VITE_FIREBASE_*`) e nunca commitar `.env` com chaves reais.
4. Substituir fluxos de autenticação locais por Firebase Auth (Email/Password) e migrar persistência para Firestore.
5. Migrar uploads de avatar para Firebase Storage e ajustar regras de segurança.

## Estrutura sugerida de coleções (Firestore)

users:
{
  id: string (uid),
  name: string,
  email: string,
  avatarUrl: string,
  score: number,
  quizzesPlayed: number,
  badges: string[],
  createdAt: timestamp
}

quizzes: (opcional, se migrar do JSON)
{
  id,
  title,
  description,
  category,
  questions: [...]
}

## Regras de segurança (exemplos)
// Exemplo mínimo para permitir leitura pública de quizzes e regras restritas para usuários autenticados:
service cloud.firestore {
  match /databases/{database}/documents {
    match /quizzes/{doc} {
      allow read: if true;
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}

## Integração com frontend
- Adicionar `src/config/firebase.js` e importar `auth`, `firestore`, `storage` nos componentes que precisarem (Login, Profile, Discover).
- Usar variáveis de ambiente (`import.meta.env.VITE_FIREBASE_API_KEY`).

## Observações
- Até que a integração seja feita, manter o comportamento atual baseado em `localStorage` e marcar como "A definir" nos pontos de integração.
