import { HeartPulse, Brain, Lock, Github, ExternalLink, Trophy, FileText, BarChart3 } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: HeartPulse,
      title: "Healtify",
      description: "AI-driven health management system with personalized insights, background task processing using BullMQ and Redis, and containerized deployment with Docker CI/CD pipelines.",
      technologies: ["React", "Node.js", "AI Analytics", "Docker"],
      color: "from-islamic-green-500 to-islamic-green-700",
      techColor: "text-islamic-green-500",
      links: [
        { icon: Github, label: "GitHub", href: "https://github.com/Farouq-okeniyi" }
      ]
    },
    {
      icon: Brain,
      title: "AI Therapy Assistant",
      description: "Revolutionary mental health platform that secured $300K seed funding and Google recognition. Full-stack architecture with 30% improved therapy response accuracy.",
      technologies: ["React.js", "Express.js", "PostgreSQL", "AWS"],
      color: "from-blue-500 to-purple-700",
      techColor: "text-blue-400",
      links: [
        { icon: Github, label: "Private Repo", href: "https://github.com/Farouq-okeniyi" },
        { icon: Trophy, label: "Google Featured", href: "#" }
      ]
    },
    {
      icon: Lock,
      title: "Encryption Research",
      description: "Advanced analysis of encryption and decryption algorithms under memory constraints. Research findings guide secure system design for resource-limited applications.",
      technologies: ["Algorithm Analysis", "Security", "Research", "Optimization"],
      color: "from-red-500 to-pink-700",
      techColor: "text-red-400",
      links: [
        { icon: FileText, label: "Documentation", href: "https://github.com/Farouq-okeniyi" },
        { icon: BarChart3, label: "Analysis Report", href: "#" }
      ]
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my latest work in AI-driven development, secure authentication, 
            and data analysis
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 card-hover group"
                data-testid={`project-${index}`}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 bg-navy-700 ${project.techColor} text-sm rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.links.map((link, linkIndex) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={linkIndex}
                        href={link.href} // matches your projects array
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkIndex === 0 ? 'text-islamic-green-500 hover:text-islamic-green-400' : 'text-gold-500 hover:text-gold-400'} flex items-center gap-2 transition-colors`}
                        data-testid={`project-${index}-link-${linkIndex}`}
                      >
                        <LinkIcon size={16} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
