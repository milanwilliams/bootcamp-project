const BaseModel = require('./BaseModel')
const { User } = require('./User')

class Post extends BaseModel {
  static get tableName() {
    return 'posts'
  }
  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'posts.userId',
          to: 'user.id',
        },
      },
    }
  }
}

module.exports = { User, Post }
