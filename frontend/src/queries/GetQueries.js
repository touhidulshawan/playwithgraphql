import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
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
