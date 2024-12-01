import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., send to backend or email service)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      Icon: Github,
      link: "https://github.com/mks53",
      color: "text-teal-600 dark:text-white",
    },
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/in/mksherwala/",
      color: "text-teal-600 dark:text-white",
    },
    {
      Icon: Instagram,
      link: "https://twitter.com/yourusername",
      color: "text-teal-600",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-primary"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-primary text-white py-3 rounded-lg hover:bg-teal-secondary transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-teal-primary text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-700 dark:text-gray-300">
                murtaza.sherwala@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-teal-primary text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">
                +61 498 525 356
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-start mt-4">
            {socialLinks.map(({ Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} hover:opacity-75 transition text-4xl`}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
