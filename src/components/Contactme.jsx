import React from 'react';
import Navbar from './Navbar';
import MyParticles from './MyParticles';
import { useSelector } from 'react-redux';
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

function Contactme() {
  const theme = useSelector((state) => state.page.mode);
  const field_theme = "inp-" + theme;
  const und = "und_" + theme;
  const [state, handleSubmit] = useForm("xldpjkdw");

  if (state.succeeded) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-2xl">
        <p>✅ Thanks for reaching out! I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <MyParticles />
      <div className="min-h-screen flex flex-col md:flex-row justify-center items-start p-10 gap-10">
        {/* LEFT SIDE — Contact Form */}
        <div className="flex-1 bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-300">
          <div className={`text-3xl mb-4 font-semibold`}>Let's Connect!</div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className={`w-full p-3 rounded-xl border focus:outline-none ${field_theme}`}
                required
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full p-3 rounded-xl border focus:outline-none ${field_theme}`}
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows="5"
                className={`w-full p-3 rounded-xl border focus:outline-none ${field_theme}`}
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              {state.submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — Contact Options / Social Cards */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-500 mb-4">
              Feel free to reach out through any of my social platforms below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:ashwotacharya@gmail.com"
                className="flex items-center gap-3 p-4 bg-white/20 hover:bg-white/40 rounded-xl transition"
              >
                <FaEnvelope className="text-2xl text-blue-500" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-500">Send me a message</div>
                </div>
              </a>

              <a
                href="https://github.com/Ashwot-Acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/20 hover:bg-white/40 rounded-xl transition"
              >
                <FaGithub className="text-2xl text-gray-700" />
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-gray-500">View my projects</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ashwot-acharya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/20 hover:bg-white/40 rounded-xl transition"
              >
                <FaLinkedin className="text-2xl text-blue-700" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-gray-500">Connect professionally</div>
                </div>
              </a>

              <a
                href="https://x.com/ashwotacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/20 hover:bg-white/40 rounded-xl transition"
              >
                <FaTwitter className="text-2xl text-sky-500" />
                <div>
                  <div className="font-semibold">Twitter</div>
                  <div className="text-sm text-gray-500">Follow my thoughts</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
