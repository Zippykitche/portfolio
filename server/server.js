import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import projectRoutes from "./routes/project.js";
import jobsRoutes from "./routes/jobs.js";
import authRoutes from "./routes/auth.js";
import cvRoutes from "./routes/cv.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/files", express.static(path.join(__dirname, "public/files")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/project", projectRoutes);
app.use("/jobs", jobsRoutes);
app.use("/auth", authRoutes);
app.use("/", cvRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
