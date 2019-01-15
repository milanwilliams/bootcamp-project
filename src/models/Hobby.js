const BaseModel = require('./BaseModel')
const { User } = require('./User')

class Hobby extends BaseModel {
  static get tableName() {
    return 'hobbies'
  }

  static get relationMappings() {
    return {
      users: {
        relation: BaseModel.HasManyRelation,
        modelClass: User,
        join: {
          from: 'hobbies.userId',
          to: 'user.id',
        },
      },
    }
  }
}

module.exports = { User, Hobby }
