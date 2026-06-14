# Configuração do Firebase

## Passos para Configurar o Firebase

### 1. Instalar Firebase SDK

```bash
npm install firebase
```

### 2. Criar Projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Clique em "Criar projeto"
3. Siga as instruções para configurar seu projeto

### 3. Obter Credenciais do Firebase

1. No Firebase Console, vá para "Configurações do Projeto"
2. Clique em "Seu aplicativo"
3. Selecione "</>" (Web)
4. Copie o objeto de configuração

### 4. Configurar o arquivo firebase.js

Atualize o arquivo `src/config/firebase.js` com suas credenciais:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seus-numeros",
  appId: "seu-app-id"
};
```

### 5. Configurar Firebase Authentication

1. No Firebase Console, vá para "Authentication"
2. Clique em "Começar"
3. Ative "Email/Senha" como método de login

### 6. Configurar Firestore Database

1. No Firebase Console, vá para "Firestore Database"
2. Clique em "Criar banco de dados"
3. Selecione "Modo de teste" (para desenvolvimento)
4. Selecione a localização
5. Aguarde a criação

### 7. Configurar Firebase Storage

1. No Firebase Console, vá para "Storage"
2. Clique em "Começar"
3. Aguarde a criação do storage

### 8. Configurar Regras de Segurança

**Firestore Rules** (Apenas para desenvolvimento):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

**Storage Rules** (Apenas para desenvolvimento):
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /avatars/{userId}/{allPaths=**} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

## Funcionalidades Implementadas

- ✅ **Autenticação com Firebase**
  - Login/Registro com email e senha
  - Proteção de rotas autenticadas
  - Logout

- ✅ **Perfil do Usuário**
  - Upload de foto de perfil
  - Persistência de dados no Firestore
  - Sincronização de dados com Firebase Storage

- ✅ **Navegação Simplificada**
  - Remover opção "Descobrir" da navegação
  - Avatar clicável para ir ao perfil
  - Botão de logout

- ✅ **Quiz**
  - Remover opção "Jogar com Amigos"
  - Manter apenas "Jogar"

- ✅ **Pesquisa**
  - Barra de pesquisa funcional
  - Botão para limpar a busca

## Próximas Etapas

- [ ] Adicionar tema escuro
- [ ] Implementar sincronização de pontuação em tempo real
- [ ] Adicionar compartilhamento de resultados em redes sociais
- [ ] Otimizar imagens e performance
- [ ] Adicionar testes unitários
