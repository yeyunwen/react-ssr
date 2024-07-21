import express from "express";
import render from "./render";

const app = express();

app.use(express.static("public"));

app.get("*", render);

app.listen(3001, () => console.log("server started"));
