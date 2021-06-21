import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";
import { find } from "lodash";

// dummy data
let books = [
  { id: "1", name: "Name of the Wind", genre: "Fantasy" },
  { id: "2", name: "The Final Empire", genre: "Fantasy" },
  { id: "3", name: "The Long Earth", genre: "Sci-Fi" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

// how initialy jump on graph
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db/other source
        return find(books, { id: args.id });
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

export default schema;
