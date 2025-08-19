import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Code2, Server, Wrench, Brain, Monitor } from "lucide-react";
import {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiC, SiCplusplus,
  SiReact, SiRedux, SiRadixui, SiTailwindcss,
  SiExpress, SiNodedotjs, SiSocketdotio, SiFastapi, SiMongodb, SiPrisma, SiPostgresql,
  SiOpenai, SiN8N, SiDatabricks,
  SiPostman, SiGit, SiGithub
} from "react-icons/si";
import DotGrid from "@/components/DotGrid";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"]
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["React", "Redux Toolkit", "Shadcn", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Express.js", "Node.js", "WebSocket", "REST API", "FastAPI", "MongoDB", "Prisma", "PostgreSQL"]
    },
    {
      title: "AI Agent",
      icon: <Brain className="h-6 w-6" />,
      skills: ["LangChain", "LangGraph", "Qdrant DB", "OpenAI API SDK", "n8n", "Pinecone"]
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Postman (API Testing)", "Git", "GitHub"]
    }
  ];

  const iconMap: Record<string, React.ElementType> = {
    // Programming
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Python": SiPython,
    "Java": SiOpenjdk,
    "C": SiC,
    "C++": SiCplusplus,

    // Frontend
    "React": SiReact,
    "Redux Toolkit": SiRedux,
    "Shadcn": SiRadixui,
    "Tailwind CSS": SiTailwindcss,

    // Backend
    "Express.js": SiExpress,
    "Node.js": SiNodedotjs,
    "WebSocket": SiSocketdotio,
    "REST API": Code2, // No official icon
    "FastAPI": SiFastapi,
    "MongoDB": SiMongodb,
    "Prisma": SiPrisma,
    "PostgreSQL": SiPostgresql,

    // AI
    "LangChain": Code2, // No official icon
    "LangGraph": Code2, // No official icon
    "Qdrant DB": Code2, // No official icon
    "OpenAI API SDK": SiOpenai,
    "n8n": SiN8N,
    "Pinecone": SiDatabricks, // Close enough icon for Pinecone

    // Tools
    "Postman (API Testing)": SiPostman,
    "Git": SiGit,
    "GitHub": SiGithub,
  };

  // Brand colors for each skill to render colorful badges
  const colorMap: Record<string, string> = {
    // Programming
    "JavaScript": "#F7DF1E",
    "TypeScript": "#3178C6",
    "Python": "#3776AB",
    "Java": "#F89820",
    "C": "#A8B9CC",
    "C++": "#00599C",

    // Frontend
    "React": "#61DAFB",
    "Redux Toolkit": "#764ABC",
    "Shadcn": "#A855F7",
    "Tailwind CSS": "#06B6D4",

    // Backend
    "Express.js": "#000000",
    "Node.js": "#339933",
    "WebSocket": "#6B7280",
    "REST API": "#6B7280",
    "FastAPI": "#009688",
    "MongoDB": "#47A248",
    "Prisma": "#2D3748",
    "PostgreSQL": "#4169E1",

    // AI
    "LangChain": "#2BFF88",
    "LangGraph": "#F59E0B",
    "Qdrant DB": "#8A2BE2",
    "OpenAI API SDK": "#10A37F",
    "n8n": "#F05A4F",
    "Pinecone": "#7C3AED",

    // Tools
    "Postman (API Testing)": "#FF6C37",
    "Git": "#F05032",
    "GitHub": "#181717",
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
                      const color = colorMap[skill] || "#60A5FA"; // fallback
                      return (
                        <div
                          key={skillIndex}
                          className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-white text-black border-slate-200 hover:border-primary hover:bg-white transition-all duration-200 shadow-sm"
                          aria-label={skill}
                          title={skill}
                        >
                          <span className="grid place-items-center rounded-md w-[22px] h-[22px] bg-transparent">
                            <Icon size={14} color={color} />
                          </span>
                          <span>{skill}</span>
                        </div>
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
