# SemanaOmnistack_11
###Exercícios desenvolvidos durante a semana omnistack 11 da rocketseat

##Lições aprendidas:
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
  
  
