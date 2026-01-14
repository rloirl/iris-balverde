import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS configuration
    const serviceID = 'service_l09a9gf';
    const templateID = 'template_naxpsjs';
    const publicKey = 'bW4JV1NsffKHC_SGo';

    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'iris.balverdeeah@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! I will get back to you soon.');
        setShowContactModal(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSending(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again or email me directly at iris.balverdeeah@gmail.com');
        setIsSending(false);
      });
  };

  return (
    <footer className="bg-nav-bg py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-libre text-2xl font-bold italic mb-4" style={{ color: '#922B2E' }}>
                Iris Balverde
              </h3>
              <p className="font-dm-sans leading-relaxed" style={{ color: '#922B2E' }}>
                Designer, developer, and digital problem-solver. I blend code with creativity to build stunning brands, functional systems, and everything in between. Let's bring your vision to life!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-libre text-lg font-bold mb-4" style={{ color: '#922B2E' }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                    className="font-dm-sans text-pink-400 hover:opacity-80 transition-all duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className="font-dm-sans text-pink-400 hover:opacity-80 transition-all duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}
                    className="font-dm-sans text-pink-400 hover:opacity-80 transition-all duration-200"
                  >
                    Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    className="font-dm-sans text-pink-400 hover:opacity-80 transition-all duration-200"
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-libre text-lg font-bold mb-4" style={{ color: '#922B2E' }}>
                Connect
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/iris-balverde-777ai222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-pink-100 text-pink-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/irishiraeth21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-pink-100 text-pink-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/rlo.irl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-pink-100 text-pink-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="bg-white hover:bg-pink-100 text-pink-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md cursor-pointer"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-200 pt-8">
            <p className="font-dm-sans text-center text-sm" style={{ color: '#922B2E' }}>
              © {currentYear} Iris Balverde. Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 relative shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 bg-pink-50 hover:bg-pink-100 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-libre text-2xl md:text-3xl font-bold italic mb-2" style={{ color: '#922B2E' }}>
              Get in Touch
            </h3>
            <p className="font-dm-sans text-pink-400 mb-6">
              Let's bring your vision to life!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="font-dm-sans text-sm font-medium mb-2 block" style={{ color: '#922B2E' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors duration-200 font-dm-sans"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="font-dm-sans text-sm font-medium mb-2 block" style={{ color: '#922B2E' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors duration-200 font-dm-sans"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="font-dm-sans text-sm font-medium mb-2 block" style={{ color: '#922B2E' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors duration-200 font-dm-sans"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="font-dm-sans text-sm font-medium mb-2 block" style={{ color: '#922B2E' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  rows="2"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors duration-200 font-dm-sans resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-dm-sans font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
