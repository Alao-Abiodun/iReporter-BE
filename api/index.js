/* eslint-disable no-console */
import express from "express";

const app = express();

const PORT = 2022;

app.get("/", (req, res) => {
  res.send("The API is working");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
