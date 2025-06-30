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
                  <div className="flex flex-col md:flex-row gap-6 justify-center py-8 ">
              {/* Rondamo Tech */}
              <motion.div
                className="flex-shrink-0 w-full md:w-80 bg-orange-100 rounded-xl shadow p-6 border border-gray-200 text-black"
                variants={bounceIn}
                custom={1}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/RT.png"
                    alt="Rondamo Technologies logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">Rondamo Technologies</h3>
                </div>
                <p className="text-xl text-red-800 mb-4">Digital Marketing (SEO)</p>
                <p className="text-sm font-bold text-gray-800 mb-4">May 2023 - May 2024</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                   
                   I worked on SEO-driven digital marketing, boosting traffic, rankings, and brand visibility online.{" "}
                    
                  </li>
                </ul>
              </motion.div>

              {/* Rondamo Tech */}
              <motion.div
                className="flex-shrink-0 w-full md:w-80 bg-orange-200 rounded-xl shadow p-6 border border-gray-200 text-black"
                variants={bounceIn}
                custom={2}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/RT.png"
                    alt="Rondamo Technologies logo"
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">Rondamo Technologies</h3>
                </div>
                <p className="text-xl text-red-800 mb-4">Sales and Marketing</p>
                <p className="text-sm font-bold text-gray-800 mb-4">June 2024 to December 2024</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-black">
                    
                    Led Sales & Marketing efforts, driving revenue growth through strategy, outreach, and market research.{" "}
                    
                  </li>
                </ul>
              </motion.div>

              {/* Mighty Ape Tech */}
              <motion.div
                className="flex-shrink-0 w-full md:w-80 bg-orange-100 text-black rounded-xl shadow p-6"
                variants={bounceIn}
                custom={3}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/MAT.png"
                    alt="Mighty Ape Technologies logo"
                    className="w-10 h-10 object-contain rounded-full"
                  />
                  <h3 className="text-lg font-semibold">Mighty Ape Technologies</h3>
                </div>
                <p className="text-xl text-red-800 mb-4">Digital Marketing (SEO)</p>
                <p className="text-sm text-gray-800 font-bold mb-4">January 2025 to date</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-black">
                    I managed SEO strategies to increase website traffic, search rankings, and engagement.{" "}
                  </li>
                </ul>
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
