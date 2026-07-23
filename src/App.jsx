import "./index.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Component/NavComponent/Home";
import AboutMe from "./Component/NavComponent/AboutMe";
import Project from "./Component/NavComponent/Project";
import Skill from "./Component/NavComponent/Skill";
import ContactMe from "./Component/NavComponent/ContactMe";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import SideRays from "./components/SideRays";
import PropTypes from "prop-types";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about-me"
          element={
            <PageWrapper>
              <AboutMe />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
        <Route
          path="/skill"
          element={
            <PageWrapper>
              <Skill />
            </PageWrapper>
          }
        />
        <Route
          path="/contact-me"
          element={
            <PageWrapper>
              <ContactMe />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <HashRouter>
      <div className="relative flex flex-col min-h-screen bg-slate-900 selection:bg-blue-500/30">
        {/* Background layer — fills the whole page, sits behind everything */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <SideRays
            speed={2.5}
            rayColor1="#06b6d4"
            rayColor2="#4f46e5"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>

        {/* Foreground content — Nav, pages, Footer — sits above the rays */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow pt-20 md:pt-24">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
