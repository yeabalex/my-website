'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { oswald, openSans } from './HomePage';
import { ImagesSlider } from '../ui/image-slider';
import { images } from './HomePage';
import Nav from '@/components/ui/nav';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"

interface TemplateParams {
  to_name: string;
  from_name: string;
  message: string;
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    emailjs.init({
      publicKey: 'IjIoRVo3ZyRRuj3NN',
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 30000,
      },
    });
  }, [isInitialized]);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please complete the reCAPTCHA");
      return;
    }
    setIsLoading(true);
    setError("");
    setSuccess("");
    setIsInitialized(true);
    const templateParams: TemplateParams = {
      to_name: `Yeabsira ${email} has sent you a message`,
      from_name: name,
      message: message,
    };
    try {
      await emailjs.send('service_fi65v96', 'template_cfz7iio', {
        to_name: templateParams.to_name,
        from_name: templateParams.from_name,
        message: templateParams.message,
        'g-recaptcha-response': captchaToken
      });
      setSuccess("Email sent successfully!");
      setName('');
      setEmail('');
      setMessage('');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (error) {
      setError("Error sending email: " + error);
    } finally {
      setIsInitialized(false);
      setIsLoading(false);
    }
  };

  return (
    <ImagesSlider className="h-full" images={images}>
      <div className="min-h-screen py-4 md:p-6 flex flex-col justify-center items-start z-50 w-full md:max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-lg w-full backdrop-blur-sm"
        >
          <h1 className={`${oswald.className} text-4xl md:text-5xl font-bold mb-8 text-white text-left`}>
            GET IN TOUCH
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={`${openSans.className} block text-sm font-medium text-gray-300 mb-2`}>Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`${openSans.className} block text-sm font-medium text-gray-300 mb-2`}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full h-10 rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={`${openSans.className} block text-sm font-medium text-gray-300 mb-2`}>Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300"
                required
              ></textarea>
            </div>
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LelgVwqAAAAAPC18TChwuxRVZEZ2y3QIqxeha20"
                onChange={handleCaptchaChange}
              />
              <button
                type="submit"
                disabled={isLoading || !captchaToken}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isLoading || !captchaToken ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-300 transform hover:scale-105`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {error && <p className={`${openSans.className} text-red-500 text-sm mt-2`}>{error}</p>}
            {success && <p className={`${openSans.className} text-green-500 text-sm mt-2`}>{success}</p>}
          </form>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <h2 className={`${oswald.className} text-2xl font-semibold text-white mb-6`}>Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className={`${openSans.className} text-gray-300`}>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className={`${openSans.className} text-gray-300`}>+251 966134045</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div className="flex flex-col">
                  <a href="mailto:contact@yeabsiraa.com" className={`${openSans.className} text-gray-300 hover:text-emerald-500 transition duration-300`}>contact@yeabsiraa.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-6 ml-6 mb-6">
          <Nav />
        </div>
      </div>
    </ImagesSlider>
  );
}
