"use client";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  img: string;
  link: string;
  details?: string;
  features?: string[];
  technologies?: string[];
  liveDemo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-4 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-800">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={24} className="text-gray-400" />
            </button>
            <h2 className="text-3xl font-bold text-cyan-400 pr-12">{project.title}</h2>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project Image */}
            <div className="relative mb-6">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Description</h3>
              <p className="text-gray-300 leading-relaxed">{project.desc}</p>
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
