const { Prisma } = require('prisma-binding');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config()

const db = new Prisma({
  typeDefs: path.join(__dirname, '../generated/prisma-client/dataschema.graphql'),
  endpoint: "http://localhost:4466",
  secret: `${process.env.PRISMA_MANAGEMENT_API_SECRET}`,
  debug: false
})

module.exports = db;