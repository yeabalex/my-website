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
  deployedUrl?: string;
  category: string;
  cover?: boolean;
  video?: string
}

const projects: Project[] = [
  {
    name: "Resume Builder",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Amazon RDS", "Amazon S3", "Jest", "Prisma"],
    description: "A full-stack Resume Builder application with user authentication, including OAuth with Google. Users fill out a form about their experience, skills, info, etc. on their dashboard, and it generates a professional resume based on the information provided. Users can download the resume in PDF format and also share it using a custom link provided. Users can log in to their account at any time to edit their information, and it will generate a new resume with the updated information. All the servers, databases, and other cloud services are fully managed by me",
    thumbnailImage: "/resume.png",
    screenshots: [
      "/screenshots/resume1.png",
      "/screenshots/kraft.png",
    ],
    link: "https://github.com/yeabalex/resume-builder-client-side",
    deployedUrl: "https://kraftwerk.vercel.app/",
    category: "Backend + Cloud",
    cover: true,
    video: "https://www.youtube.com/embed/4oTcFhvMuSI?si=KbPTtYSN2w_K6t-w"
  },
  {
    name: "Spotify Playlist Curator",
    techStack: ["Next.js", "Node.js", "Spotify API", "Tailwind CSS"],
    description: "A web app that allows users to generate a Spotify playlist based on a genre, artist, or simmilar artists. It uses Spotify's API to fetch songs and create a personalized playlist. Users can select a mood and generate a playlist based on that mood.",
    thumbnailImage: "/Curatefy.png",
    screenshots: [
      ""
    ],
    link: "https://github.com/yeabalex/spotify-playlist-curator",
    deployedUrl: "https://curatefy.vercel.app/",
    category: "Backend Development",
    cover: true,
    video: "https://www.youtube.com/embed/YSC6w1LhDDI?si=KCJk2qKqqgHbdMpM"
  },
  {
    name: "Portfolio Website",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "A personal portfolio website showcasing projects, skills, and professional experience with smooth animations and responsive design.",
    thumbnailImage: "/yab.png",
    screenshots: [
    ],
    link: "https://github.com/yeabalex/my-website",
    category: "Web Development",
    cover: true,
  },
  {
    name: "CLI Data Analysis Tool",
    techStack: ["Shell", "JavaScript"],
    description: "A CLI data analysis tool with user interface that allows users to do a simple data analysis from a CSV file. It includes features such as filtering, sorting, and calculating statistics.",
    thumbnailImage: "/bash.png",
    screenshots: [
      "/screenshots/bash/bash1.png",
      "/screenshots/bash/bash2.png",
      "/screenshots/bash/bash3.png",
      "/screenshots/bash/bash4.png",
      "/screenshots/bash/bash5.png",
      "/screenshots/bash/bash6.png",
    ],
    link: "https://github.com/yeabalex/bash-data-analysis-tool",
    category: "Tools",
    cover: true,
  },
  /*{
    name: "My Speciality Dental Clinic",
    techStack: ["React.js", "Next.js", "", "Tailwind CSS"],
    description: "A fully responsive website for a dental clinic. It includes features such as contact form, and appointment booking. It is a fully responsive website that is also hosted on Vercel.",
    thumbnailImage: "/my-spec.png",
    screenshots: [
      "/screenshots/sp/sp1.png",
      "/screenshots/sp/sp2.png",
    ],
    link: "https://github.com/yourusername/task-management-app",
    deployedUrl: "https://your-task-app.com",
    category: "Web Development",
  },*/
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
      <div className="min-h-screen p-4 md:p-6 flex flex-col justify-center items-start z-50 backdrop-blur-sm">
        <h1 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white`}>
          PORTFOLIO
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
                className="bg-black bg-opacity-50 p-3 sm:p-4 rounded-lg flex flex-col justify-between cursor-pointer w-full h-[330px]"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(project)}
              >
                <div>
                  <div className="relative w-full h-36 mb-2 rounded-lg overflow-hidden">
                    <Image
                      src={project.thumbnailImage}
                      alt={project.name}
                      layout="fill"
                      objectFit={project.cover ? "cover" : "contain"}
                    />
                  </div>
                  <h2 className={`${oswald.className} text-base sm:text-lg font-bold mb-1 sm:mb-2 text-emerald-300`}>{project.name} <span className="text-gray-300 text-xs">(Click to view)</span></h2>
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
                  {project.deployedUrl && <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors text-xs" onClick={(e) => e.stopPropagation()}>
                  View Project
                  </a>}
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
              {((selectedProject.video && selectedProject.screenshots.length > 0) || (selectedProject.screenshots.length > 0)) && <div {...handlers} className="relative aspect-video mb-4">
                {selectedProject.video && currentScreenshotIndex === 0 &&<iframe className="rounded-lg w-full h-[85%]" src={selectedProject.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
                {((selectedProject.video && currentScreenshotIndex > 0) || (selectedProject.screenshots.length > 0 && !selectedProject.video)) && <Image
                  src={selectedProject.screenshots[currentScreenshotIndex]}
                  alt={`${selectedProject.name} screenshot ${currentScreenshotIndex + 1}`}
                  width={1000}
                  height={850}
                  objectFit="cover"
                  className="rounded-lg h-[100%] w-full"
                />}
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
              </div>}
              <div className="flex justify-between">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                  GitHub Repository
                </a>
                {selectedProject.deployedUrl && <a href={selectedProject.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                  View Project
                </a>}
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