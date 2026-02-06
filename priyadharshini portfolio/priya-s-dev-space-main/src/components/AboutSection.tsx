import { Code2, Brain, Trophy, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const highlights = [
  { icon: Code2, text: 'Front-End Developer' },
  { icon: Brain, text: 'AI Enthusiast' },
  { icon: Trophy, text: 'Hackathon Winner' },
  { icon: Rocket, text: 'Innovation Driven' },
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Get to know me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-serif">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className={`space-y-6 scroll-hidden-left ${isVisible ? 'scroll-visible-x delay-200' : ''}`}
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="text-foreground font-semibold">Priyadharshini</span>, an aspiring 
                Full-Stack Web Developer with a background in Electronics and Communication Engineering (ECE). 
                I enjoy building clean, user-friendly web solutions and exploring how 
                <span className="text-primary font-semibold"> IoT and AI technologies</span> can address real-world challenges.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                My journey has been shaped by <span className="text-foreground font-semibold">hackathons, academic projects, and freelancing</span>, 
                where I've collaborated with diverse teams, worked under tight deadlines, and transformed ideas into 
                functional solutions. I've developed platforms focused on education, automation, healthcare, and 
                social impact, always prioritizing usability, efficiency, and scalability.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Beyond development, I actively contribute to tech communities, take on leadership roles, and 
                continuously upskill myself. I'm currently seeking <span className="text-primary font-semibold">internship opportunities</span> where 
                I can learn, contribute, and grow as a developer.
              </p>
            </div>

            <div 
              className={`grid grid-cols-2 gap-4 scroll-hidden-right ${isVisible ? 'scroll-visible-x delay-300' : ''}`}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
