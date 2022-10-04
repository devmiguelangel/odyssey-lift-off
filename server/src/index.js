const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// Mocks
const mocks = require('./mocks');

// Apollo server
const server = new ApolloServer({
  typeDefs,
  mocks,
});

// Server listening
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
})
