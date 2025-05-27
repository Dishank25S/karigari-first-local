import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }} // Make sure the image is in /public folder
    >
      {/* Dark overlay to highlight background and improve text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-white">Let's Collaborate</h2>
              <p className="text-gray-200 mb-8 max-w-md">
                We're interested in working with forward-thinking brands that value quality, craftsmanship, and meaningful design experiences.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-white">Email</h4>
                  <a href="mailto:hello@karigari.studio" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    hello@karigari.studio
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-white">Location</h4>
                  <p className="text-gray-200">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 p-8 border border-[#E5E5E5] backdrop-blur-md rounded-xl"
            >
              <h3 className="text-2xl mb-6 text-[#171717]">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4B5563] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4B5563] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4B5563] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4B5563] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-field"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
