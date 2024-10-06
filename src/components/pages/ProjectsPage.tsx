'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { oswald, openSans } from './HomePage';
import { ImagesSlider } from '../ui/image-slider';
import { images } from './HomePage';
import Nav from '@/components/ui/nav';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  name: string;
  techStack: string[];
  description: string;
  thumbnailImage: string;
  screenshots: string[];
  link: string;
  deployedUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    name: "Resume Builder",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Amazon RDS", "Amazon S3", "Jest", "Prisma"],
    description: "A full-stack Resume Builder application with user authentication, including OAuth with Google. Users fill out a form about their experience, skills, info, etc. on their dashboard, and it generates a professional resume based on the information provided. Users can download the resume in PDF format and also share it using a custom link provided. Users can log in to their account at any time to edit their information, and it will generate a new resume with the updated information. All the servers, databases, and other cloud services are fully managed by me",
    thumbnailImage: "/images/ecommerce-thumbnail.jpg",
    screenshots: [
      "/images/ecommerce-screenshot1.jpg",
      "/images/ecommerce-screenshot2.jpg",
      "/images/ecommerce-screenshot3.jpg",
    ],
    link: "https://github.com/yourusername/ecommerce-platform",
    deployedUrl: "https://your-ecommerce-app.com",
    category: "Web Development",
  },
  {
    name: "My Speciality Dental Clinic",
    techStack: ["React.js", "Next.js", "", "Tailwind CSS"],
    description: "A fully responsive website for a dental clinic. It includes features such as contact form, and appointment booking. It is a fully responsive website that is also hosted on Vercel.",
    thumbnailImage: "/images/taskapp-thumbnail.jpg",
    screenshots: [
      "/images/taskapp-screenshot1.jpg",
      "/images/taskapp-screenshot2.jpg",
      "/images/taskapp-screenshot3.jpg",
    ],
    link: "https://github.com/yourusername/task-management-app",
    deployedUrl: "https://your-task-app.com",
    category: "Web Development",
  },
  {
    name: "Spotify Playlist Generator",
    techStack: ["Next.js", "Node.js", "Spotify API", "Tailwind CSS"],
    description: "A web app that allows users to generate a Spotify playlist based on a genre, artist, or simmilar artists. It uses Spotify's API to fetch songs and create a personalized playlist. Users can select a mood and generate a playlist based on that mood.",
    thumbnailImage: "/images/weather-api-thumbnail.jpg",
    screenshots: [
      "/images/weather-api-screenshot1.jpg",
      "/images/weather-api-screenshot2.jpg",
    ],
    link: "https://github.com/yourusername/weather-forecast-api",
    deployedUrl: "https://api.your-weather-service.com",
    category: "Backend Development",
  },
  {
    name: "Portfolio Website",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "A personal portfolio website showcasing projects, skills, and professional experience with smooth animations and responsive design.",
    thumbnailImage: "/images/portfolio-thumbnail.jpg",
    screenshots: [
      "/images/portfolio-screenshot1.jpg",
      "/images/portfolio-screenshot2.jpg",
      "/images/portfolio-screenshot3.jpg",
    ],
    link: "https://github.com/yourusername/portfolio-website",
    deployedUrl: "https://your-portfolio.com",
    category: "Web Development",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshotIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const categories = Array.from(new Set(projects.map(project => project.category)));

  useEffect(() => {
    const filtered = selectedCategory
      ? projects.filter(project => project.category === selectedCategory)
      : projects;
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedProject && currentScreenshotIndex < selectedProject.screenshots.length - 1) {
        setCurrentScreenshotIndex(currentScreenshotIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentScreenshotIndex > 0) {
        setCurrentScreenshotIndex(currentScreenshotIndex - 1);
      }
    },
  });

  const handlePrevious = () => {
    if (currentScreenshotIndex > 0) {
      setCurrentScreenshotIndex(currentScreenshotIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedProject && currentScreenshotIndex < selectedProject.screenshots.length - 1) {
      setCurrentScreenshotIndex(currentScreenshotIndex + 1);
    }
  };

  return (
    <ImagesSlider className="h-full" images={images}>
      <div className="min-h-screen p-4 md:p-6 flex flex-col justify-center items-start z-50">
        <h1 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white`}>
          MY PROJECTS
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <motion.button
            className={`${oswald.className} px-3 py-1 rounded ${
              selectedCategory === null ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`${oswald.className} px-3 py-1 rounded ${
                selectedCategory === category ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl md:max-w-2xl"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                className="bg-black bg-opacity-50 p-3 sm:p-4 rounded-lg aspect-square flex flex-col justify-between cursor-pointer w-full"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
              >
                <div>
                  <div className="relative w-full h-24 sm:h-32 mb-2 rounded-lg overflow-hidden">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h2 className={`${oswald.className} text-base sm:text-lg font-bold mb-1 sm:mb-2 text-emerald-300`}>{project.name}</h2>
                  <p className={`${openSans.className} text-xs text-gray-300 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-3`}>{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-1 sm:mb-2">
                    {project.techStack.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-emerald-500 bg-opacity-20 text-emerald-300 text-xs px-1 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="bg-emerald-500 bg-opacity-20 text-emerald-300 text-xs px-1 py-0.5 rounded">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors text-xs" onClick={(e) => e.stopPropagation()}>
                    GitHub
                  </a>
                  <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors text-xs" onClick={(e) => e.stopPropagation()}>
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-6 mb-6">
          <Nav />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <h2 className={`${oswald.className} text-2xl font-bold mb-4 text-emerald-300`}>{selectedProject.name}</h2>
              <p className={`${openSans.className} text-sm text-gray-300 mb-4`}>{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className="bg-emerald-500 bg-opacity-20 text-emerald-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div {...handlers} className="relative aspect-video mb-4">
                <Image
                  src={selectedProject.screenshots[currentScreenshotIndex]}
                  alt={`${selectedProject.name} screenshot ${currentScreenshotIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  disabled={currentScreenshotIndex === 0}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  disabled={currentScreenshotIndex === selectedProject.screenshots.length - 1}
                >
                  <FaChevronRight />
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                  {selectedProject.screenshots.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full mx-1 ${
                        index === currentScreenshotIndex ? 'bg-emerald-500' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                  GitHub Repository
                </a>
                <a href={selectedProject.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                  Live Demo
                </a>
              </div>
              <button
                className="mt-6 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ImagesSlider>
  );
}