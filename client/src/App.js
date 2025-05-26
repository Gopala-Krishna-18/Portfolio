// Add these imports at the top
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon, FaGithub as FaGithubAlt, FaImages, FaUserAlt, FaCalendarAlt, FaTint, FaMapMarkerAlt, FaPhoneAlt, FaTimes, FaChevronLeft, FaChevronRight, FaImage, FaVideo } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import profileImage from './me.jpg'; // Import the profile image
import logo1 from './logo1.jpg'; 

// Create a new HobbiesSection component
const HobbiesSection = () => {
  const hobbies = ["Cricket", "Badminton", "Cooking", "Video games"];
  
  return (
    <div className="relative z-10 mb-8 w-full max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        My Hobbies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby}
            className="bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-white aspect-square hobby-card"
            whileHover={{ 
              scale: 1.05,
              rotate: Math.random() * 4 - 2,
              boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {hobby === "Cricket" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 hobby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            )}
            {hobby === "Badminton" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 hobby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
                <line x1="12" y1="12" x2="12" y2="22" />
              </svg>
            )}
            {hobby === "Cooking" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 hobby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 19h12M6 5h12M8 5v14M16 5v14" />
                <path d="M12 5v4M12 13v6" />
              </svg>
            )}
            {hobby === "Video games" && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 hobby-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4M8 10v4M16 10l2 2-2 2" />
              </svg>
            )}
            <span className="text-lg font-bold">{hobby}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Email click handler function
const handleEmailClick = () => {
  window.location.href = "mailto:gopala.18.krishna@gmail.com";
};

const ProfileSection = () => {
  const profile = {
    name: "Gopala Krishna",
    profilePic: profileImage, // Use the imported image
    dob: "09/09/2004",
    bloodGroup: "B+ve",
    email: "gopala.18.krishna@gmail.com",
    phone: "+91 7550242131",
    location: "Chennai, Tamil Nadu",
    linkedin: "https://www.linkedin.com/in/gopala-krishna-3a2517274",
    github: "https://github.com/Gopala-Krishna-18"
  };

  return (
    <div className="relative z-10 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 rounded-xl shadow-xl p-10 max-w-xl w-full transition-all duration-500 hover:scale-105">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white dark:border-gray-800 object-cover object-top"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-600 dark:bg-blue-500 rounded-full p-2 shadow-lg">
            <FaUserAlt className="text-white text-xl" />
          </div>
        </div>
        
        <div className="text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-6">
            MERN Stack Developer
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-600 dark:text-gray-400" />
              <span className="text-gray-800 dark:text-white">
                <span className="font-semibold">DOB:</span> {profile.dob}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaTint className="text-red-500 dark:text-red-400" />
              <span className="text-gray-800 dark:text-white">
                <span className="font-semibold">Blood Group:</span> {profile.bloodGroup}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600 dark:text-green-400" />
              <span className="text-gray-800 dark:text-white">
                <span className="font-semibold">Location:</span> {profile.location}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-white">
                <span className="font-semibold">Phone:</span> {profile.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center gap-6">
        <motion.a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 text-3xl transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -8 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white text-3xl transition"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:gopala.18.krishna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.95 }}
          className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 text-3xl transition"
          onClick={handleEmailClick}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </div>
  );
};

// Create a MediaViewer component that can be used in both routes
const MediaViewer = ({ onClose }) => {
  // Media files from the public directory
  const images = Array.from({ length: 10 }, (_, i) => `/fig${i + 1}.png`);
  const videos = Array.from({ length: 7 }, (_, i) => `/vid${i + 1}.mp4`);
  
  const [mediaType, setMediaType] = useState('images'); // 'images' or 'videos'
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const currentMedia = mediaType === 'images' ? images : videos;
  const selectedMedia = currentMedia[selectedIndex];
  
  // Navigate between media items
  const navigateMedia = useCallback((direction) => {
    setSelectedIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      
      // Loop around if at the ends
      if (newIndex < 0) newIndex = currentMedia.length - 1;
      if (newIndex >= currentMedia.length) newIndex = 0;
      
      return newIndex;
    });
  }, [currentMedia]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          navigateMedia(-1);
          break;
        case "ArrowRight":
          navigateMedia(1);
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateMedia, onClose]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
      {/* Top bar with controls */}
      <div className="absolute top-0 left-0 right-0 bg-gray-900 flex items-center justify-between p-4 z-10">
        <div className="flex gap-4">
          <button 
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${mediaType === 'images' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => {
              setMediaType('images');
              setSelectedIndex(0);
            }}
          >
            <FaImage /> Images ({images.length})
          </button>
          <button 
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${mediaType === 'videos' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => {
              setMediaType('videos');
              setSelectedIndex(0);
              setIsPlaying(false);
            }}
          >
            <FaVideo /> Videos ({videos.length})
          </button>
        </div>
        <button 
          className="text-white text-3xl hover:text-gray-300"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </div>
      
      {/* Media display area */}
      <div className="relative w-full h-full flex items-center justify-center pt-16">
        {/* Previous button */}
        <button 
          className="absolute left-4 text-white text-5xl hover:text-gray-300 z-10"
          onClick={() => navigateMedia(-1)}
        >
          <FaChevronLeft />
        </button>
        
        {/* Media content */}
        <div className="w-full h-full flex items-center justify-center">
          {mediaType === 'images' ? (
            <img 
              src={selectedMedia} 
              alt={`Figure ${selectedIndex + 1}`} 
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
          ) : (
            <video
              src={selectedMedia}
              className="max-h-[85vh] max-w-[85vw]"
              controls
              autoPlay={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}
        </div>
        
        {/* Next button */}
        <button 
          className="absolute right-4 text-white text-5xl hover:text-gray-300 z-10"
          onClick={() => navigateMedia(1)}
        >
          <FaChevronRight />
        </button>
      </div>
      
      {/* Media counter */}
      <div className="absolute bottom-4 text-white text-center">
        {selectedIndex + 1} / {currentMedia.length}
      </div>
    </div>
  );
};

// Modified Showcase component
function Showcase() {
  const navigate = useNavigate();
  
  // Automatically go back to home when closed
  const handleClose = () => {
    navigate('/');
  };
  
  return <MediaViewer onClose={handleClose} />;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll to hide indicator when reaching the end
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far user has scrolled (as percentage)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      // Hide indicator when user has scrolled more than 80% of the page
      setShowScrollIndicator(scrollPercentage < 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dummy project data (replace with your real project info)
  const projects = [
    {
      title: "Mobile Application using MERN Stack",
      description:
        "A mobile application built with the MERN stack for AI based recipe suggestions and healthy eating habits. Features include authentication, AI integration, and a beautiful UI.",
      tech: ["MongoDB", "Express.js", "React Native", "Node.js"],
      image: logo1, // Replace with your app screenshot
      github: "https://github.com/Gopala-Krishna-18/recipeapp",
      showcase: "/showcase",
    },
    // Add more projects here
  ];

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 overflow-x-hidden">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="fixed top-6 right-6 z-20 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-2xl" />
          ) : (
            <FaMoon className="text-gray-700 text-2xl" />
          )}
        </button>
        {/* Animated Background Circles/Blobs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl opacity-40"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full filter blur-2xl opacity-30"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-2xl opacity-20"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        {/* Extra Animated Objects at Corners and Sides */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 dark:bg-yellow-700 rounded-full filter blur-2xl opacity-30"
          animate={{ x: [0, -20, 0], y: [0, 30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-56 h-56 bg-green-200 dark:bg-green-900 rounded-full filter blur-2xl opacity-25"
          animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 11, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-32 h-32 bg-indigo-200 dark:bg-indigo-900 rounded-full filter blur-2xl opacity-20"
          animate={{ y: [0, 40, 0], x: [0, -15, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-32 h-32 bg-red-200 dark:bg-red-900 rounded-full filter blur-2xl opacity-20"
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
    

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Main Card (Landing) */}
                <section className="flex items-center justify-center min-h-screen" id="home">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 rounded-xl shadow-xl p-10 max-w-xl w-full text-center transition-colors duration-500 neon-hover-glow"
                  >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">
                      Gopala Krishna
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-6">
                      MERN Stack Developer & Mobile App Enthusiast
                    </h2>
                    <p className="text-gray-700 dark:text-gray-200 mb-8">
                      Hi! I'm a passionate Computer Science graduate, eager to build modern web and mobile applications. I love turning ideas into reality using the MERN stack and creating beautiful, user-friendly experiences.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-6 mb-8">
                      <motion.a
                        href="https://www.linkedin.com/in/gopala-krishna-3a2517274" // Fixed LinkedIn URL with https://
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 text-3xl transition"
                      >
                        <FaLinkedin />
                      </motion.a>
                      <motion.a
                        href="https://github.com/Gopala-Krishna-18" // Replace with your GitHub
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -8 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white text-3xl transition"
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href="mailto:gopala.18.krishna@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-200 text-3xl transition"
                        onClick={handleEmailClick}
                      >
                        <FaEnvelope />
                      </motion.a>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.97 }}
                      href="#projects"
                      className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-800 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition"
                    >
                      View My Projects
                    </motion.a>
                  </motion.div>
                  {/* Scroll Down Indicator - Enhanced for better visibility */}
                  {showScrollIndicator && (
                    <motion.div
                      className="fixed bottom-8 left-1/2 z-30"
                      style={{ transform: "translateX(-50%)" }}
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                        <svg width="32" height="32" fill="none" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" viewBox="0 0 24 24">
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </section>
                {/* Projects Section */}
                <section id="projects" className="relative z-10 py-20 px-4 bg-transparent flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
                    Projects
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
                    {projects.map((project, idx) => (
                      <motion.div
                        key={project.title}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:scale-105 neon-hover-glow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-semibold"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-auto">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition"
                            >
                              <FaGithubAlt /> Code
                            </a>
                           
                            <Link
                              to={project.showcase}
                              className="flex items-center gap-1 text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-200 font-semibold transition"
                            >
                              <FaImages /> Image & Videos
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
                {/* Education & Skills Section */}
                <section id="education-skills" className="relative z-10 py-20 px-4 bg-transparent flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
                    Education & Skills
                  </h2>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col md:flex-row gap-10 neon-hover-glow">
                    {/* Education Block */}
                    <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Education</h3>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-1">SSLC (10th)</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Nellai Nadar Matriculation Hr. Sec. School</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Overall: <span className="font-bold">74%</span> (2019-2020)</p>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-1">HSC (12th)</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Nellai Nadar Matriculation Hr. Sec. School</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">Overall: <span className="font-bold">85.33%</span> (2021-2022)</p>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-1">B.Sc. Computer Science</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Thiagarajar College, Madurai</p>
                      <p className="text-gray-600 dark:text-gray-400">Overall: <span className="font-bold">72%</span></p>
                    </div>
                    {/* Skills Block */}
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Technical Skills</h3>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {['JavaScript', 'React', 'React Native', 'Node.js', 'MongoDB', 'C'].map(skill => (
                          <span key={skill} className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-2">Personal Skills</h3>
                      <div className="flex flex-wrap gap-3">
                        {['Quick learner', 'Adaptive', 'Team player', 'Problem solver', 'Good communication'].map(skill => (
                          <span key={skill} className="px-4 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 rounded-full text-sm font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                {/* Certificates & Achievements Section */}
                <section id="certificates-achievements" className="relative z-10 py-20 px-4 bg-transparent flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
                    Certificates
                  </h2>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col gap-8 neon-hover-glow">
                    {/* Certificates List */}
                    <div>
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Certificates</h3>
                      <ul className="list-disc pl-6 space-y-3">
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../meta frontend developer.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">META FRONTEND DEVELOPER</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../JavaScript_certificate.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">JavaScript Certificate</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../Introduction to Mobile Development.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">Introduction to Mobile Development</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../mongoDB.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">MongoDB Certificate</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../Bootstrap_certificate.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">Bootstrap Certificate</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../Coding with Generative AI.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">Coding with Generative AI</a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL + "/../GIT_certificate.pdf"} target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline font-semibold">GIT Certificate</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/* Profile Details & Contact Section */}
                <section id="profile-contact" className="relative z-10 py-20 px-4 bg-transparent flex flex-col items-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
                    About Me & Contact
                  </h2>
                  
                  {/* Add HobbiesSection before ProfileSection */}
                  <HobbiesSection />
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col gap-8 neon-hover-glow">
                    {/* Profile Details */}
                    <ProfileSection />

                    {/* Languages and Interests */}
                    <div>
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Additional Information</h3>
                      <div className="space-y-3">
                        <p className="text-gray-700 dark:text-gray-200">
                          <span className="font-semibold">Languages:</span> English, Tamil
                        </p>
                        <p className="text-gray-700 dark:text-gray-200">
                          <span className="font-semibold">Interests:</span> Web Development, Mobile App Development, React Native Developer, MERN Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </div>
    </Router>
  );
}

// Neon effect styles
// Add these to your index.css or App.css:
// .neon-glow { box-shadow: 0 0 16px 2px #00fff7, 0 0 32px 4px #00fff7; }
// .dark .neon-glow { box-shadow: 0 0 24px 4px #ff00e6, 0 0 48px 8px #ff00e6; }
// .neon-text { text-shadow: 0 0 8px #00fff7, 0 0 16px #00fff7; }
// .dark .neon-text { text-shadow: 0 0 12px #ff00e6, 0 0 24px #ff00e6; }

export default App;
