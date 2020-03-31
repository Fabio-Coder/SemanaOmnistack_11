# SemanaOmnistack_11
###Exercícios desenvolvidos durante a semana omnistack 11 da rocketseat

##Lições aprendidas:

##Aula 01
###Back-end
>Regras de negócio;
>conexão com o banco de dados;
>envio de e-mail;
>Comunicacao com webservices;
>Autenticação do usuário;
>Criptografia e segurança

###JSON
>Estrutura de dados para troca de informações

###Entendendo o React
####Abordagem tradicional
>A cada requisição, o servidor retorna o conteúdo completo da página, com todo o HTML e CSS 
####Abordagem de SPA
>As requisições trazem apenas dados como respostas e, com esses dados o front-end pode preencher as informaçoes em tela.
>A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornando apenas JSON podemos ter quntos front-end quisermos.

###Entendendo o React Native
####Abordagem tradicional
> Criamos uma palicação para IOs (.ipa usando Objective-C ou Swift) e outra para Android (.apk usando Java ou Kotlin),e nesses casos, o trabalho se torna repetido tanto para riação quanto para as alterações no projeto.
####Abordagem React Native
>Todo o código feito em JavaScript, esse código não é convertido em código nativo, melhor do que isso, o dispositivo passa a entender o código JavaScript através do javascript core e a interface gerada pe totalmente nativa.
####Utilizando o Expo
>Sem o Expo, precismos instalar em nosso sistema tanto o Android Studio quanto o Xcode para obter os respectivos SDKs.
> Com o Expo, nós instalamos um aplicativo no celular chamado Expo, e, dentro dele, tudo o que precisamos para desenvolver o React Native já está instalado, como as APIs de mapas, câmera, etc..



##Aula 02
Os arquivos de migrations do knex foram criados conforme o default template, que funcionou no vídeo o Diego, mas não qui que havia erros de "knex did not return a promise".
Dessa forma precisei alterar as funções de exports.up de function para async, ficando assim:

```
exports.up = async (knex) => {
    return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name');
      table.string('email');
      table.string('whatsapp');
      table.string('city');
      table.string('uf', 2);
    })
  };
  ```
  > Em sistemas onde temos autenticação de usuários, não enviamos o id do usuário no corpo da requisição, mas sim no cabeçalho, toda a autenticação será enviada via request.headers.

##Terceiro  dia
Construindo a interface web

>JSX - Javascript XML - É o HTML integrado dentro do Javascript
> Um componente no React é uma função que retorna um html. Todos os componentes devem ter letra maiuscula na inicial.
>Propriedades




##Itens a estudar mais a fundo
>Arrow functions
>connection com KNEX

  
