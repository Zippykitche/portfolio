"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/unauthorized");
      return;
    }

    fetch("https://portfolio-3oyr.onrender.com/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not authorized");
        const data = await res.json();
        setJobs(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Unauthorized. Redirecting...");
        setTimeout(() => router.push("/unauthorized"), 1500);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[rgb(246,119,138)]">Admin Panel</h2>
        <button
          onClick={handleLogout}
          className="bg-[rgb(246,119,138)] px-4 py-2 rounded hover:bg-[rgba(246,119,138,0.557)]"
        >
          Logout
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border border-pink-400 p-4 rounded bg-[#1c1c1c]"
          >
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p className="text-pink-300">Company: {job.company}</p>
            <p>Status: {job.status}</p>
            {job.notes && <p>Notes: {job.notes}</p>}
            <p className="text-sm text-gray-400 mt-2">
              {new Date(job.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
