const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  const user = await User.query().findbyID(args.id)
  return user
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args

  const Query = User.query()

  if (substr) {
    Query.where('name', 'LIKE', `%${substr}%`)
  }

  if (hometown) {
    Query.where('hometown', hometown)
  }

  if (house) {
    Query.where('house', house)
  }

  if (concentration) {
    Query.where('concentration', concentration)
  }

  if (hobbies) {
    Query.where('hobbies', hobbies)
  }

  const users = await Query
  return users
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
}

module.exports = resolver
