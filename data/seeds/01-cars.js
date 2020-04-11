
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'abcde', make: 'Toyota', model: 'Tocoma', mileage: 45343},
        { VIN: 'bcdef', make: 'Toyota', model: 'Tundra', mileage: 10567},
        { VIN: 'cdefg', make: 'Toyota', model: 'Camry', mileage: 82350}
      ]);
    });
};
