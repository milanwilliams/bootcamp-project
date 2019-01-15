const BaseModel = require('./BaseModel')
const { Post } = require('./Post')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      posts: {
        relation: BaseModel.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          to: 'posts.userId',
        },
      },
    }
  }
}

module.exports = { User, Post }
