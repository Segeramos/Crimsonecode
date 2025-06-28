// src/components/Projects.jsx
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-r from-black to-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4 text-red-400 underline underline-offset-4">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-300 rounded shadow-md flex flex-col">
            <div className="h-48 bg-gray-400 flex items-center justify-center">
              <img src={proj.image} alt={proj.title} className="object-cover h-full w-full"/>
            </div>
            <div className="bg-gray-200 py-4 text-center text-red-400 text-lg font-semibold rounded-b">
              {proj.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
