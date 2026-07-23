import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SplashCursor from "../components/SplashCursor";

function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/chineduhilary/" },
    { icon: <FaXTwitter />, href: "https://x.com/chinedu43144462/" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/chinedu-hilary-80653a335/",
    },
    { icon: <FaGithub />, href: "https://github.com/NeduC27" },
    {
      icon: <MdOutlineAttachEmail />,
      href: "mailto:chineduhilary80@gmail.com",
    },
  ];

  return (
    <footer className="relative bg-gray-800 border-t border-white/5 pt-20 pb-10">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <div className="relative z-10 container mx-auto px-6 md:px-12 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-black text-white">
              NEDU<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Fusing architectural principles with software engineering to build
              digital structures that last. Based in Nigeria, serving globally.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, color: "#3b82f6" }}
                  className="text-2xl text-gray-500 transition-colors pointer-events-auto"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "About Me", "Project", "Skill", "Contact Me"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-gray-400 hover:text-white transition-colors text-sm font-medium pointer-events-auto"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Lagos, Nigeria <br />
                Available for Remote Work
              </p>
              <a
                href="mailto:chineduhilary80@gmail.com"
                className="text-blue-500 font-bold text-sm block hover:underline pointer-events-auto"
              >
                chineduhilary80@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} CHINEDU HILARY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              Built with React & Vite
            </span>
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              Designed by Nedu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
