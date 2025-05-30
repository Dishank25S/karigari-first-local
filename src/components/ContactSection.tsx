import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      await fetch('https://script.google.com/macros/s/AKfycbx7OCVR8ZRtZCFFlJxnTxTgHFsy5nIqJO6TTKlwt5qHlbpDWCY_23_ipWwstNKooihiog/exec', {
        method: 'POST',
        body: form,
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4B5563] mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4B5563] mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4B5563] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4B5563] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full flex items-center justify-center" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send size={18} className="ml-2" />}
                </button>
                {status && <p className="text-sm mt-2 text-center text-green-600">{status}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
