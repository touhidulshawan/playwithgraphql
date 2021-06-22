import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK } from "../queries/GetQueries";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");
  const { loading, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      addBook({
        variables: { name: bookName, genre: genre, authorID: authorID },
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bookName">Book Name</label>
        <input
          type="text"
          name="bookName"
          id="bookName"
          required
          onChange={(evt) => setBookName(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genreName">Genre</label>
        <input
          type="text"
          name="genreName"
          id="genreName"
          required
          onChange={(evt) => setGenre(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          required
          onChange={(evt) => setAuthorID(evt.target.value)}
        >
          <option value="">Select Author</option>
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
      <button type="submit">+</button>
    </form>
  );
};

export default AddBook;
