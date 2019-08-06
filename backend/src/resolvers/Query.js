const { AuthenticationError } = require('apollo-server-core')

const Query = {
  posts: (_, args, ctx, info) => {

    if (!ctx.user) {
      throw new AuthenticationError('You must be logged in.')
    }

    return ctx.db.query.posts({}, info)
  },
  currentUser: async (_, args, ctx, info) => {
    
    if (!ctx.user) {
      throw new AuthenticationError('You must be logged in')
    }
    return await ctx.db.query.user({
      where: {
        id: ctx.user
      }
    }, info)

  },
  users: (_, args, ctx, info) => {

    if (!ctx.user) {
      throw new AuthenticationError('You must be logged in')
    }

    return ctx.db.query.users({}, info)
  }
}

module.exports = Query;