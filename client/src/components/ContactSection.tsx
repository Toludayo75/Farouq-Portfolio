import { Mail, Linkedin, Github, Download } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "farouqokeniyi2004@gmail.com",
      href: "mailto:farouqokeniyi2004@gmail.com",
      color: "bg-islamic-green-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/farouq-okeniyi",
      href: "https://linkedin.com/in/farouq-okeniyi-306443295",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Farouq-okeniyi",
      href: "https://github.com/Farouq-okeniyi",
      color: "bg-gray-700"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/farouq-okeniyi-306443295",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      href: "https://github.com/Farouq-okeniyi",
      color: "bg-gray-700 hover:bg-gray-600"
    },
    {
      icon: Mail,
      href: "mailto:farouqokeniyi2004@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-islamic-green-900/10 to-gold-900/10"></div>
      <div className="floating-element w-24 h-24 top-10 left-10 animate-float"></div>
      <div className="floating-element w-16 h-16 bottom-20 right-20 animate-pulse-slow"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, innovative projects, 
          or collaborating on cutting-edge AI-driven solutions.
        </p>
        
        <div className="mb-12">
          <a 
            href="/Farouq-Okeniyi-CV.pdf" 
            download="Farouq-Okeniyi-CV.pdf"
            className="inline-flex items-center gap-3 bg-islamic-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-islamic-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-testid="download-cv-button"
          >
            <Download size={24} />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="glass-effect p-8 rounded-2xl card-hover"
                data-testid={`contact-method-${index}`}
              >
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <a 
                  href={method.href}
                  className="text-slate-400 hover:text-islamic-green-500 transition-colors"
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={`contact-link-${index}`}
                >
                  {method.value}
                </a>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white transition-colors`}
                data-testid={`social-link-${index}`}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
