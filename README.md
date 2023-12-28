# 🐾 Dogs Social Network

Este projeto é uma rede social para amantes de cachorros, desenvolvida com [Vite.js](https://vitejs.dev/) e implantada no [Vercel](https://vercel.com/).

# 📚 Visão Geral
O Dogs Social Network é uma aplicação web interativa que permite aos usuários compartilhar fotos de seus cachorros, interagir com outras postagens por meio de comentários, e criar uma comunidade amigável de amantes de cães.

## 📸 Imagens do Projeto
![CPT2312281315-875x727](https://github.com/alequissandrara/Dogs/assets/70325643/ca25681a-b056-41d2-ba54-4443c589201c)
![image](https://github.com/alequissandrara/Dogs/assets/70325643/776b0eda-4f1d-425e-934e-eed62bc48cb7)
![image](https://github.com/alequissandrara/Dogs/assets/70325643/21016445-fa93-43b3-a317-c79a7dfacb8f)




## 🌐 Acesse o Projeto

A aplicação está implantada e pode ser acessada em [https://dogs-cwhawk7jb-alequissandraras-projects.vercel.app/](https://dogs-cwhawk7jb-alequissandraras-projects.vercel.app/).
## 🌐 API

O Dogs Social Network utiliza a WordPress REST API Dogs para recuperar dados relacionados a cachorros. O endpoint para teste pode ser acessado em [https://dogsapi.origamid.dev/json/](https://dogsapi.origamid.dev/json/). Os dados serão reiniciados a cada 10 minutos.

**Usuário Padrão para Teste:**
- Usuário: `dog`
- Senha: `dog`

## 📁 Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar a manutenção e adição de novos recursos. Algumas das principais pastas incluem:

- `src/components`: Componentes reutilizáveis da aplicação.
- `src/pages`: Páginas da aplicação, cada uma correspondendo a uma rota específica.
- `src/utils`: Utilitários e funções auxiliares.

## 🚀 Funcionalidades Principais

- Autenticação de usuário com validação de token.
- Feed de fotos com suporte a rolagem infinita.
- Perfis de usuário personalizados.
- Comentários em postagens.
- Exclusão de fotos e contas de usuário.
- Recuperação de senha.

## 🛠️ Configuração

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Em seguida, clone o repositório e execute os seguintes comandos:
```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

## 🌐 Acesso Local

A aplicação estará disponível em http://localhost:5173/.

