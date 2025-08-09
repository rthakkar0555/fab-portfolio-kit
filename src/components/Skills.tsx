import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Code2, Server, Wrench, Brain, Monitor } from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiC, SiCplusplus,
  SiReact, SiRedux, SiTailwindcss,
  SiExpress, SiNodedotjs, SiSocketdotio, SiFastapi, SiMongodb, SiPrisma, SiPostgresql,
  SiOpenai, SiN8N, SiPostman, SiGit, SiGithub, SiRadixui
} from "react-icons/si";
import DotGrid from "@/components/DotGrid";
const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"]
  }, {
    title: "Frontend Development",
    icon: <Monitor className="h-6 w-6" />,
    skills: ["React", "Redux Toolkit", "Shadcn", "Tailwind CSS"]
  }, {
    title: "Backend Development", 
    icon: <Server className="h-6 w-6" />,
    skills: ["Express.js", "Node.js", "WebSocket", "REST API", "FastAPI", "MongoDB", "Prisma", "PostgreSQL"]
  }, {
    title: "AI Agent",
    icon: <Brain className="h-6 w-6" />,
    skills: ["LangChain", "LangGraph", "Qdrant DB", "OpenAI API SDK", "n8n","Pinecone"]
  }, {
    title: "Tools & Other",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Postman (API Testing)", "Git", "GitHub"]
  }];
  
  const iconMap: Record<string, React.ElementType> = {
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Python': SiPython,
    'Java': SiOpenjdk,
    'C': SiC,
    'C++': SiCplusplus,
    'React': SiReact,
    'Redux Toolkit': SiRedux,
    'Tailwind CSS': SiTailwindcss,
    'Express.js': SiExpress,
    'Node.js': SiNodedotjs,
    'WebSocket': SiSocketdotio,
    'REST API': Code2,
    'FastAPI': SiFastapi,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'Prisma': SiPrisma,
    'LangChain': Code2,
    'LangGraph': Code2,
    'Qdrant DB': Code2,
    'OpenAI API SDK': SiOpenai,
    'n8n': SiN8N,
    'Pinecone': Code2,
    'Postman (API Testing)': SiPostman,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Shadcn': SiRadixui,
  };

  return (
    <section id="skills" className="py-20 bg-gradient-card rounded-none bg-slate-700 relative">
      <DotGrid 
        dotSize={2}
        gap={30}
        proximity={80}
        shockRadius={150}
        shockStrength={3}
        returnDuration={1.2}
        activeColor="hsl(var(--primary))"
        baseColor="hsl(var(--primary) / 0.2)"
        className="absolute inset-0"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical skills acquired through academic coursework, 
            personal projects, and competitive programming.
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = iconMap[skill] || Code2;
                      return (
                        <Tooltip key={skillIndex}>
                          <TooltipTrigger asChild>
                            <button
                              aria-label={skill}
                              title={skill}
                              className="p-2 rounded-lg bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                            >
                              <Icon size={20} />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>{skill}</TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};
export default Skills;