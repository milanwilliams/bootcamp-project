exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('hobbies', table => {
      table.uuid('id').primary()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table.enu('hobby', [
        'SPORTS',
        'ARTS',
        'MUSIC',
        'READING',
        'TRAVEL',
        'DINING',
        'CODING',
      ])
      table.uuid('userId').notNull()
    }),
  ])
}
exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('hobbies')])
}
