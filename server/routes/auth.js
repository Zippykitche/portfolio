import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

const ADMIN_USER = {
  email: "zippyk80@gmail.com",
  password: "Zipporah@2020", // store this hashed in production!
};


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Add this inside routes/auth.js
router.post("/create-admin", async (req, res) => {
  const existing = await User.findOne({ email: ADMIN_USER.email });
  if (existing) return res.status(400).json({ message: "Admin already exists" });

  const hashedPassword = await bcrypt.hash(ADMIN_USER.password, 10);

  const newUser = new User({
    email: ADMIN_USER.email,
    password: hashedPassword,
    isAdmin: true,
  });

  await newUser.save();
  res.status(201).json({ message: "Admin user created" });
});

export default router;
