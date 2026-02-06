import { 
  Code, 
  Palette, 
  Terminal, 
  GitBranch, 
  Brain, 
  MessageSquare, 
  Users,
  FileCode,
  Coffee,
  Cpu,
  PenTool,
  Sparkles,
  Bot,
  Wand2,
  MonitorSmartphone
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'bg-primary/10 text-primary',
    skills: [
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: FileCode },
    ],
  },
  {
    title: 'Programming Languages',
    color: 'bg-secondary/10 text-secondary',
    skills: [
      { name: 'C', icon: Cpu },
      { name: 'Java', icon: Coffee },
      { name: 'Python', icon: Terminal },
    ],
  },
  {
    title: 'Tools',
    color: 'bg-chart-1/20 text-chart-2',
    skills: [
      { name: 'VS Code', icon: MonitorSmartphone },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Canva', icon: PenTool },
    ],
  },
  {
    title: 'AI Tools',
    color: 'bg-chart-2/20 text-chart-2',
    skills: [
      { name: 'Google AI Studio', icon: Sparkles },
      { name: 'Claude', icon: Bot },
      { name: 'Cursor', icon: Wand2 },
      { name: 'Copilot', icon: Bot },
    ],
  },
  {
    title: 'Concepts',
    color: 'bg-chart-3/20 text-chart-4',
    skills: [
      { name: 'IoT', icon: Cpu },
      { name: 'Problem Solving', icon: Brain },
    ],
  },
  {
    title: 'Soft Skills',
    color: 'bg-chart-5/20 text-chart-5',
    skills: [
      { name: 'Communication', icon: MessageSquare },
      { name: 'Teamwork', icon: Users },
    ],
  },
];

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">What I can do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 font-serif">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <h3 className={`text-lg font-semibold mb-4 inline-block px-3 py-1 rounded-full ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <skill.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
