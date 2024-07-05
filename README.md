
# Refúgio Bíblico

Um simples site que permite aos usuários ler a Bíblia e tirar suas dúvidas sobre ela através da Inteligência Artificial 
do Gemini. Abaixo, você encontrará instruções detalhadas de como executar o projeto localmente ou se preferir você pode acessar a versão online deste repositório clicando [aqui](https://refugio-biblico.netlify.app/)

## Funcionalidades

- **Leitura da Bíblia**: Acesso a todos os livros, capítulos e versículos da bíblia.
- **Tirar Dúvidas**: Utilize a IA do Gemini para responder perguntas relacionadas à bíblia.
- **Navegação Simples**: Roteamento intuitivo utilizando React Router DOM.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápida e moderna para projetos JavaScript, especialmente focada em frameworks como React, Vue e Svelte.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **React Router DOM**: Biblioteca para gerenciamento de rotas em aplicações React.
- **Integração com a API Bíblia**: Api desenvolvida por mim com o propósito de fornecer acesso aos livros, capítulos e versículos da bíblia, você pode acessar o repositório desta Api clicando [aqui](https://github.com/valdirsantos714/api-biblia).

- **Gemini IA**: Tecnologia de Inteligência Artificial para responder perguntas sobre a bíblia.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**: Certifique-se de ter instalado o Node.js em sua máquina
- **Criar uma API Key na Ai Studio**: você pode criar clicando neste [link](https://ai.google.dev/aistudio?hl=pt-br) 
- **Substituir o campo `SUA_API-KEY`**: Substitua este campo pela sua Api Key, no arquivo `TelaDuvida.jsx`

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/valdirsantos714/refugio-biblico.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd refugio-biblico
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Abra o navegador e acesse:

   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

- `src/`
  - `Biblia/`: Pasta onde contém todas as telas da Bíblia.
  - `componentsPadrao/`: Componentes reutilizáveis da aplicação.
  - `TelaDuvida/`: Serviços para integração com a IA do Gemini e de configuração da Tela de tirar as Dúvidas do usuário.
  - `TelaInicial/`: Pasta onde comtém a Tela Inicial e seus componentes.
  - `main.jsx`: Componente principal com configuração de rotas.
  - `index.css`: Arquivo de estilização padrão da aplicação.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua funcionalidade: `git checkout -b minha-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adicionar nova funcionalidade'`
4. Faça push para a branch: `git push origin minha-funcionalidade`
5. Abra um pull request.


## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.
