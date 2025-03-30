# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

Requisitos funcionais

[X] Conectar a aplicação à API https://hgbrasil.com/status/finance/ e buscar dados da cotação de 10 itens (moedas, ações, etc.);
[X] Deve haver uma tela inicial de login, e caso o usuário não possua cadastro, deve realizar o cadastro e persistir o usuário em local storage;
[X] Para navegar na aplicação, o usuário deve estar autenticado, portanto, deve-se verificar se o tempo de sessão ainda está ativo, e quando for inativo, o usuário deve ser deslogado e levado novamente para a tela de login;
[X] O usuário deve ser capaz de visualizar todas as cotações;
[] Se avariação diária for positiva o valor deve ficar em verde, se negativa deve ficar em vermelho;
[] O usuário deve ser capaz de selecionar um elemento e observar a evolução dos preços a partir da inicialização da aplicação em um gráfico;

Requisitos projeto

[] Deve ser responsivo;
[X] Utilizar biblioteca ou framework front end. Aqui utilizamos Vue.js, mas não se prenda a isso. Utilize a que conhece melhor, React, Angular, etc… tanto faz;
[] A aplicação deve ser hospedada em um serviço da nuvem (heroku, aws, azure ou qualquer outra infraestrutura);
[] Junto com o link do código (github, bitbucket, etc.) deve ser enviada uma url do projeto rodando (heroku, aws, azure ou qualquer outra infraestrutura).

