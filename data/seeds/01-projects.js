
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'db_Sprint',
      description: 'finish this sprint',
      completed: false
    }
  ])    
};
