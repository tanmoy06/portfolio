import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { SpotlightCard } from "./ui/SpotlightCard";
import { CopyButton } from "./ui/CopyButton";

const contactChannels = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "iamtanmoysarkar007@gmail.com",
    href: "mailto:iamtanmoysarkar007@gmail.com",
    canCopy: true,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 8250260794",
    href: "tel:+918250260794",
    canCopy: true,
  },
  {
    icon: <LinkedInIcon size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/tanmoy-s-96083525a",
    href: "https://www.linkedin.com/in/tanmoy-s-96083525a/",
    canCopy: false,
  },
  {
    icon: <GitHubIcon size={18} />,
    label: "GitHub",
    value: "github.com/tanmoy06",
    href: "https://github.com/tanmoy06",
    canCopy: false,
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "West Bengal, India",
    href: null,
    canCopy: false,
  },
];

// Premium spring-based horizontal shake animation keyframes
const shakeAnimation = {
  shake: {
    x: [0, -10, 10, -7, 7, -4, 4, -1, 1, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  idle: {
    x: 0,
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});
  const [shakeTrigger, setShakeTrigger] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com).";
    }
    if (!formData.message.trim()) errs.message = "Please write your message.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShakeTrigger((prev) => prev + 1);
      return;
    }

    setStatus("sending");

    // Simulated transmission (or EmailJS / Formspree hook)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 900);
  };

  return (
    <section id="contact" className="section-spacing relative" aria-labelledby="contact-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            06 // Get in Touch
          </Badge>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Whether you have an inquiry, project proposal, or engineering opportunity, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            {contactChannels.map((c) => (
              <SpotlightCard key={c.label} className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-zinc-500 uppercase">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-cyan-400 transition-colors truncate block"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {c.canCopy && (
                    <div className="shrink-0">
                      <CopyButton text={c.value} label="Copy" />
                    </div>
                  )}

                  {!c.canCopy && c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
                      aria-label={`Open ${c.label}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Right Column: Interactive Contact Form with Shake Validation */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2 flex items-center gap-2">
                  <span>Send a Direct Message</span>
                  <Sparkles size={16} className="text-cyan-400" />
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Fill out this form and I will get back to you promptly.
                </p>

                {/* Success Message Banner */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 shadow-lg shadow-emerald-500/5"
                    >
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                      <div className="text-xs">
                        <p className="font-semibold text-emerald-300">Message Received!</p>
                        <p className="mt-0.5 text-zinc-400">
                          Thank you for reaching out. I will respond to your email shortly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Input with Shake */}
                  <motion.div
                    key={`name-${shakeTrigger}`}
                    variants={shakeAnimation}
                    animate={errors.name ? "shake" : "idle"}
                  >
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border transition-all duration-200 focus:outline-none ${
                        errors.name
                          ? "border-rose-500/80 bg-rose-950/20 text-rose-100 shadow-[0_0_12px_rgba(244,63,94,0.18)] focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
                          : "border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-zinc-100 placeholder:text-zinc-500"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] font-mono text-rose-400 mt-1.5 flex items-center gap-1.5"
                        >
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.name}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Email Input with Shake */}
                  <motion.div
                    key={`email-${shakeTrigger}`}
                    variants={shakeAnimation}
                    animate={errors.email ? "shake" : "idle"}
                  >
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border transition-all duration-200 focus:outline-none ${
                        errors.email
                          ? "border-rose-500/80 bg-rose-950/20 text-rose-100 shadow-[0_0_12px_rgba(244,63,94,0.18)] focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
                          : "border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-zinc-100 placeholder:text-zinc-500"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] font-mono text-rose-400 mt-1.5 flex items-center gap-1.5"
                        >
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.email}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message Input with Shake */}
                  <motion.div
                    key={`message-${shakeTrigger}`}
                    variants={shakeAnimation}
                    animate={errors.message ? "shake" : "idle"}
                  >
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Tanmoy, I would like to discuss..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border transition-all duration-200 focus:outline-none resize-none ${
                        errors.message
                          ? "border-rose-500/80 bg-rose-950/20 text-rose-100 shadow-[0_0_12px_rgba(244,63,94,0.18)] focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50"
                          : "border-zinc-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/30 text-zinc-100 placeholder:text-zinc-500"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] font-mono text-rose-400 mt-1.5 flex items-center gap-1.5"
                        >
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.message}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full gap-2 font-mono text-xs sm:text-sm mt-2 transition-all duration-200 active:scale-[0.99]"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
