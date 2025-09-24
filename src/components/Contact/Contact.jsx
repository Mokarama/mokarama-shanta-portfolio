
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bw4do1j",   
        "template_edfzxfm",  
        form.current,
        "jL_aTTITiTXlHZg0z"       
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen  text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#111]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Connect With Me 🚀
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:outline-none focus:border-pink-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
