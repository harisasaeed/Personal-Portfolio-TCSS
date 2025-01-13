import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchProfile, fetchProjects, fetchSkills } from './api';
import { Profile, Project, Skill } from './types';
import { LoadingSpinner } from './components/LoadingSpinner';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, skillsData, projectsData] = await Promise.all([
          fetchProfile(),
          fetchSkills(),
          fetchProjects()
        ]);
        
        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold gradient-text">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                ['Home', 'home'],
                ['About', 'about'],
                ['Projects', 'projects'],
                ['Contact', 'contact']
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {[
                ['Home', 'home'],
                ['About', 'about'],
                ['Projects', 'projects'],
                ['Contact', 'contact']
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm {profile.name}</span>
            <span className="block mt-2 text-3xl md:text-4xl gradient-text">{profile.role}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            I craft beautiful, user-friendly web experiences
          </p>
          <div className="flex justify-center space-x-6">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${profile.social.email}`}
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
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
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 text-lg">{profile.bio}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2 gradient-text">{profile.experience}+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-2xl mb-2 gradient-text">{profile.projects}+</h3>
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
            {skills.map((skill) => (
              <div key={skill.name} 
                   className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                            border border-gray-100 text-center">
                <Code2 className="w-8 h-8 mb-3 mx-auto text-purple-600" />
                <p className="font-medium">{skill.name}</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
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
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700">
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
            href={`mailto:${profile.social.email}`}
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
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </main>
  );
}