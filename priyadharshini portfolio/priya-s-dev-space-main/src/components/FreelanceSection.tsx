import { Globe, Layout, Palette, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom responsive websites built with React, modern technologies, and best practices.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive sales.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Transform outdated interfaces into modern, user-friendly experiences with Figma.',
  },
];

const freelanceProjects = [
   {
    title: 'Language Academy Website',
    client: 'Scholars Abroad Solutions',
    description: 'Built a comprehensive website for a language academy helping students with abroad education.',
    link: 'https://scholarsabroadsolutions.in',
  },
   {
    title: 'Business Website',
    client: 'Rani Agencies',
    description: 'Developed a professional business website with modern design and responsive layout.',
    link: 'https://raniagencies.in',
  },
  {
    title: 'NGO Website',
    client: 'Land of Love Foundation',
    description: 'Created a heartfelt website for an NGO dedicated to social welfare and community support.',
    link: 'https://landoflovefoundation.in',
  },
];

const FreelanceSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919384554295?text=Hi%20Priyadharshini,%20I%20would%20like%20to%20discuss%20a%20project%20opportunity.', '_blank');
  };

  return (
    <section id="freelance" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Work with me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-serif">
            Freelance Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group text-center border border-border/50 hover:border-primary/30 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Freelance Projects */}
          <div className={`mb-12 scroll-hidden ${isVisible ? 'scroll-visible delay-400' : ''}`}>
            <h3 className="text-xl font-bold text-foreground text-center mb-6">Recent Freelance Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {freelanceProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30 group block hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded font-medium">{project.client}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-r from-primary/10 via-accent to-primary/10 rounded-2xl p-8 text-center scroll-hidden ${isVisible ? 'scroll-visible delay-500' : ''}`}>
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively looking for freelance projects, remote work opportunities, and internships. 
              Let's collaborate and create something amazing together!
            </p>
            <Button size="lg" onClick={handleWhatsAppClick} className="group">
              <span>Let's Work Together</span>
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
