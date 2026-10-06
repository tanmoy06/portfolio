import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ArrowUpRight,
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please write a message.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    // NOTE: This is structured for easy plug-in with EmailJS or Formspree
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
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

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Fill out this form and I will get back to you as soon as possible.
                </p>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-semibold">Message Received!</p>
                      <p className="mt-0.5 text-zinc-400">
                        Thank you for reaching out. I will respond to your email promptly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
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
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-zinc-800 focus:border-cyan-500"
                      } text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
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
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-zinc-800 focus:border-cyan-500"
                      } text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
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
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-zinc-900 border ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-zinc-800 focus:border-cyan-500"
                      } text-zinc-100 placeholder:text-zinc-500 transition-colors focus:outline-none resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full gap-2 font-mono text-xs sm:text-sm mt-2"
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

              <p className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 text-center">
                * Built with client validation. Ready for EmailJS / Formspree webhook connection.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
