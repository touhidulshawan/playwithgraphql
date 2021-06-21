import mongoose from "mongoose";
import log from "../logger/logger.js";

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@graphql-db-cluster.59ifo.mongodb.net/graphql-db?retryWrites=true&w=majority`;

export const connection = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    log.error(err.message);
  }
};
