import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I am Harisa Saeed</span>
            <span className="block mt-2 text-3xl md:text-4xl gradient-text">Frontend-Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            I craft beautiful, user-friendly web experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Profile"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 text-lg">
                I'm a passionate Frontend Developer with expertise in building modern web applications.
                With a strong foundation in both front-end and back-end development, I create seamless
                digital experiences that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2 gradient-text">2+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2 gradient-text">10+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Next.js', 'React', 'TypeScript', 'Node.js',
              'TailwindCSS', , 'Html',
            ].map((skill) => (
              <div key={skill} 
                   className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                            border border-gray-100 text-center">
                <Code2 className="w-8 h-8 mb-3 mx-auto text-purple-600" />
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online shopping platform built with Next.js and Stripe',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
                tags: ['Next.js', 'TypeScript', 'Stripe']
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management tool with real-time updates',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
                tags: ['React', 'Node.js', 'Socket.IO']
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 text-lg">
            I'm currently available for freelance projects and full-time opportunities.
            If you're interested in working together, let's connect!
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full
                     hover:bg-purple-700 transition-colors text-lg font-medium"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 bg-white">
        <p>© {new Date().getFullYear()} Harisa Saeed. All rights reserved.</p>
      </footer>
    </main>
  );
}