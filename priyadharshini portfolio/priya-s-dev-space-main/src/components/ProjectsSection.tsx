import { Folder, Cpu, Brain, Lightbulb, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const projects = [
  {
    title: 'RedTacton-Based Human Body Communication System',
    description: 'Designed a secure human-body-based data transfer system using RedTacton principles. Enabled short-range communication through human touch for secure data exchange.',
    technologies: ['Hardware', 'RedTacton', 'Secure Communication'],
    category: 'College Mini Project',
    year: '2025',
    icon: Cpu,
  },
  {
    title: 'AI-Based Gamified Platform for Rural STEM Education',
    description: 'Built an AI-powered gamified learning platform to improve STEM education accessibility. Integrated adaptive learning modules and interactive quizzes for student engagement.',
    technologies: ['AI', 'Gamification', 'Education Tech'],
    category: 'Smart India Hackathon',
    year: '2025',
    icon: Brain,
  },
  {
    title: 'Smart Street Light Automation & Fault Detection',
    description: 'Developed an IoT-enabled smart street lighting system with automatic ON/OFF control. Implemented real-time fault detection and alert mechanisms to reduce energy consumption.',
    technologies: ['IoT', 'Automation', 'Sensors'],
    category: '4G Club Hackathon Winner',
    year: '2025',
    icon: Lightbulb,
  },
  {
    title: 'Decentralized Health Wallet',
    description: 'Designed a secure decentralized digital health record system. Enabled patient-controlled access using blockchain concepts for improved data privacy and portability.',
    technologies: ['Blockchain', 'Healthcare', 'Security'],
    category: 'GDG & SQ1 Hackathon',
    year: '2025',
    icon: Shield,
  },
];

const ProjectsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">My recent work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-serif">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-primary/30 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
