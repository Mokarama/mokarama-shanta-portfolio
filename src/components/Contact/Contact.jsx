
import emailjs from "emailjs-com";
import { useRef } from "react";
import Motion from "../Motion/Motion";

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
    <div id="contact" className="min-h-screen pt-20 ">
      <Motion/>
    <h3 className="text-3xl pt-4 text-cyan-400 font-semibold my-2  shadow-4xl text-center "> Get In Touch</h3>
    <div className=" w-[300px] bg-blue-600 shadow-4xl mb-3 shadow-gray-400  flex mx-auto h-[5px] rounded-3xl border-b-1 border-b-amber-50"></div>
    <p className="text-xl text-white text-center my-2 pb-7">Let's collaborate on exciting projects or discuss opportunities</p>
    <div className="flex justify-center items-center   text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-[#111]">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Connect With Me 
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
     </div>
  );
};

export default Contact;
