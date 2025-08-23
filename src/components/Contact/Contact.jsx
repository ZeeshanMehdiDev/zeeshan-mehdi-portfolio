import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add current date to the form data for the template
    const formData = new FormData(form.current);
    formData.append('date', new Date().toLocaleString());

    emailjs
      .sendForm(
        "service_6qyc6ub", 
        "template_p7s54j7", 
        form.current,
        "9BbdBgXNsltbPbXIP"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsLoading(false);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8245ec] to-[#a855f7] mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          I'd love to hear from you—reach out for any opportunities, collaborations, or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-lg bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Send Message <span className="ml-2">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Hidden field for recipient email */}
          <input
            type="hidden"
            name="email"
            value="zeeshanmehdi.dev@gmail.com"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/20 transition-all duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/20 transition-all duration-300"
            />
          </div>
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/20 transition-all duration-300"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:outline-none focus:border-[#8245ec] focus:ring-2 focus:ring-[#8245ec]/20 transition-all duration-300 resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] py-4 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#8245ec]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
