import { motion } from 'framer-motion';
import {
  FaPython,
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaProjectDiagram,
  FaUsers,
  FaClipboardList,
  FaTasks,
  FaServer,
  FaDatabase,
  FaCogs,
  FaChartLine,
  FaHandshake
} from 'react-icons/fa';

const skillCategories = [
  {
    title: "Product Management",
    skills: [
      { name: "Agile & Scrum", icon: <FaProjectDiagram />, color: "text-blue-500" },
      { name: "Jira / Asana", icon: <FaTasks />, color: "text-blue-400" },
      { name: "Planning & Estimation", icon: <FaClipboardList />, color: "text-teal-300" },
      { name: "Risk Management", icon: <FaChartLine />, color: "text-orange-400" },
    ]
  },
  {
    title: "Technical Expertise",
    skills: [
      { name: "Python / Java", icon: <FaPython />, color: "text-yellow-400" },
      { name: "JavaScript / React", icon: <FaReact />, color: "text-blue-400" },
      { name: "System Architecture", icon: <FaServer />, color: "text-emerald-400" },
      { name: "SQL & NoSQL", icon: <FaDatabase />, color: "text-purple-400" },
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS / Azure / GCP", icon: <FaAws />, color: "text-orange-500" },
      { name: "Docker & K8s", icon: <FaDocker />, color: "text-blue-600" },
      { name: "CI / CD Pipelines", icon: <FaCogs />, color: "text-gray-300" },
      { name: "Deployment Strategies", icon: <FaServer />, color: "text-indigo-400" },
    ]
  },
  {
    title: "Leadership & Strategy",
    skills: [
      { name: "Team Leadership", icon: <FaUsers />, color: "text-cyan-400" },
      { name: "Stakeholder Engagement", icon: <FaHandshake />, color: "text-green-500" },
      { name: "Cross-Functional Sync", icon: <FaUsers />, color: "text-red-400" },
      { name: "Conflict Resolution", icon: <FaHandshake />, color: "text-orange-600" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

function Skill() {
  return (
    <section className="skills py-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Product Management <span className="text-blue-500">Arsenal</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            The management frameworks, technical fluency, and leadership strategies I bring to every project to ensure seamless end-to-end delivery.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 lg:p-8 border-t-4 border-t-blue-600 h-full flex flex-col"
            >
              <h3 className="text-xl font-black mb-8 text-white uppercase tracking-widest text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 group text-center"
                  >
                    <div className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-200 uppercase tracking-wider text-center break-words w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {["End-to-End Delivery", "Technical Decision Making", "Resource Allocation", "Agile Methodologies", "Capacity Planning"].map((soft, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">{soft}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skill;