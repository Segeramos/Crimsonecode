// src/components/Services.jsx
import { services } from "../data";

export default function Services() {
  return (
    <div className="min-h-screen px-10 py-8 bg-gradient-to-r from-black to-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-6 text-red-400 underline underline-offset-4">Services</h2>
      <div className="grid gap-6">
        {services.map((serv, i) => (
          <div key={i} className="flex border-b border-black last:border-b-0">
            <div className="bg-red-400 text-black w-52 min-w-32 flex items-center justify-center text-lg font-semibold py-12 rounded-l">
              {serv.title}
            </div>
            <div className="bg-white text-black flex-1 flex items-center px-8 text-lg">
              {serv.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
