// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { response } from "express";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const connectDb = async () => {
  mongoose.connect("mongodb://localhost:27017/admin");
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("product", productSchema);
  const data = await product.find();
  console.log(data);
};
connectDb();

app.get("/", (req, resp) => {
  resp.send("app is working");
});
app.listen(5000);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
