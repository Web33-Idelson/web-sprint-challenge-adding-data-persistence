exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'read tk', 
      notes: 'also watch tk videos',
      completed: false,
      project_id: 1
    }
  ])    
};