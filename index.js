//const express = require("express")

import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("from express hello");
});

const root = {
  friend: () => {
    return {
      id: 112233,
      firstName: "Amit ",
      lastName: "Sharma",
      gender: "Male",
      language: "English",
      emails: [{ email: "ab@b.com" }, { email: "tt@b.com" }]
    };
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("server  started ");
});
