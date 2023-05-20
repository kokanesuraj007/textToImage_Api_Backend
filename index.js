import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

import createImageRouter from "./routes/createImageRoutes.js";
import postRouter from "./routes/postRoutes.js";

dotenv.config();

const app = express();
const port = 1710;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRouter);
app.use("/api/v1/createImage", createImageRouter);

app.get("/", async (req, res) => {
  res.send("Hello from SERVER!");
});

const startServer = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("MongoDB connected successfully!"))
      .catch((err) => console.log(err));

    app.listen(port, () => {
      console.log(`Server has started on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
