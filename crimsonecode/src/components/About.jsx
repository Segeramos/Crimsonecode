import { about, skills } from "../data";
import { FaGoogle, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

// Certification data (as you had it)
const certifications = [
  {
    name: 'Front-End Web Development',
    issuer: 'ALX',
    link: 'https://savanna.alxafrica.com/certificates/CE8B5fFhN7',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
  },
  {
    name: 'Professional Foundations',
    issuer: 'ALX',
    link: 'https://savanna.alxafrica.com/certificates/9e2BSs5Zhc',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
  },
  {
    name: 'Graphic Design',
    issuer: 'ALX',
    link: 'https://www.freecodecamp.org/certification/yourusername/responsive-web-design',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
  },
  {
    name: 'ALX AI Starter Kit',
    issuer: 'ALX',
    link: 'https://savanna.alxafrica.com/certificates/cny5pJFxzr',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
  },
  {
    name: 'Digital Marketing',
    issuer: 'Udemy',
    link: 'https://coursera.org/verify/meta-frontend-certification',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGllHM_06tkceB-8rg2x8PV1yK52frVK0CQ&s'
  },
  {
    name: 'UI/UX Design',
    issuer: 'ALX',
    link: 'https://www.linkedin.com/learning/certificates/your-certificate-id',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
  }
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, type: "spring" }
  }),
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.13, duration: 0.7, type: "spring", stiffness: 220 }
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    }
  }
};

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-black py-16 px-4 sm:px-8 text-orange-100 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      {/* Work Background */}
      <motion.div
        className="md:flex gap-12 mb-8"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        <div className="space-y-6">
          <motion.h3
            className="text-2xl font-semibold text-orange-100 flex items-center gap-2"
            variants={fadeUp}
            custom={0}
          >
            💼 Work Background
          </motion.h3>
          <div className="space-y-4">
            {/* Google Internship */}
            <motion.div
              className="p-4 bg-orange-100 rounded-lg shadow-md border-l-4 border-blue-500"
              variants={bounceIn}
              custom={1}
            >
              <div className="flex items-center mb-2 text-blue-600 font-semibold text-lg">
                <FaGoogle className="mr-2" /> Google – UX Engineer Intern
              </div>
              <p className="text-sm text-gray-600 italic mb-1">Summer 2024</p>
              <p className="text-gray-700">
                Redesigned internal tools, increasing productivity by <span className="font-semibold text-green-600">25%</span>.
              </p>
            </motion.div>
            {/* Freelance Work */}
            <motion.div
              className="p-4 bg-orange-100 rounded-lg shadow-md border-l-4 border-green-500"
              variants={bounceIn}
              custom={2}
            >
              <div className="flex items-center mb-2 text-green-600 font-semibold text-lg">
                <FaLaptopCode className="mr-2" /> Freelance – Frontend Developer
              </div>
              <p className="text-sm text-gray-600 italic mb-1">2022 - 2025</p>
              <p className="text-gray-700">
                Delivered <span className="font-semibold">scalable</span> React apps with <span className="font-semibold text-purple-600">pixel-perfect</span> UI.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Skills & Tools */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-semibold flex items-center mb-4">
          <span className="mr-2">🛠️</span> Skills & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <span className="font-bold">Languages</span>
            <ul className="mt-2">
              {skills.languages.map((lang, i) => <li key={i}>• {lang}</li>)}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, type: "spring" }}
          >
            <span className="font-bold">Frameworks & Libraries</span>
            <ul className="mt-2">
              {skills.frameworks.map((fw, i) => <li key={i}>• {fw}</li>)}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <span className="font-bold">Tools & Platforms</span>
            <ul className="mt-2">
              {skills.tools.map((tool, i) => <li key={i}>• {tool}</li>)}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, type: "spring" }}
          >
            <span className="font-bold">Soft Skills</span>
            <ul className="mt-2">
              {skills.softSkills.map((sk, i) => <li key={i}>• {sk}</li>)}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="space-y-4 mt-11"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        <motion.h3
          className="text-2xl font-semibold"
          variants={fadeUp}
          custom={0}
        >
          📜 Certifications
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border rounded-lg shadow-md p-6 hover:shadow-xl transition bg-orange-100"
              variants={bounceIn}
              custom={index}
              whileHover={{
                scale: 1.08,
                rotate: [0, 2, -2, 2, 0],
                boxShadow: "0 0 16px 0 #fbbf24aa"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={cert.logo} alt={cert.issuer} className="h-16 mb-4 object-contain" />
              <h4 className="text-lg font-bold text-red-800">{cert.name}</h4>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
