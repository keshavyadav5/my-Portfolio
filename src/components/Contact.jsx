"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kesavyadav992@gmail.com",
      href: "mailto:kesavyadav992@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7508794201",
      href: "tel:+917508794201",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jalandhar Punjab",
      href: "https://maps.app.goo.gl/nDL3W97eT3998nZr9",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/keshavyadav5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/keshavyadav5",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kesavyadav992@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/k_shav09/",
    },
  ];

  const onSubmit = async (data) => {
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "fd4340b8-4516-4bba-bd0b-b20668e42c58");
    formData.append("name", data.fullname);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully ✅");
        setIsSubmitted(true);
        setIsSubmitting(false);
        reset();
      } else {
        setIsSubmitting(false);
        setIsError(true);
        setResult(resultData.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 md:to-accent/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-300">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 transition-all duration-300">
            Let's discuss opportunities, collaborations, or just have a chat
            about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-all duration-300">
                Let's Connect
              </h3>
              <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300 transition-all duration-300">
                I'm always open to discussing new opportunities, interesting
                projects, or potential collaborations. Whether you're looking
                for a developer, have a question about my work, or just want to
                connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-500/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300">
                        {contact.label}
                      </p>
                      <a
                        href={contact.href}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-all duration-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white transition-all duration-300">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gray-100/50 text-gray-600 hover:bg-gray-200/50 hover:text-gray-900 dark:bg-slate-700/50 dark:text-gray-300 dark:hover:bg-slate-600/50 dark:hover:text-white transition-all duration-300"
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl backdrop-blur-sm border bg-gray-50/50 border-gray-200/20 dark:border-gray-700/30  dark:bg-slate-800/50 transition-all duration-300"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500 dark:text-green-400" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-whit transition-all duration-300e">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white transition-all duration-300">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div className="grid">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-all duration-300">
                      Full Name
                    </label>
                    <input
                      {...register("fullname", {
                        required: "Full name is required",
                      })}
                      className="w-full px-4 py-3 rounded-lg border bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20  transition-all duration-300"
                      placeholder="Ram"
                    />
                    {errors.fullname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullname.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 transition-all duration-300">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="ram@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      {...register("subject", { required: "Subject is required" })}
                      className="w-full px-4 py-3 rounded-lg border bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white dark:placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Project Collaboration"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 resize-none focus:border-blue-500 dark:bg-slate-800/50 dark:border-slate-600 dark:text-white dark:placeholder-gray-400  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  {isError ? (
                    <p className="text-red-600">{result}</p>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300  ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                      {isSubmitting ? "Sending..." : <Send size={18} />}
                      {isSubmitting ? "" : "Send Message"}
                    </motion.button>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact