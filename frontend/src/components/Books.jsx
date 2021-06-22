import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/GetQueries";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return "Loading....";
  if (error) return `Error: ${error.message}`;

  return (
    <div className="my-4 px-2">
      <ul className="grid grid-cols-2 gap-4">
        {data.books.map((book) => (
          <li
            className="bg-blue-200 text-blue-900 p-2 border-b-4 border-r-4 border-blue-400 shadow-sm rounded-sm cursor-pointer"
            key={book.id}
          >
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Books;
