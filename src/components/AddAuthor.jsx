import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR, GET_AUTHORS } from "../queries/GetQueries";

const AddAuthor = () => {
  const [addAuthor] = useMutation(ADD_AUTHOR);
  const [authorName, setAuthorName] = useState("");
  const [authorAge, setAuthorAge] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      addAuthor({
        variables: { name: authorName, age: parseInt(authorAge) },
        refetchQueries: [{ query: GET_AUTHORS }],
      });
    } catch (error) {
      window.alert("Please fill out all info correctly", +error.message);
    }
    setAuthorName("");
    setAuthorAge(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <label className="text-gray-700 text-sm p-2" htmlFor="authorName">
          Author Name
        </label>
        <input
          className="bg-blue-100 px-2 text-blue-900"
          type="text"
          name="authorName"
          id="authorName"
          required
          value={authorName}
          onChange={(evt) => setAuthorName(evt.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="text-gray-700 text-sm p-2" htmlFor="authorAge">
          Author Age
        </label>
        <input
          className="bg-blue-100 px-2 text-blue-900"
          type="number"
          name="authoAge"
          id="authorAge"
          value={authorAge}
          onChange={(evt) => setAuthorAge(evt.target.value)}
        />
      </div>
      <button
        className="bg-green-600 w-10 h-10 text-2xl text-green-100 rounded-full border-b border-l-4 border-green-700 shadow-lg"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default AddAuthor;
