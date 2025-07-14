'use client'; // if you're using Next.js App Router

import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://portfolio-3oyr.onrender.com/project");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section py-20 bg-[#1b1b1b] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-8xl font-bold text-[rgb(246,119,138)] opacity-11 mb-2">Projects</h2>
        <h3 className="text-2xl font-bold mb-5">Some projects I built</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-xl shadow-lg overflow-hidden hover:shadow-[0_0_10px_rgb(246,119,138)] transition-shadow duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-[rgb(246,119,138)] mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#2a2a2a] px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white font-medium underline hover:text-[rgb(246,119,138)]"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
