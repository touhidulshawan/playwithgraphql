import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} from "graphql";

import _ from "lodash";

// dummy data
let books = [
  { id: "1", name: "Name of the Wind", genre: "Fantasy", authorID: "1" },
  { id: "2", name: "The Final Empire", genre: "Fantasy", authorID: "2" },
  { id: "3", name: "The Long Earth", genre: "Sci-Fi", authorID: "3" },
];

let authors = [
  { id: "1", name: "Patrick Rothfuss", age: 46 },
  { id: "2", name: "Brandon Sanderson", age: 44 },
  { id: "3", name: "Terry Pratchett", age: 68 },
];

// data type of book
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.id });
      },
    },
  }),
});

// data type of author
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// how initialy jump on graph
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get dasta from db/other source
        return _.find(authors, { id: args.id });
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

export default schema;