//const express = require("express")

import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import resolvers from "./resolver"
const app = express();

app.get("/", (req, res) => {
  res.send("from express hello");
});


app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("server  started ");
});
