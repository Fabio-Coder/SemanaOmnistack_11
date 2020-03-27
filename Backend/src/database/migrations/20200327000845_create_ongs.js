
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
  exports.down = function (knex) {
    knex.schema.dropTable('ongs');
  };


