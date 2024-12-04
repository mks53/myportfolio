import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

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

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "978b2d07-a789-4de8-a065-4888d9ae9649");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-secondary dark:text-white">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-2 border-transparent hover:border-teal-500 transition-all duration-300">
          <form onSubmit={onSubmit} className="space-y-4">
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
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="text-teal-500 w-6 h-6" />
            <span className="text-gray-700 dark:text-gray-300">murtaza.sherwala@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-teal-500 w-6 h-6" />
            <span className="text-gray-700 dark:text-gray-300">+61 498 525 356</span>
          </div>
          <div className="flex items-center space-x-4">
            <Github className="text-teal-500 w-6 h-6" />
            <a href="https://github.com/mksherwala" className="text-gray-700 dark:text-gray-300 hover:underline">
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin className="text-teal-500 w-6 h-6" />
            <a href="https://www.linkedin.com/in/mksherwala/" className="text-gray-700 dark:text-gray-300 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;