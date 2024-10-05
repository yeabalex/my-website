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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="min-h-screen p-4 md:p-6 flex flex-col justify-center items-start z-50 w-full md:max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" p-6 rounded-lg w-full" // Changed max-w-xl to max-w-2xl
        >
          <h1 className={`${oswald.className} text-3xl md:text-4xl font-bold mb-6 text-white`}>
            CONTACT ME
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={`${openSans.className} block text-sm font-medium text-gray-300`}>Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`${openSans.className} block text-sm font-medium text-gray-300`}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={`${openSans.className} block text-sm font-medium text-gray-300`}>Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
        <div className="mt-6 ml-6">
          <Nav />
        </div>
      </div>
    </ImagesSlider>
  );
}
