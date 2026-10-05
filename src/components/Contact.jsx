import { useState, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
} from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "iamtanmoysarkar007@gmail.com",
    href: "mailto:iamtanmoysarkar007@gmail.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/25",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 8250260794",
    href: "tel:+918250260794",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/25",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/tanmoy-s-96083525a",
    href: "https://www.linkedin.com/in/tanmoy-s-96083525a/",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/25",
  },
  {
    icon: <GitHubIcon size={20} />,
    label: "GitHub",
    value: "github.com/tanmoy06",
    href: "https://github.com/tanmoy06",
    color: "text-slate-300",
    bg: "bg-slate-500/10 border-slate-500/25",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "West Bengal, India",
    href: null,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/25",
  },
];

// NOTE: This form is frontend-only. To enable real email sending,
// integrate an email service such as:
//   - EmailJS (https://www.emailjs.com/)
//   - Formspree (https://formspree.io/)
//   - A custom backend API endpoint
// Replace the handleSubmit function accordingly.
export default function Contact() {
  const ref = useScrollReveal();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'sending'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("sending");

    // ─────────────────────────────────────────────────────────────
    // TODO: Replace this simulation with a real email service.
    //
    // Example with Formspree:
    //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (res.ok) setStatus('success'); else setStatus('error');
    //
    // Example with EmailJS:
    //   await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY');
    // ─────────────────────────────────────────────────────────────

    // Simulated delay — replace with actual API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Get in Touch
          </h2>
          <div className="section-divider mx-auto mt-3" />
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto">
            Feel free to reach out for collaboration, opportunities, or just to
            say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact information */}
          <div className="reveal space-y-4 delay-100">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} card-hover group`}
              >
                <div className={`${item.color} shrink-0`} aria-hidden="true">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`text-sm font-medium ${item.color} hover:underline truncate block`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-300">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="reveal delay-200">
            <div className="glass border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              {status === "success" && (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6"
                  role="alert"
                >
                  <CheckCircle
                    size={18}
                    className="text-emerald-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-emerald-400">
                      Message received!
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      (Note: To enable real email delivery, connect an email
                      service such as Formspree or EmailJS. See the code
                      comments for instructions.)
                    </p>
                  </div>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Name{" "}
                      <span aria-hidden="true" className="text-rose-400">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white text-sm placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors ${
                          errors.name
                            ? "border-rose-500/60"
                            : "border-slate-700 focus:border-indigo-500/50"
                        }`}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Email{" "}
                      <span aria-hidden="true" className="text-rose-400">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white text-sm placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors ${
                          errors.email
                            ? "border-rose-500/60"
                            : "border-slate-700 focus:border-indigo-500/50"
                        }`}
                      aria-required="true"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Message{" "}
                      <span aria-hidden="true" className="text-rose-400">
                        *
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/60 border text-white text-sm placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors resize-none ${
                          errors.message
                            ? "border-rose-500/60"
                            : "border-slate-700 focus:border-indigo-500/50"
                        }`}
                      aria-required="true"
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20"
                    aria-label="Send message"
                  >
                    <Send size={15} aria-hidden="true" />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    ⚙️ Connect an email service (Formspree / EmailJS) to enable
                    real delivery.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
