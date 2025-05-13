🛒 Fake Store App - Autenticação com JWT

Aplicação frontend desenvolvida com React, TypeScript e Vite, utilizando JWT para autenticação. A aplicação consome a Fake Store API para exibir produtos e seus detalhes. A interface é estilizada com Material UI, e as requisições HTTP são gerenciadas com Axios. As rotas são controladas utilizando React Router v6.

🚀 Tecnologias Utilizadas

React + Vite
TypeScript
Material UI
Axios
React Router v6
JSON Web Token (JWT)
🔐 Funcionalidades

Login com JWT: Autenticação utilizando username e password.
Rotas protegidas: Acesso restrito a determinadas páginas baseado na autenticação.
Listagem de produtos: Exibição de produtos disponíveis na Fake Store API.
Detalhes do produto: Visualização de informações detalhadas de cada produto.
Logout: Encerramento da sessão do usuário, removendo o token de autenticação.

🧪 Credenciais de Teste

Para testar a funcionalidade de login, utilize as seguintes credenciais fornecidas pela Fake Store API:

Username: mor_2314
Password: 83r5^_

📁 Estrutura de Pastas
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas da aplicação (Login, Produtos, Detalhes)
├── services/          # Configurações de serviços (ex: Axios)
├── App.tsx            # Componente principal com as rotas
├── main.tsx           # Ponto de entrada da aplicação

