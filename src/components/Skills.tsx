import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, TestTube } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript (Node.js)", "Python", "Java", "C", "C++ (STL)"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Express.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "SQL Server Management Studio (SSMS)", "Oracle Database"]
    },
    {
      title: "Tools & Other",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Postman (API Testing)", "VS Code", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical skills acquired through academic coursework, 
            personal projects, and competitive programming.
          </p>
        </div>

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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;