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

export const GET_BOOK = gql`
  query GET_BOOK_WITH_AUTHOR_WITH_BOOKS($id: ID!) {
    book(id: $id) {
      name
      genre
      author {
        name
        books {
          id
          name
        }
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

export const ADD_AUTHOR = gql`
  mutation ADD_AUTHOR($name: String!, $age: Int) {
    addAuthor(name: $name, age: $age) {
      name
    }
  }
`;
