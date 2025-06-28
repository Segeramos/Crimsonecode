// src/components/About.jsx
import { about, skills, certifications } from "../data";

export default function About() {
  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-r from-black to-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4 text-red-400">About Me</h2>
      <div className="md:flex gap-12 mb-8">
        {/* Education & Work */}
        <div className="md:w-2/3">
          <div className="mb-4">
            <h3 className="font-semibold text-red-300 mb-1">📚 Education Background</h3>
            <p className="text-gray-200">{about.summary}</p>
          </div>
          <div>
            <h3 className="font-semibold text-red-300 mb-1">💼 Work Background</h3>
            {about.work.map((item, i) => (
              <div key={i} className="mb-2">
                <span className="font-bold">{item.company}</span> – {item.role} <br />
                <span className="text-sm">{item.period}</span>
                <ul className="list-disc list-inside text-gray-400">
                  {item.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Skills & Tools */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <span className="mr-2">🛠️</span> Skills & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">
          <div>
            <span className="font-bold">Languages</span>
            <ul className="mt-2">
              {skills.languages.map((lang, i) => <li key={i}>• {lang}</li>)}
            </ul>
          </div>
          <div>
            <span className="font-bold">Frameworks & Libraries</span>
            <ul className="mt-2">
              {skills.frameworks.map((fw, i) => <li key={i}>• {fw}</li>)}
            </ul>
          </div>
          <div>
            <span className="font-bold">Tools & Platforms</span>
            <ul className="mt-2">
              {skills.tools.map((tool, i) => <li key={i}>• {tool}</li>)}
            </ul>
          </div>
          <div>
            <span className="font-bold">Soft Skills</span>
            <ul className="mt-2">
              {skills.softSkills.map((sk, i) => <li key={i}>• {sk}</li>)}
            </ul>
          </div>
        </div>
      </div>
      {/* Certifications */}
      <div className="mt-14">
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <span className="mr-2">📜</span> Certifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 border border-red-400">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-red-400 h-28 flex items-center justify-center text-black font-bold rounded">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
