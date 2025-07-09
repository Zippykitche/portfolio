import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectRoutes from "./routes/project.js";
import jobsRoutes from "./routes/jobs.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/project", projectRoutes);
app.use("/jobs", jobsRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
