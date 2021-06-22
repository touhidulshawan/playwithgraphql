import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/GetQueries";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return "Loading....";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Books;
