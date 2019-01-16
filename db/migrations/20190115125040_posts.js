exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('posts', table => {
      table.uuid('id').primary()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table.text('content').notNull()
      table.uuid('userId').notNull()
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('posts')])
}
