import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../queries/GetQueries";

const ShowBookDetails = ({ bookID }) => {
  const { loading, data } = useQuery(GET_BOOK, {
    variables: { id: bookID },
  });

  if (!data && loading) {
    return (
      <p className="text-center mt-4 text-yellow-600 p-4 uppercase tracking-widest">
        Loading Book Details
      </p>
    );
  }

  if (!data) {
    return (
      <p className="text-center mt-4 text-red-600 p-4 uppercase tracking-widest">
        No Book Select Yet
      </p>
    );
  }

  return (
    <div className="bg-purple-100 p-4 min-h-screen">
      <div>
        <h3 className="text-2xl text-purple-900 inline-block">
          {data.book.name}
        </h3>
        <small className="text-xs bg-red-200 px-2 py-1 rounded-3xl font-bold text-red-700 inline ml-2">
          {data.book.genre}
        </small>
      </div>
      <blockquote className="text-pink-600 pb-2 border-b-2 border-purple-200 mb-2">
        {data.book.author.name}
      </blockquote>
      <div>
        <h4 className="text-lg text-purple-500">
          Other Books by the {data.book.author.name}
        </h4>
        <ul className="my-2">
          {data.book.author.books.map((book) => (
            <li
              key={book.id}
              className="text-base text-gray-800 list-inside list-disc py-1"
            >
              {book.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowBookDetails;
