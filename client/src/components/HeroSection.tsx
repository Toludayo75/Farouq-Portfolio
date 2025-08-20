import { ArrowRight, Code, Brain } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="floating-element w-20 h-20 top-20 left-10 animate-float"></div>
      <div className="floating-element w-12 h-12 top-40 right-20 animate-pulse-slow"></div>
      <div className="floating-element w-16 h-16 bottom-40 left-20 animate-float" style={{animationDelay: '-1s'}}></div>
      <div className="floating-element w-8 h-8 bottom-20 right-40 animate-pulse-slow" style={{animationDelay: '-2s'}}></div>
      <div className="floating-element w-14 h-14 top-60 right-80 animate-float" style={{animationDelay: '-1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Architecting <span className="gradient-text">AI-Driven</span><br/>
              Solutions, One Algorithm<br/>
              at a <span className="gradient-text">Time</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Full Stack Developer specializing in AI-integrated web applications, 
              secure authentication systems, and data-driven insights that power 
              the next generation of digital experiences.
            </p>
            <button 
              onClick={scrollToAbout}
              className="bg-islamic-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-islamic-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              data-testid="hero-explore-button"
            >
              Explore My Journey
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-islamic-green-500 to-gold-500 rounded-full animate-pulse-slow"></div>
              <img 
                src="/farouq-profile.jpg" 
                alt="Farouq Okeniyi - Full Stack Developer" 
                className="relative w-76 h-76 rounded-full object-cover border-4 border-navy-800 m-2 shadow-2xl"
                data-testid="hero-profile-image"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-islamic-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Code className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Brain className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
