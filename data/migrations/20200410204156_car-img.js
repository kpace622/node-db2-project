
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.text('img');
    })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('img');
  })
};
