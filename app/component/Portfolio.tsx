"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiAngular,
  SiRedux,
} from "react-icons/si";
import { MdDesignServices, MdPhoneIphone, MdWidgets } from "react-icons/md";
import { FaBrain, FaBook, FaGlobe } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { RiFolderSharedLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import ProjectModal from "./ProjectModal";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    desc: string;
    tags: string[];
    img: string;
    link: string;
    features: string[];
    liveDemo?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: {
    title: string;
    desc: string;
    tags: string[];
    img: string;
    link: string;
    features: string[];
    liveDemo?: string;
  }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Enhanced projects data with more details
  const projects = [
    {
    title: "Fadaa Marketing Corporate Website",
    desc: "Corporate website for a marketing agency showcasing branding, web development, and media services with modern animations and API-powered content.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
    img: "/projects/fadaa-marketing.png",
    link: "https://github.com/mohamedZ555",
    features: [
      "Corporate service showcase",
      "Dynamic content via API",
      "Multi-section modern design",
      "Smooth animations with Framer Motion",
      "Responsive layout across devices",
    ],
    liveDemo: "https://fadaa-marketing.com",
  },
    {
      title: "Johnson Protection Solutions",
      desc: "Business management platform for warranty cards and franchise operations, allowing the company to manage branches, franchises, products, and services seamlessly.",
      tags: ["Next.js 15", "Bootstrap", "API Integration", "Swiper"],
      img: "/projects/johnson.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Warranty card management system",
        "Franchise and branch administration",
        "Product and services showcase",
        "API-driven dynamic content",
        "Responsive design with Swiper sliders",
      ],
      liveDemo: "https://johnsonksa.net",
    },
    {
      title: "Clash Login System",
      desc: "Custom login portal for a cyber computer dashboard with responsive design and security features.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/admin-login-clash.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Modern responsive login interface",
        "Form validation and authentication logic",
        "Bootstrap-based UI design",
        "Integration with PHP backend",
        "Optimized for dashboard access",
      ],
    },
    {
      title: "Clash Dashboard",
      desc: "Redesigned dashboard for a cyber computer management system, delivering an improved user experience and clean interface.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/dashbord-clash.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Dashboard redesign with clean UI",
        "Enhanced usability for admins",
        "Bootstrap-based responsive layout",
        "Integration with existing Laravel backend",
        "Custom styling and improvements",
      ],
    },
    {
      title: "Nerdware Careers Portal",
      desc: "Corporate website for a tech company showcasing services and featuring a hiring page for job applications.",
      tags: ["Next.js 15", "Bootstrap", "API Integration"],
      img: "/projects/nerdware.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Company service showcase",
        "Dedicated hiring and careers page",
        "Responsive corporate design",
        "API-driven job listings",
        "SEO-friendly structure",
      ],
    },
    {
      title: "Borshama E-Commerce",
      desc: "Full-featured e-commerce platform with product catalog, shopping experience, and customer interaction features.",
      tags: ["Next.js 15", "Bootstrap", "API Integration"],
      img: "/projects/borshama.png", // placeholder image
      link: "https://github.com/mohamedZ555",
      features: [
        "Dynamic product catalog",
        "User-friendly shopping interface",
        "Responsive e-commerce design",
        "API-powered product management",
        "Scalable structure for large inventory",
      ],
    },
    {
      title: "Nuba Nile Cruises",
      desc: "Luxury tourism website for Nile cruise bookings, featuring stunning visuals, 360° views, and a full reservation system.",
      tags: [
        "Next.js 15",
        "Bootstrap",
        "API Integration",
        "Photo-Sphere-Viewer",
      ],
      img: "/projects/nuba-nile.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Cruise and room booking system",
        "360° panoramic location views",
        "Responsive travel design",
        "API-powered program details",
        "Multi-language support",
      ],
    },
    {
      title: "Fadaa Marketing Welcome Page",
      desc: "Interactive welcome page for Fadaa Marketing with animations and custom UI to redirect users to the correct system pages.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)", "Animations"],
      img: "/projects/fadaa-welcome-page.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Creative welcome page design",
        "Custom animations and transitions",
        "Error redirection handling",
        "Responsive layout",
        "Integration with Laravel system",
      ],
    },
    {
      title: "Dr. Clark Dental Clinic",
      desc: "Professional website for a dental clinic, handling appointments, bookings, and showcasing services with an elegant design.",
      tags: ["React.js", "JavaScript", "CSS"],
      img: "/projects/dr-clark.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Appointment booking system",
        "Service showcase for dental work",
        "Responsive medical website design",
        "Custom design and branding",
        "User-friendly patient experience",
      ],
    },
    {
      title: "Clash Landing Page",
      desc: "Landing page designed to welcome users before accessing the cyber computer system, with company policies and contact forms.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/clash-landing-page.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Responsive landing page design",
        "Contact form integration",
        "Company policies presentation",
        "Bootstrap-based UI",
        "Integration with Laravel backend",
      ],
    },
    {
      title: "WhatsJet Support System",
      desc: "Corporate system dashboard for managing customer support operations, with custom UI design and dashboard improvements.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/whatsjet-landing-page.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Customer support management dashboard",
        "UI design customization",
        "Responsive system interface",
        "Integration with Laravel backend",
        "Optimized workflow features",
      ],
    },
    {
      title: "School ERP Dashboard",
      desc: "Comprehensive school management system dashboard redesigned to fit client requirements and handle educational operations.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/school.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Dashboard redesign for schools",
        "Student and class management",
        "Responsive ERP system interface",
        "Laravel backend integration",
        "Customization for client needs",
      ],
    },
    {
      title: "Nomue Platform",
      desc: "Multi-vendor investment and operations platform with customized dashboard and branding adjustments.",
      tags: ["HTML", "CSS", "Bootstrap", "PHP (Laravel)"],
      img: "/projects/nomue.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Dashboard design customization",
        "Multi-vendor investment platform",
        "Responsive corporate design",
        "Integration with Laravel system",
        "Brand identity alignment",
      ],
    },

    {
      title: "Tazza E-Commerce",
      desc: "Healthy food e-commerce platform developed in two versions (React and Next.js), featuring product showcase, multi-language support, and interactive UI components.",
      tags: [
        "Next.js",
        "Bootstrap",
        "API Integration",
        "next-intl",
      ],
      img: "/projects/Tazza.png",
      link: "https://github.com/mohamedZ555",
      features: [
        "Developed in React.js and Next.js versions",
        "Dynamic product catalog",
        "Responsive e-commerce design",
        "Swiper-powered product sliders",
        "Multi-language support with next-intl",
      ],
    },
  ];

  return (
    <main className="font-sans text-gray-100 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(6,182,212,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]"></div>
      </div>

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl font-bold text-cyan-400">
            Mohamed Ashraf
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {["home", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={id === "home" ? "#" : `#${id}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/90 border-t border-gray-800 px-6 py-4 flex flex-col space-y-4">
            {["home", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={id === "home" ? "#" : `#${id}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pb-30 pt-20 md:h-screen relative flex flex-col bg-black justify-center items-center text-center px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 bg-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/matrex.gif')" }}
        ></div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight"
        >
          Mohamed Ashraf — Frontend Developer
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative md:hidden whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight"
        >
          Mohamed Ashraf<br></br>Frontend Developer
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative mt-4 sm:mt-6 text-base sm:text-lg xl:text-xl text-gray-300 px-2 xl:px-60"
        >
          I’m a Frontend Developer with expertise in building fast, responsive,
          and multilingual web applications. I specialize in modern frameworks
          like React and Next.js, crafting user-friendly experiences that blend
          performance with design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="px-5 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition text-sm sm:text-base"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-6 py-3 border border-gray-500 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition text-sm sm:text-base"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="pt-20 px-6 relative">
        <h2 className="text-4xl font-bold relative text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-cyan-400 font-semibold">Mohamed Ashraf</span>, 
            a Frontend Developer from Egypt. I specialize in building modern, 
            responsive, and multilingual web applications using 
            <span className="font-medium"> React.js, Next.js 15, TypeScript, and Tailwind/Bootstrap</span>.  
            Passionate about creating smooth user experiences, 
            I focus on blending performance with design to deliver high-quality products.
          </p>

          <div className="flex justify-center">
            <a
              href="/MohamedAshrafAbdElMoneemCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <h2 className="text-4xl font-bold relative text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="grid relative grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <SiHtml5 size={40} />, name: "HTML" },
            { icon: <SiCss3 size={40} />, name: "CSS" },
            { icon: <SiJavascript size={40} />, name: "JavaScript" },
            { icon: <SiTypescript size={40} />, name: "TypeScript" },
            { icon: <SiReact size={40} />, name: "React.js" },
            { icon: <SiNextdotjs size={40} />, name: "Next.js 15" },
            { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
            { icon: <SiBootstrap size={40} />, name: "Bootstrap" },
            { icon: <SiGithub size={40} />, name: "GitHub" },
            { icon: <SiAngular size={40} />, name: "Angular" },
            { icon: <SiRedux size={40} />, name: "Redux Toolkit" },
            { icon: <MdDesignServices size={40} />, name: "UI & UX" },
            { icon: <AiOutlineApi size={40} />, name: "API Integration" },
            { icon: <RiFolderSharedLine size={40} />, name: "Context API" },
            { icon: <GrOptimize size={40} />, name: "SEO Optimization" },
            {
              icon: <MdPhoneIphone size={40} />,
              name: "Responsive Web",
            },
            { icon: <FaBrain size={40} />, name: "Problem Solving" },
            { icon: <FaBook size={40} />, name: "Self-Learning" },
            { icon: <FaGlobe size={40} />, name: "next-intl" },
            { icon: <MdWidgets size={40} />, name: "shadcn/ui" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition flex flex-col items-center"
            >
              <div className="text-cyan-400 text-3xl">{skill.icon}</div>
              <p className="mt-3 font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pb-20 relative px-6">
        <h2 className="text-4xl relative font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 relative gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              onClick={() => openProjectModal(project)}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-gray-400">
                  {project.desc.length > 100
                    ? project.desc.slice(0,100) + "..."
                    : project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-cyan-400 font-medium text-sm flex items-center gap-2">
                  <span>Click to view details</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pb-20 px-6 relative">
        <h2 className="text-4xl relative font-bold text-center mb-12">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-4 relative gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <LuMail size={24} />,
              label: "Email",
              value: "mohamed.ashraff877@gmail.com",
              href: "mailto:mohamed.ashraff877@gmail.com",
            },
            {
              icon: <LuLinkedin size={24} />,
              label: "LinkedIn",
              value: "linkedin.com/in/mohamed-ashraf-428101322",
              href: "https://linkedin.com/in/mohamed-ashraf-428101322",
            },
            {
              icon: <LuGithub size={24} />,
              label: "GitHub",
              value: "github.com/mohamedZ555",
              href: "https://github.com/mohamedZ555",
            },
            {
              icon: <LuMapPin size={24} />,
              label: "Location",
              value: "Egypt",
              href: null, // no link
            },
          ].map((contact, index) =>
            contact.href ? (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition flex flex-col items-center"
              >
                <div className="text-cyan-400">{contact.icon}</div>
                <h3 className="mt-3 font-semibold">{contact.label}</h3>
                <p className="text-gray-400 text-sm mt-1">{contact.value}</p>
              </motion.a>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition flex flex-col items-center"
              >
                <div className="text-cyan-400">{contact.icon}</div>
                <h3 className="mt-3 font-semibold">{contact.label}</h3>
                <p className="text-gray-400 text-sm mt-1">{contact.value}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center overflow-hidden border-t border-gray-800 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="relative z-10 space-y-3">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-medium">Mohamed Ashraf</span>.
            All Rights Reserved
          </p>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.08),_transparent_70%)]"></div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      )}
    </main>
  );
}
