import { Trophy, Rocket } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "$300K Funding Success",
      subtitle: "AI Therapy Assistant Project",
      description: "Led development of revolutionary mental health platform recognized by Google",
      color: "bg-islamic-green-600"
    },
    {
      icon: Rocket,
      title: "Performance Optimizer",
      subtitle: "20% System Reliability Improvement",
      description: "Enhanced system performance through advanced monitoring and analytics",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation. <span className="gradient-text">Precision.</span><br/>
            Excellence
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm <span className="text-islamic-green-500 font-semibold">Farouq Okeniyi</span>, a dynamic full stack developer and data analyst 
              specializing in AI-integrated web applications. My expertise spans JavaScript, TypeScript, and Go, 
              delivering robust solutions focused on authentication, authorization, and data-driven insights.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether architecting scalable backends with Node.js and Express.js, implementing JWT-based authentication, 
              or optimizing database performance with PostgreSQL and Drizzle ORM, I approach every project with precision 
              and purpose. My recent work includes leading the development of an AI-powered therapy assistant 
              that secured $300K in seed funding and earned Google's recognition.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Skilled in analyzing encryption and decryption algorithms under memory constraints, I leverage Docker, 
              CI/CD pipelines, and cloud platforms like AWS to streamline deployment and ensure high-performance 
              software solutions. Every line of code is crafted with performance, maintainability, and user 
              experience in mind.
            </p>
            <div className="text-islamic-green-500 font-semibold text-lg">
              Currently open to remote opportunities in AI-driven development, software engineering, 
              and full-stack development.
            </div>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className="glass-effect p-6 rounded-xl card-hover"
                  data-testid={`achievement-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <p className="text-slate-400">{achievement.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-300">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
