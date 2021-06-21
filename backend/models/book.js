import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorID: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
