import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserDataModel from "./model/UserData.js";
import { userData } from "./controllers/userDataController.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/DataDeck?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => userData.getData(req, res));

app.post("/", (req, res) => userData.postData(UserDataModel, req, res));

app.listen(PORT, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
