import express from 'express';
import Job from '../models/Jobs.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

export default router;
