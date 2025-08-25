//       {/* Hero Section */}
//       <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-6  overflow-hidden">
//         {/* Smooth gradient background */}

//         {/* Animated Code Background */}
//         <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
//           <pre className="animate-code text-start w-[62%] mx-auto text-s leading-6 text-white font-mono whitespace-pre select-none">
//             {Array(60)
//               .fill(
//                 `// Portfolio Generated with Next.js + Tailwind
// // Developer: Mohamed Ashraf 

// const developer = {
//   name: "Mohamed Ashraf",
//   role: "Frontend Developer",
//   stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
//   passion: "Building clean, fast, and scalable web apps",
// };

// function introduce() {
//   console.log(\`Hi, I'm \${developer.name}\`);
//   console.log("Role:", developer.role);
//   console.log("Skills:", developer.stack.join(", "));
//   console.log("Passion:", developer.passion);
// }

// introduce();

// for (const tech of developer.stack) {
//   console.log("Currently mastering:", tech);
// }

//  lolo
//   😒
//  <((>
//  _||_


// `
//               )
//               .join("")}
//           </pre>
//         </div>

//         {/* Hero Content */}
//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
//         >
//           Hi, I’m Mohamed Ashraf
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
//           className="relative mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
//         >
//           A passionate Frontend Developer crafting clean, modern, and
//           user-friendly web experiences.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="relative mt-8 flex space-x-6"
//         >
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition"
//           >
//             View My Work
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 border border-gray-500 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
//           >
//             Contact Me
//           </a>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 1 }}
//           className="absolute bottom-10 flex flex-col items-center"
//         >
//           <span className="text-sm text-gray-400 mb-2">Scroll down</span>
//           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-3 bg-gray-400 rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </section>