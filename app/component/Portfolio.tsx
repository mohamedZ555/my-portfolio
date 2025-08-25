"use client";
import { motion } from "framer-motion";
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
  SiFramer,
  SiGithub,
  SiAngular,
} from "react-icons/si";
import { MdDesignServices, MdPhoneIphone, MdWidgets } from "react-icons/md";
import { FaBrain, FaBook, FaRocket } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { RiFolderSharedLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import Image from "next/image";

export default function HomePage() {
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
          <h1 className="text-xl font-bold text-cyan-400">Mohamed Ashraf</h1>
          <div className="space-x-6">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col bg-black justify-center items-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10 bg-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/matrex.gif')" }}
        ></div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Hi, I’m Mohamed Ashraf
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          A passionate Frontend Developer specialized in building responsive,
          multilingual, and dynamic web applications using the latest frontend
          technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative mt-8 flex space-x-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Me
          </a>
        </motion.div>
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
            { icon: <SiFramer size={40} />, name: "Framer Motion" },
            { icon: <SiGithub size={40} />, name: "GitHub" },
            { icon: <MdDesignServices size={40} />, name: "UI & UX" },
            { icon: <AiOutlineApi size={40} />, name: "API Integration" },
            { icon: <RiFolderSharedLine size={40} />, name: "Context API" },
            { icon: <GrOptimize size={40} />, name: "SEO Optimization" },
            {
              icon: <MdPhoneIphone size={40} />,
              name: "Responsive Web Design",
            },
            { icon: <FaBrain size={40} />, name: "Problem Solving" },
            { icon: <FaBook size={40} />, name: "Self-Learning" },
            { icon: <FaRocket size={40} />, name: "Fast Learner" },
            { icon: <MdWidgets size={40} />, name: "shadcn/ui" },
            { icon: <SiAngular size={40} />, name: "Angular" },
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
      <section id="projects" className="py-20 relative px-6">
        <h2 className="text-4xl relative font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 relative gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "E-commerce Platform",
              desc: "Full e-commerce platform with products listing, filtering, pagination, wishlist, cart, and checkout flow.",
              tags: ["Next.js 15", "TypeScript", "Tailwind", "REST API"],
              img: "/projects/ecommerce.png",
              link: "https://github.com/mohamedZ555",
            },
            {
              title: "Portfolio Website",
              desc: "Fully responsive personal portfolio showcasing projects, skills, and animations.",
              tags: ["React", "Framer Motion", "Tailwind"],
              img: "/projects/portfolio.png",
              link: "https://github.com/mohamedZ555",
            },
            {
              title: "Custom Sliders & Galleries",
              desc: "Multiple responsive image sliders (coverflow, autoplay, thumbnail sync) and custom galleries with Lightbox.",
              tags: ["Next.js", "Swiper.js", "Bootstrap"],
              img: "/projects/sliders.png",
              link: "https://github.com/mohamedZ555",
            },
            {
              title: "Multilingual Websites",
              desc: "Bilingual (Arabic/English) and trilingual (Arabic/French/English) projects using next-intl.",
              tags: ["Next.js 15", "next-intl", "Tailwind"],
              img: "/projects/multilingual.png",
              link: "https://github.com/mohamedZ555",
            },
            {
              title: "Profile Management System",
              desc: "User profile edit, image upload, forgot password flow, and account deletion.",
              tags: ["Next.js", "Context API", "REST API"],
              img: "/projects/profile.png",
              link: "https://github.com/mohamedZ555",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg"
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
                <p className="mt-3 text-gray-400">{project.desc}</p>
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
              </div>
              <a
                href={project.link}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-cyan-400 font-semibold transition-opacity"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
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
    </main>
  );
}
