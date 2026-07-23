import { motion } from "framer-motion";
import { projects } from "../../assets/data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Project() {
  return (
    <section className="projects px-6 py-20 text-white min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Shipped <span className="text-blue-500">Products</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto font-medium">
            Real-world products delivered across fintech, healthtech, and SaaS
            platforms — guiding cross-functional teams from conception to successful launch.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative z-20 glass-card overflow-hidden group flex flex-col h-full cursor-pointer"
            >
              {/* Project Image Placeholder / Image */}
              <div className="relative h-40 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"; // Tech placeholder
                  }}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-100 mb-4 text-sm leading-relaxed grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-bold text-gray-200 border border-white/16 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/9">
                  <span className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    Explore Case Study <FaExternalLinkAlt className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;