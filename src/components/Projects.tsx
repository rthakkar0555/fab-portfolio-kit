import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Users, UtensilsCrossed } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Expense Tracker",
      year: "2025",
      description: "Built an AI-driven expense management system leveraging Google Sheets for storage and Gemini AI for transaction categorization and analytics. Implemented advanced NLP techniques for parsing transaction descriptions.",
      technologies: ["Python", "Google Sheets API", "Gemini AI"],
      achievement: "Secured the Runner-up Position in a college-level competition",
      icon: <Brain className="h-6 w-6" />,
      link: "#"
    },
    {
      title: "Group Study Collaboration Platform",
      year: "2025",
      description: "Developed a comprehensive web-based platform enabling students to create study groups, assign tasks, track progress, and engage in discussions. Implemented a task-scoring system to encourage disciplined study habits.",
      technologies: ["MongoDB", "Express.js", "Node.js", "WebSockets"],
      achievement: "Full-stack development with real-time features",
      icon: <Users className="h-6 w-6" />,
      link: "#"
    },
    {
      title: "Food Ordering and Review System",
      year: "2024",
      description: "Created a restaurant-focused food delivery website with user authentication, search filtering, order management, and a comprehensive review system. Admin panel included restaurant and user management features.",
      technologies: ["MERN Stack", "GitHub Repository"],
      achievement: "Complete e-commerce solution with admin panel",
      icon: <UtensilsCrossed className="h-6 w-6" />,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Project Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building scalable applications with modern technologies, 
            from AI-powered tools to full-stack web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    {project.year}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/5 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-sm text-accent-foreground font-medium">
                      🏆 {project.achievement}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;