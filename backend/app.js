import express from "express";
import { connection } from "./db/connect.js";
import config from "./config/config.js";
import log from "./logger/logger.js";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

const NAMESPACE = "SERVER";

const hostname = config.server.hostname;
const port = config.server.port;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(port, () => {
  log.info(`${NAMESPACE} is running on ${hostname}:${port}`);
  connection()
    .then(() => log.info("Database connected successfully"))
    .catch((err) => log.error(err.message));
});
