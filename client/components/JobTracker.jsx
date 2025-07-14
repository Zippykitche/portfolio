import { useEffect, useState } from "react";

export default function JobTracker() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://portfolio-3oyr.onrender.com/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const job = { company, position, status, notes };
  const res = await fetch("https://portfolio-3oyr.onrender.com/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  const newJob = await res.json();
  setJobs([newJob, ...jobs]);
};


  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl mb-4">Job Applications</h2>
      <ul className="space-y-2">
        {jobs.map((job) => (
          <li key={job._id} className="bg-gray-800 p-4 rounded">
            <strong>{job.position}</strong> @ {job.company} — {job.status}
            <p className="text-sm mt-1">{job.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
