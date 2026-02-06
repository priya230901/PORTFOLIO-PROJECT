import { Trophy, Award, Calendar, Star, Medal, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const achievements = [
  {
    icon: Trophy,
    title: 'Anna University Idea Presentation',
    description: '1st Prize in University-level Idea Presentation',
    date: '2024',
    type: 'award',
  },
  {
    icon: Trophy,
    title: 'College Symposium - Web Development',
    description: '1st Prize in Web Development Competition',
    date: '2025',
    type: 'award',
  },
  {
    icon: Medal,
    title: '4G Club Hackathon',
    description: '3rd Prize for Smart Street Light Project',
    date: '2025',
    type: 'award',
  },
  {
    icon: Target,
    title: 'Naan Mudhalvan Hackathon',
    description: 'Finalist in state-level hackathon',
    date: '2025',
    type: 'event',
  },
  {
    icon: Star,
    title: 'Smart India Hackathon (Internal)',
    description: 'Finalist with AI-Based STEM Education Platform',
    date: '2025',
    type: 'event',
  },
  {
    icon: Target,
    title: 'SQ1 Buildathon',
    description: 'Finalist with Decentralized Health Wallet',
    date: '2026',
    type: 'event',
  },
  {
    icon: Award,
    title: 'NPTEL - Internet of Things',
    description: 'Certification with 72% score',
    date: '2025',
    type: 'certification',
  },
  {
    icon: Award,
    title: 'NPTEL - Joy of Computing using Python',
    description: 'Certification with 62% score',
    date: '2025',
    type: 'certification',
  },
];

const stats = [
  { label: 'Hackathons', value: '6+' },
  { label: 'Buildathon', value: '1' },
  { label: 'Project Expos', value: '2' },
  { label: 'Paper Presentations', value: '3' },
];

const AchievementsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Recognition & Growth</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-serif">
            Hackathons & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Summary */}
        <div className={`max-w-3xl mx-auto mb-12 scroll-hidden ${isVisible ? 'scroll-visible delay-200' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-card p-4 rounded-xl text-center border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-6 mb-8 scroll-hidden ${isVisible ? 'scroll-visible' : ''} ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-foreground">{achievement.title}</h3>
                          <span className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded font-mono">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">{achievement.description}</p>
                      </div>
                    </div>
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

export default AchievementsSection;
