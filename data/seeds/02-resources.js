exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'computer',
      description: 'asus computer',
    },
    {
      resource_name: 'keyboard',
      description: 'asus keyboard',
    },
    {
      resource_name: 'apartment',
      description: '1br in walnut creek',
    }
  ])    
};
