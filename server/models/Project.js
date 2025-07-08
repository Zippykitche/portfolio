import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  tech: [String],
  link: String,
});

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
