import express from "express";
import config from "./config/config";
import log from "./logger/logger";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const NAMESPACE = "SERVER";

const hostname = config.server.hostname;
const port = config.server.port;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/graphql", graphqlHTTP({ schema }));

app.listen(port, () => {
  log.info(NAMESPACE, `Server is running on ${hostname}:${port}`);
});
