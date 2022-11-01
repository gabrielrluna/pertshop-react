# React: Projeto PetShop

Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).

Obs: Este projeto poderia ser criado também a partir do Vite.

## Execução do APP

Na 1ª vez, é necessário um 'npm install' para gerar node_modules (com dependências, etc)
Para executar, sempre usar 'npm start' e acesse 'localhost:3000'

## Sobre Módulos CSS

O uso de Módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.
Arquivos de módulo devem ser nomeados como `Componente.module.css`
A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`

## Sobre Media Query

### Mobile First

Telas a partir de X tamanho (min-width)

### Desktop First

Telas de até o tamanho X (max-width)

## Uso de rotas com a lib react-router-dom (vs5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib
   "import {BrowserRouter, Route, Switch} from "react-router-dom";

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um <Route>.

4. Os <Route> devem estar dentro de um <Switch> para que aconteça a troca entre componentes ao navegar.

**Obs:** Não coloque nada além de <Route> no <Switch>

### Menu.jsx

1. Importar o NavLink
   "import {NavLink} from "react-router-dom"

2. Substituir a tag <a> pelo <NavLink> e o atributo <href> por <to>

## Criação de um componente de interface chamado Caixa

Em vez de usar uma div em cada página agrupando conteúdos diferentes, isolamos ela num componente genérico (**Caixa**), aplicamos o CSS uma única vez usando módulo do componente, e programamos através de 'props' o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**)

**Dica:** Você pode usar **destructuring** de objetos nas 'props'.

### Instalação global do pacote JSON-SERVER

`npm install -g json-server`

Obs: Se tiver problmas para executar, utilize o **Node.JS command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

É necessário criar um arquivo.json em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raiz do PetShop). Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

### Execução do servidor da API

1. Usando de preferência o **Node.js command prompt**, acesse a pasta onde está o **nome-do-arquivo.json**
2. Execute o comando `json-server --watch nome-do-arquivo.json --port 2112`

Obs: O número da porta deve ser diferente de 3000 (que é padrão no json-server), pois esta porta já estará sendo usada pelo app **React**

Dica: no **package.json** do seu app, adicione em `scripts` uma nova propriedade chamada `api` valendo `json-server --watch nome-do-arquivo.json --port 2112`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessível através da URL _localhost:porta/nome-do-endpoint_

Exemplos:

http://localhost:2112/categorias
http://localhost:2112/posts
http://localhost:2112/contatos

## MUI: Biblioteca de componentes para React

## Para usar a API via rede local

### package.json

Altere a linha: `"api": "json-server --watch db.json --port 2112"`
Para: `"api": "json-server --host NUMERO.IP.DA.SUA.MAQUIA db.json --port 2112"`

Exemplo: `"api": "json-server --host 10.20.45.44 db.json --port 2112"`

### servidor.api.js

Duplique e comente a linha da constante atual (serverApi)
Na versão descomentada, substitua o `localhost` pelo `numero.ip.da.sua.maquina`
Pare a API no terminal e execute novamente `npm run api`
