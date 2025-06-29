import { projects } from "../data";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 70 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.13, type: "spring", stiffness: 280, damping: 18 }
  })
};

export default function Projects() {
  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gradient-to-r from-black text-orange-100 font-['Karla']"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-tight text-orange-100"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        My Recent Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="rounded-2xl bg-white/5 shadow-xl flex flex-col overflow-hidden border border-white/10 transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.045,
              boxShadow: "0 8px 40px 0 #ea580c22",
              transition: { type: "spring", stiffness: 340, damping: 15 }
            }}
          >
            <div className="h-52 bg-black flex items-center justify-center overflow-hidden">
              <motion.img
                src={proj.image}
                alt={proj.title}
                className="object-cover h-full w-full transition-transform duration-300"
                whileHover={{ scale: 1.07 }}
              />
            </div>
            <div className="flex flex-col flex-1 px-6 py-5">
              <h3 className="text-xl font-bold text-orange-100 mb-2">{proj.title}</h3>
              {proj.description && (
                <p className="text-base text-gray-300 mb-4 flex-1">{proj.description}</p>
              )}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-red-800 text-orange-100 font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-center"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
