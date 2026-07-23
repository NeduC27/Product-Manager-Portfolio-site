import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function ContactMe() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree ID
    const formspreeId = "xkokqlzk";

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert(
          "Oops! There was a problem submitting your form. Please try again.",
        );
      }
    } catch (error) {
      // Log the error for debugging and show a user-friendly message
      console.error(error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact py-20 min-h-screen flex items-center relative z-0">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
              Let&apos;s drive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                your next big project.
              </span>
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-md">
              I&apos;m open to Technical Project Management contracts, Lead roles, or
              full-time opportunities. Let&apos;s talk about your technical vision
              and how I can help deliver it on time and within budget.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-200 uppercase tracking-widest">
                    Email Me
                  </p>
                  <a
                    href="mailto:chineduhilary80@gmail.com"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    chineduhilary80@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-200 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-lg">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 relative z-10 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-200 uppercase tracking-widest ml-1">
                        Name
                      </label>
                      <input
                        required
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white relative z-20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-200 uppercase tracking-widest ml-1">
                        Email
                      </label>
                      <input
                        required
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white relative z-20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product or upcoming project goals..."
                      className="w-full p-4 h-40 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white resize-none relative z-20"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 relative z-20 cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <FaPaperPlane
                      className={isSubmitting ? "animate-ping" : ""}
                    />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 relative z-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                    <FaCheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-200 mb-8">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-blue-400 font-bold hover:underline cursor-pointer relative z-20"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full pointer-events-none z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;