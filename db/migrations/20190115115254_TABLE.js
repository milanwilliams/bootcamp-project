exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table
        .text('name')
        .notNull()
        .defaultTo('Milan')
      table
        .text('email')
        .notNull()
        .unique()
      table.text('password').notNull()
      table.datetime('birthday').notNull()
      table.text('concentration')
      table.text('hometown')
      table.enu('house', [
        'ADAMS',
        'QUINCY',
        'WINTHROP',
        'LOWELL',
        'LEVERETT',
        'ELIOT',
        'CABOT',
        'CURRIER',
        'PFOHO',
        'DUNSTER',
        'MATHER',
        'KIRKLAND',
        'DUDLEY',
        'FIRST-YEAR',
      ])
      table.text('gender')
      table.text('bio')
      table.text('picture')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('ideas')])
}
