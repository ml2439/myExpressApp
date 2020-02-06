import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Yo!!"));

app.listen(port, () => console.log(`My express app listening on port ${port}`));
