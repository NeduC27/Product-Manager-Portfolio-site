//import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";
import NeduC from "/src/assets/Images/NeduC.jpg";
import MagicRings from "@/components/MagicRings";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Home() {
  return (
    <Container /*maxWidth="lg"*/ className="px-0 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box className="relative min-h-[75vh] flex items-center shadow-2xl bg-purple-300 rounded-[2.5rem] overflow-hidden border border-blue-600 /*blueprint-grid1*/">
          <div className="absolute inset-0 z-0">
            <MagicRings
              color="#a855f7"
              colorTwo="#d946ef"
              ringCount={6}
              speed={1}
              followMouse={true}
            />
          </div>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 10 }}
            className="w-full items-center justify-between p-8 md:p-20 z-10"
          >
            {/* Text Content */}
            <Box className="flex-1 text-center md:text-left">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="overline"
                  className="font-bold text-blue-800 tracking-[0.2em] text-xs md:text-sm uppercase mb-2 block"
                >
                  Product Management Portfolio
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  className="font-black mt-2 mb-6 text-black leading-[1.1]"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Product <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500">
                    Manager
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography className="mb-10 font-medium text-gray-800 max-w-lg mx-auto md:mx-0 text-lg md:text-xl leading-relaxed">
                  Product Manager with over 4 years of experience building and launching fintech, healthtech, and SaaS products. I mix a strong technical background with user-focused strategy to help teams turn big ideas into reliable software.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  className="justify-center md:justify-start"
                >
                  <Button
                    variant="contained"
                    component={motion.a}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-4 normal-case text-lg font-bold shadow-lg shadow-blue-600/80"
                    endIcon={<SendIcon />}
                    href="#/contact-me"
                  >
                    Let&apos;s Talk
                  </Button>

                  <Button
                    variant="outlined"
                    component={motion.a}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-white/20 text-white hover:border-blue-400 hover:bg-white/5 rounded-full px-10 py-4 normal-case text-lg font-bold backdrop-blur-sm"
                    startIcon={<DescriptionIcon />}
                    href="https://drive.google.com/file/d/1rlTuaEjbwWBuIJvr-9WqlTGJujktIMzb/view?usp=sharing"
                    target="_blank"
                  >
                    View CV
                  </Button>
                </Stack>
              </motion.div>
            </Box>

            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <Box className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[800px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Avatar
                  src={NeduC}
                  alt="Nedu"
                  className="relative border border-white/10 shadow-2xl transition-all duration-500"
                  sx={{
                    width: { xs: 200, sm: 320, md: 300 },
                    height: { xs: 200, sm: 360, md: 330 },
                    borderRadius: "1200px",
                    objectPosition: "top",
                  }}
                />
              </Box>
            </motion.div>
          </Stack>

          {/* Architectural Lines Overlay (Subtle) */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;
