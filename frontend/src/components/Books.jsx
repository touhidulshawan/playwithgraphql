import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/GetQueries";
import { useState } from "react";
import ShowBookDetails from "./ShowBookDetails";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookID, setBookID] = useState(null);

  if (loading) return "Loading....";
  if (error) return `Error: ${error.message}`;

  return (
    <div className="grid grid-cols-2">
      <div className="min-w-96 my-4 px-2">
        <ul className="grid grid-cols-2 gap-4">
          {data.books.map((book) => (
            <li
              className="bg-blue-200 text-blue-900 p-2 border-b-4 border-r-4 border-blue-400 shadow-sm rounded-sm cursor-pointer"
              key={book.id}
              onClick={() => setBookID(book.id)}
            >
              {book.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ShowBookDetails bookID={bookID} />
      </div>
    </div>
  );
};
export default Books;
