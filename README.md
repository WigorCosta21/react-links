# ReactLinks

ReactLinks é um projeto de aplicativo web que permite aos usuários criar uma lista de links personalizados com cores específicas e exibi-los em uma página pública. O projeto utiliza React para o frontend, Firebase para autenticação e banco de dados, e React Router para gerenciar as rotas.

<h2>Página home</h2>
<img src="https://github.com/WigorCosta21/servidor_estaticos/blob/main/home.jpg?raw=true" alt="Página home">
<br>
<hr>

<h2>Página login</h2>
<img src="https://github.com/WigorCosta21/servidor_estaticos/blob/main/login.jpg?raw=true" alt="Página login">
<br>
<hr>

<h2>Página admin</h2>
<img src="https://github.com/WigorCosta21/servidor_estaticos/blob/main/admin.jpg?raw=true" alt="Página admin">
<br>
<hr>

<h2>Página admin/social</h2>
<img src="https://github.com/WigorCosta21/servidor_estaticos/blob/main/admin-social.jpg?raw=true" alt="Página admin/social">
<br>
<hr>

## Funcionalidades

- Os usuários podem se autenticar através da página de login.
- Após autenticação, os usuários podem acessar a página de administração para cadastrar novos links.
- Os links cadastrados são exibidos na página pública, onde os usuários podem acessá-los.
- Os usuários também podem cadastrar links para suas redes sociais na página de configurações.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Firebase: Plataforma de desenvolvimento de aplicativos que fornece recursos de autenticação e banco de dados.
- React Router: Biblioteca de roteamento para criar aplicativos de página única com navegação.
- Tailwind CSS: Framework de design responsivo utilizado para estilização.

## Executando o Projeto

1. Clone o repositório: `git clone <URL_DO_REPO>`
2. Instale as dependências: `npm install`
3. Configure o Firebase: Substitua as configurações do Firebase em `src/services/firebaseConnections.js` com as suas próprias credenciais.
4. Execute o projeto: `npm start`

Certifique-se de que o Firebase esteja configurado corretamente para que a autenticação e o banco de dados funcionem conforme o esperado.

## Estrutura do Projeto

- `src/components`: Componentes reutilizáveis utilizados em várias páginas.
- `src/pages`: Páginas principais do aplicativo.
- `src/routes`: Configuração das rotas do React Router.

## Autor

Wigor - Curso Sujeito Programador

## Licença

Este projeto está licenciado sob a [Licença XYZ](link-para-licenca).
