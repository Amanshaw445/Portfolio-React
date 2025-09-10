import React, { useRef, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);

    emailjs
      .sendForm(
        "service_fxyasqh",
        "template_xvdf8jt",
        form.current,
        "xBzCJv77nTBdbpLxH"
      )
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 4000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsSending(false);
      });
  };

  return (
    <div
      className="
        bg-white bg-opacity-70 text-gray-900 
        dark:bg-black/60 dark:text-white 
        py-20 backdrop-blur-sm rounded-t-3xl transition-colors
      "
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-red-500 mr-2" />
              <a
                href="mailto:amanshaw871@gmail.com"
                className="hover:underline"
              >
                amanshaw871@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-blue-600 mr-2" />
              <span>West Bengal, India</span>
            </div>

            <div className="mb-4">
              <FaGithub className="inline-block text-gray-600 dark:text-gray-300 mr-2" />
              <a
                href="https://github.com/Amanshaw445"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Amanshaw445
              </a>
            </div>

            <div className="mb-4">
              <FaLinkedin className="inline-block text-blue-700 mr-2" />
              <a
                href="https://linkedin.com/in/amanshaw445"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/amanshaw445
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Hidden field */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="
                    w-full p-2 rounded border 
                    bg-white text-gray-900 border-gray-300
                    dark:bg-gray-800 dark:text-white dark:border-gray-600
                    focus:outline-none focus:border-green-400
                    transition-colors
                  "
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="gmail" className="block mb-2">
                  Email
                </label>
                <input
                  name="gmail"
                  type="email"
                  className="
                    w-full p-2 rounded border 
                    bg-white text-gray-900 border-gray-300
                    dark:bg-gray-800 dark:text-white dark:border-gray-600
                    focus:outline-none focus:border-green-400
                    transition-colors
                  "
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="
                    w-full p-2 rounded border 
                    bg-white text-gray-900 border-gray-300
                    dark:bg-gray-800 dark:text-white dark:border-gray-600
                    focus:outline-none focus:border-green-400
                    transition-colors
                  "
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  {isSending ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                  ) : (
                    <>
                      Send <FaPaperPlane size={15} />
                    </>
                  )}
                </button>
              </div>

              {/* Success Message */}
              {isSent && (
                <p className="text-green-500 dark:text-green-400 mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
