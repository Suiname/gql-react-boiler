const { gql } = require('apollo-server-express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: ID
    username: String
    email: String
    type: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]
    me: User
  }
`;

module.exports = typeDefs;