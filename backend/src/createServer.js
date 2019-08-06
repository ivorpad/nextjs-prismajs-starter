const { GraphQLServer } = require('graphql-yoga');
const db = require('./db');
const path = require('path');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation');
const { verify } = require('jsonwebtoken');
var waitOn = require('wait-on');

function getUserId(token, secret) {
  return new Promise((resolve, reject) => {
    console.log(token)
    if (!token) reject("Token invalid or missing")

    const { user_id } = verify(token, secret);
    resolve(user_id)
  })
}

const server = () => {
  return new GraphQLServer({
    typeDefs: path.join(__dirname, './schema.graphql'),
    resolvers: { Query, Mutation },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: async ({ request, response }) => {

      const token = request.cookies.token;

      let user = await getUserId(token, process.env.JWT_SECRET);

      return { db, request, response, user }
    }
  })
}

module.exports = server;