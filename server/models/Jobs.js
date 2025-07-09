import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: String, 
  notes: String,
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
