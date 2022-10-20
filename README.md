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

## uso de rotas com a lib react-router-dom (vs5)

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
