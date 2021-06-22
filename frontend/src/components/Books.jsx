import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/GetQueries";
import Loader from "./Loader";

const Books = () => {
  const { loading, data } = useQuery(GET_BOOKS);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {data.books.map((book) => (
            <li key={book.id}>
              <p>{book.name}</p>
              <small>{book.genre}</small>
              <blockquote>{book.author.name}</blockquote>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Books;
