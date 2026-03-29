"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [jobs, setJobs] = useState([]);
  const [projects, setProjects] = useState([]); // New state for projects
  const [error, setError] = useState(null);
  const router = useRouter();
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tech: "",
    link: "",
  });
  const [projectImage, setProjectImage] = useState(null);
  const [cvFile, setCvFile] = useState(null);

  // Check token on mount and fetch jobs and projects
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/unauthorized");
      return;
    }

    const fetchJobs = fetch("https://portfolio-3oyr.onrender.com/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then(setJobs)
      .catch((err) => {
        console.error(err);
        setError("Unauthorized. Redirecting...");
        setTimeout(() => router.push("/unauthorized"), 1500);
      });

    const fetchProjects = fetch("https://portfolio-3oyr.onrender.com/project", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then(setProjects)
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const handleProjectChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleProjectImageChange = (e) => {
    setProjectImage(e.target.files[0]);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", projectImage);
    formData.append("title", projectData.title);
    formData.append("description", projectData.description);
    projectData.tech.split(",").forEach((t) => {
      formData.append("tech", t.trim());
    });
    formData.append("link", projectData.link);

    fetch("https://portfolio-3oyr.onrender.com/project", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Project added:", data);
        // Optionally, refresh the projects list or give feedback
        setProjectData({
          title: "",
          description: "",
          tech: "",
          link: "",
        });
        setProjectImage(null);
        // Refresh projects after adding a new one
        const token = localStorage.getItem("token");
        fetch("https://portfolio-3oyr.onrender.com/project", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then(setProjects);
      })
      .catch((err) => console.error("Error adding project:", err));
  };

  const handleDeleteProject = (id) => {
    const token = localStorage.getItem("token");
    fetch(`https://portfolio-3oyr.onrender.com/project/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete project");
        setProjects(projects.filter((project) => project._id !== id));
      })
      .catch((err) => console.error("Error deleting project:", err));
  };

  const handleCvFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleCvUpload = () => {
    if (!cvFile) return;
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("cv", cvFile);

    fetch("https://portfolio-3oyr.onrender.com/upload-cv", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("CV uploaded:", data);
        // Give feedback
      })
      .catch((err) => console.error("Error uploading CV:", err));
  };

  return (
    <div className="p-6 bg-white min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[rgb(246,119,138)]">
          Admin Panel
        </h2>
        <button
          onClick={handleLogout}
          className="bg-[rgb(246,119,138)] px-4 py-2 rounded hover:bg-[rgba(246,119,138,0.557)]"
        >
          Logout
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Add Project Form */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Add New Project</h3>
        <form onSubmit={handleProjectSubmit} className="space-y-4">
           <input
              type="file"
              id="image"
              name="image"
              onChange={handleProjectImageChange}
              className="hidden"
          />
      <label
        htmlFor="image"
        className="w-full p-2 rounded bg-white border border-black-400 cursor-pointer text-gray-400"
      >
        {projectImage ? projectImage.name : "Upload Image"}
      </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={projectData.title}
            onChange={handleProjectChange}
            className="w-full p-2 rounded bg-white text-black border border-black-400"
          />
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleProjectImageChange}
            className="hidden"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={projectData.description}
            onChange={handleProjectChange}
            className="w-full p-2 rounded bg-white text-black border border-black-400"
          ></textarea>
          <input
            type="text"
            name="tech"
            placeholder="Tech Stack (comma-separated)"
            value={projectData.tech}
            onChange={handleProjectChange}
            className="w-full p-2 rounded bg-white text-black border border-black-400"
          />
          <input
            type="text"
            name="link"
            placeholder="Project Link"
            value={projectData.link}
            onChange={handleProjectChange}
            className="w-full p-2 rounded bg-white text-black border border-black-400"
          />
          <button
            type="submit"
            className="bg-[rgb(246,119,138)] px-4 py-2 rounded hover:bg-[rgb(251,8,45)]"
          >
            Add Project
          </button>
        </form>
      </div>

      {/* CV Upload */}
      <div className="mb-8">
        <h3 className="text-2xl text-[rgb(246,119,138)] font-bold mb-4">Update CV</h3>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            onChange={handleCvFileChange}
            className="p-2 rounded bg-[#1c1c1c] border border-pink-400"
          />
          <button
            onClick={handleCvUpload}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload CV
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Existing Projects</h3>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border border-pink-400 p-4 rounded bg-[#1c1c1c] flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
              <button
                onClick={() => handleDeleteProject(project._id)}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

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