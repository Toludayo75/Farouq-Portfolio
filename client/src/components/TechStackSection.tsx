export default function TechStackSection() {
  const technologies = [
    { name: "React", icon: "⚛️", level: 80, color: "bg-blue-400" },
    { name: "JavaScript", icon: "📜", level: 85, color: "bg-yellow-400" },
    { name: "HTML5", icon: "🌐", level: 100, color: "bg-orange-500" },
    { name: "CSS3", icon: "🎨", level: 85, color: "bg-blue-500" },
    { name: "Tailwind", icon: "💨", level: 80, color: "bg-teal-400" },
    { name: "Node.js", icon: "🟢", level: 85, color: "bg-green-500" },
    { name: "Python", icon: "🐍", level: 75, color: "bg-blue-400" },
    { name: "Flask", icon: "🌶️", level: 75, color: "bg-gray-300" },
    { name: "Express", icon: "🚀", level: 85, color: "bg-gray-400" },
    { name: "PostgreSQL", icon: "🐘", level: 80, color: "bg-blue-600" },
    { name: "AWS", icon: "☁️", level: 75, color: "bg-orange-400" },
    { name: "Docker", icon: "🐳", level: 80, color: "bg-blue-500" },
    { name: "Git", icon: "📊", level: 100, color: "bg-red-500" },
    { name: "Nmap", icon: "🔍", level: 75, color: "bg-islamic-green-500" },
    { name: "Metasploit", icon: "🛡️", level: 75, color: "bg-red-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Technologies I work with daily to build secure, scalable, and AI-driven applications
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="tech-card rounded-2xl p-6 text-center"
              data-testid={`tech-${index}`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="font-semibold text-white mb-2">{tech.name}</h3>
              <div className="w-full bg-navy-600 rounded-full h-2">
                <div 
                  className={`${tech.color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <div className="text-xs text-slate-400 mt-2">{tech.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
