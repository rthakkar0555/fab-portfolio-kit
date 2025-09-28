import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Brain, Users, UtensilsCrossed, X, Play, Pause, Trophy } from "lucide-react";
import { useState, useRef, useEffect } from "react";
 
// Project Modal Component
const ProjectModal = ({ project }: { project: any }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {project.icon}
          </div>
          {project.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Video + Tech Stack + Achievement */}
        <div className="space-y-6">
          {/* Video Section */}
          {project.video && (
            <div className="relative">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    onClick={toggleVideo}
                    size="lg"
                    className="rounded-full w-16 h-16 bg-black/50 hover:bg-black/70 text-white"
                  >
                    {isVideoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack - Under Video */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge key={techIndex} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievement - Under Video */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Achievement</h3>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-accent-foreground font-medium">
                🏆 {project.achievement}
              </p>
            </div>
          </div>

          {/* Year - Under Video */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Year</h3>
            <p className="text-muted-foreground">{project.year}</p>
          </div>
        </div>

        {/* Right Side - Description + Key Features + Actions */}
        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button className="flex-1" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            {project.liveLink && (
              <Button className="flex-1" onClick={() => window.open(project.liveLink, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

// Simplified Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-elegant transition-all duration-300 group cursor-pointer">
          {/* Video Section */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
            {project.video ? (
              <video
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-primary/20 text-primary mb-4 mx-auto w-fit">
                    {project.icon}
                  </div>
                  <p className="text-sm text-muted-foreground">Demo video coming soon</p>
                </div>
              </div>
            )}
            
            {/* Play indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Content Section - Enhanced */}
          <CardHeader className="pb-3">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{project.year}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div>
              <p className="text-xs font-medium text-foreground mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/5 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Achievement */}
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-xs text-accent-foreground font-medium">
                🏆 {project.achievement}
              </p>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              {project.liveLink && (
                <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5" onClick={() => window.open(project.liveLink, '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <ProjectModal project={project} />
    </Dialog>
  );
};
 
// Competitive Programming Section Component
const CompetitiveProgrammingSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-full mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Competitive Programming Profile
        </h3>
        <p className="text-muted-foreground">
          Explore my competitive programming journey across various platforms
        </p>
      </div>
      
      <div className="flex justify-center">
        <div 
          className="relative w-[28rem] h-96 perspective-1000 cursor-pointer"
          onClick={() => window.open('https://codolio.com/profile/rthakkar', '_blank')}
        >
          <div 
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card - Profile image */}
            <div className="absolute inset-0 backface-hidden">
              <img 
                src="/img/profileCard.png" 
                alt="Competitive Programming Profile"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Back of card - Codolio button */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <Card className="w-full h-full bg-gradient-hero/10 border-primary/20 flex items-center justify-center">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">View My CP Profile</h3>
                    <p className="text-muted-foreground mb-6">
                      Check out my competitive programming achievements on Codolio
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="shadow-glow hover:shadow-elegant transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://codolio.com/profile/rthakkar', '_blank');
                    }}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View on Codolio
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const projects = [{
    title: "AI Expense Tracker",
    year: "2025",
    description: "AI-powered expense tracking with automatic categorization and analytics.",
    longDescription: "Built a comprehensive AI-driven expense management system that revolutionizes personal finance tracking. The application leverages Google Sheets as a robust database for storing financial data while integrating Gemini AI for intelligent transaction categorization and advanced analytics. I implemented sophisticated NLP techniques for parsing complex transaction descriptions, enabling the system to automatically categorize expenses with 95% accuracy. The platform features real-time expense tracking, automated receipt processing, and generates detailed financial reports with insights and spending patterns. Users can set budget limits, receive smart notifications, and track their financial goals through an intuitive dashboard. The system also includes advanced features like expense forecasting, trend analysis, and personalized financial recommendations based on spending behavior.",
    technologies: ["Python", "Google Sheets API", "Gemini AI"],
    achievement: "Runner-up in college competition",
    keyHighlights: ["AI categorization", "Real-time analytics", "Google Sheets integration"],
    summary: "Smart expense tracking with AI automation",
    icon: <Brain className="h-6 w-6" />,
    link: "#",
    liveLink: "https://example.com/ai-expense-tracker", // Add your live demo link here
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" // Sample video - replace with your actual video
  }, {
    title: "Group Study Platform",
    year: "2025",
    description: "Real-time collaboration platform for study groups with task management.",
    longDescription: "Developed a comprehensive web-based platform that transforms how students collaborate and study together. The application enables students to create and join study groups, assign tasks, track progress, and engage in real-time discussions. I implemented a sophisticated task-scoring system that encourages disciplined study habits through gamification elements. The platform features real-time messaging, file sharing, progress tracking, and collaborative note-taking capabilities. Students can create study schedules, set reminders, and track their academic progress through detailed analytics. The system includes advanced features like study group matching based on subjects and availability, automated progress reports, and integration with calendar systems. Built with modern web technologies, the platform ensures seamless real-time communication and data synchronization across all connected devices.",
    technologies: ["MongoDB", "Express.js", "Node.js", "WebSockets"],
    achievement: "Full-stack with real-time features",
    keyHighlights: ["Real-time collaboration", "Task management", "Progress tracking"],
    summary: "Collaborative study platform with real-time features",
    icon: <Users className="h-6 w-6" />,
    link: "#",
    liveLink: null, // No live demo available for this project
    video: null // Add your video URL here when available
  }, {
    title: "Food Ordering System",
    year: "2024",
    description: "Complete food delivery platform with user auth and admin panel.",
    longDescription: "Created a comprehensive restaurant-focused food delivery website that provides a complete e-commerce solution for the food industry. The platform includes robust user authentication, advanced search and filtering capabilities, seamless order management, and a comprehensive review system. I developed a sophisticated admin panel that allows restaurant owners to manage their menus, track orders, handle customer inquiries, and analyze business performance through detailed analytics. The system features real-time order tracking, payment integration, inventory management, and automated notifications. Users can browse restaurants, filter by cuisine type, read reviews, and place orders with custom modifications. The platform includes advanced features like recommendation algorithms, loyalty programs, and integration with delivery services. Built using the MERN stack, the application ensures scalability, security, and optimal performance across all devices.",
    technologies: ["MERN Stack", "GitHub Repository"],
    achievement: "Full e-commerce solution",
    keyHighlights: ["User authentication", "Order management", "Review system"],
    summary: "Full-stack food delivery with admin panel",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    link: "#",
    liveLink: "https://example.com/food-ordering", // Add your live demo link here
    video: null // Add your video URL here when available
  }];
  return <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projects & CP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building scalable applications with modern technologies, 
            from AI-powered tools to full-stack web platforms, plus my competitive programming journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          <CompetitiveProgrammingSection />
        </div>
      </div>
    </section>;
};
export default Projects;