import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = path.join(__dirname, "../../client/public/files");
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, "ZipporahCV.pdf"); // Always overwrite with the new CV
  },
});

const upload = multer({ storage: storage });

router.post(
  "/upload-cv",
  authenticateToken,
  upload.single("cv"),
  (req, res) => {
    try {
      res.status(200).json({ message: "CV uploaded successfully" });
    } catch (err) {
      res.status(500).json({ error: "Failed to upload CV" });
    }
  }
);

export default router;
