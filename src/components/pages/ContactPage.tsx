'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { oswald, openSans } from './HomePage';
import { ImagesSlider } from '../ui/image-slider';
import { images } from './HomePage';
import Nav from '@/components/ui/nav';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [purpose, setPurpose] = useState('general');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message, purpose });
    setName('');
    setEmail('');
    setMessage('');
    setPurpose('general');
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
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
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
                <span className={`${openSans.className} text-gray-300`}>+251 912 345 678</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div className="flex flex-col">
                  <a href="mailto:general@example.com" className={`${openSans.className} text-gray-300 hover:text-emerald-500 transition duration-300`}>general@example.com</a>
                  <span className={`${openSans.className} text-xs text-gray-400`}>(General Inquiries)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div className="flex flex-col">
                  <a href="mailto:business@example.com" className={`${openSans.className} text-gray-300 hover:text-emerald-500 transition duration-300`}>business@example.com</a>
                  <span className={`${openSans.className} text-xs text-gray-400`}>(Business Contact)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <div className="flex flex-col">
                  <a href="mailto:edu@example.com" className={`${openSans.className} text-gray-300 hover:text-emerald-500 transition duration-300`}>edu@example.com</a>
                  <span className={`${openSans.className} text-xs text-gray-400`}>(Educational Purposes)</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={`${openSans.className} text-gray-300 hover:text-emerald-500 transition duration-300`}>github.com/yourusername</a>
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
