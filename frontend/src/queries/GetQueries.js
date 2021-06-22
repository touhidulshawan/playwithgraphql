import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      name
      genre
      id
      author {
        name
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query GET_AUTHORS {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ADD_BOOK($name: String!, $genre: String!, $authorID: ID!) {
    addBook(name: $name, genre: $genre, authorID: $authorID) {
      name
    }
  }
`;
