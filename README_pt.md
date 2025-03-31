# Client Franq (Teste)

Esse é um projeto para realização de um teste em processo seletivo para posição de Engenheiro Front End.

## Sobre o teste

### Requisitos funcionais

[X] Conectar a aplicação à API https://hgbrasil.com/status/finance/ e buscar dados da cotação de 10 itens (moedas, ações, etc.);
[X] Deve haver uma tela inicial de login, e caso o usuário não possua cadastro, deve realizar o cadastro e persistir o usuário em local storage;
[X] Para navegar na aplicação, o usuário deve estar autenticado, portanto, deve-se verificar se o tempo de sessão ainda está ativo, e quando for inativo, o usuário deve ser deslogado e levado novamente para a tela de login;
[X] O usuário deve ser capaz de visualizar todas as cotações;
[X] Se avariação diária for positiva o valor deve ficar em verde, se negativa deve ficar em vermelho;
[X] O usuário deve ser capaz de selecionar um elemento e observar a evolução dos preços a partir da inicialização da aplicação em um gráfico;

### Requisitos projeto

[X] Deve ser responsivo;
[X] Utilizar biblioteca ou framework front end. Aqui utilizamos Vue.js, mas não se prenda a isso. Utilize a que conhece melhor, React, Angular, etc… tanto faz;
[X] A aplicação deve ser hospedada em um serviço da nuvem (heroku, aws, azure ou qualquer outra infraestrutura);

#### Forma de entrega

Junto com o link do código (github, bitbucket, etc.) deve ser enviada uma url do projeto rodando (heroku, aws, azure ou qualquer outra infraestrutura).

## Sobre o projeto

O projeto foi pautado em chegar em um MVP sem overengineering. O trabalho foi dividido em sessões que variaram de meia hora a 4 horas, ao longo de 4-5 dias. O projeto foi iniciado com um [serviço](https://github.com/ottaviocoelho/server-franq) para fazer a ponte à API indicada.

##### Por que não foi feita a identidade visual tal qual a empresa alvo do teste?

Foi fornecido uma imagem de banner para suposta utilização no projeto. Como não estava nos requisitos eu decidi não implementar por questão de priorização. Apesar disso tenho vontade sim de adotar a identidade visual aqui no projeto por questão estética.

##### Por que os dados não foram persistidos entre sessões?

Aqui ficou um pouco estranho. O requisito diz "a partir da inicialização da aplicação" isso é desde o client renderizar e montar a aplicação, ou desde o serviço que serve a aplicação começar a rodar? Ou desde o serviço que faz a ponte (não contemplado nos requisitos) inicializou? Eu julguei que aqui entra também uma decisão de negócio, como a partir de quando vamos mostrar os dados? É pra guardar os dados o tempo todo? Deveria ter filtro? Porque se não tiver, ou mostraria apenas do dia, ou desde sempre, o que se torna imprático ao longo de dias.

Minha key da API também não comporta nem um dia todo de requisições, então é imprático de qualquer forma.

De qualquer maneira, a partir do que ja existe no projeto hoje, persistir através de localStorage ou indexedDB é mais trivial do que responder essas perguntas.

##### Por que Taxes não tem uma tela de foco e gráfico como os outros?

Até onde eu testei, Taxes tem dados diários, então entra nas perguntas da questão anterior.

##### Por que não Pinia?

Cogitei, porém pela simplicidade eu julguei que provide/inject ja supria o que eu precisava

### Próximos Passos

[] Testes unitários
[] Identidade visual da empresa alvo
[] Pesquisa de item por símbolo
[] Persistir dados localmente\*

\*Talvez

