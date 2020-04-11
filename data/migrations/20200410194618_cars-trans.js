
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.text('transmission', 128)
      tbl.text('title status', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('transmission');
      tbl.dropColumn('title status');
  })
};
