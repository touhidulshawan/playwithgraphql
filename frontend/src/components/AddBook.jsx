import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/GetQueries";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);

  if (error) return <pre>{error.message}</pre>;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      addBook({
        variables: { name: bookName, genre: genre, authorID: authorID },
        refetchQueries: [{ query: GET_BOOKS }],
      });
    } catch (err) {
      alert("Please fill all data correctly", err.message);
    }

    setBookName("");
    setGenre("");
    setAuthorID("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <label className="text-gray-700 text-sm p-2" htmlFor="bookName">
          Book Name
        </label>
        <input
          className="bg-blue-100 px-2 text-blue-900"
          type="text"
          name="bookName"
          id="bookName"
          value={bookName}
          required
          onChange={(evt) => setBookName(evt.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="text-gray-700 text-sm  p-2" htmlFor="genreName">
          Genre
        </label>
        <input
          className="bg-blue-100 px-2 text-blue-900"
          type="text"
          name="genreName"
          id="genreName"
          value={genre}
          required
          onChange={(evt) => setGenre(evt.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="text-gray-700 text-sm p-2" htmlFor="author">
          Author
        </label>
        <select
          className="bg-gray-100 text-gray-800 border-2 border-gray-600 rounded"
          name="author"
          id="author"
          value={authorID}
          required
          onChange={(evt) => setAuthorID(evt.target.value)}
        >
          <option value="" className="bg-red-300 text-red-800 tracking-wider">
            Select Author
          </option>
          {loading ? (
            <option>Loading Authors Data</option>
          ) : (
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))
          )}
        </select>
      </div>
      <button
        type="submit"
        className="bg-green-600 w-10 h-10 text-2xl text-green-100 rounded-full border-b border-l-4 border-green-700 shadow-lg"
      >
        +
      </button>
    </form>
  );
};

export default AddBook;
