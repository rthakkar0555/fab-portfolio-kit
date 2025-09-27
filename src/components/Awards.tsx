import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Target, Award, BookOpen, Code, ExternalLink, RefreshCw, Zap, ChevronLeft, ChevronRight, Users, Calendar, MapPin } from "lucide-react";

// Photo Carousel Component
const PhotoCarousel = ({ photos, currentIndex, onIndexChange }: { photos: string[], currentIndex: number, onIndexChange: (index: number) => void }) => {
  const nextPhoto = () => {
    onIndexChange((currentIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    onIndexChange((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <img
          src={photos[currentIndex]}
          alt={`Hackathon photo ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20"
          onClick={prevPhoto}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20"
          onClick={nextPhoto}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Photo indicators */}
      <div className="flex justify-center mt-3 gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => onIndexChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Hackathon Modal Component
const HackathonModal = ({ hackathon }: { hackathon: any }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Zap className="h-6 w-6" />
          </div>
          {hackathon.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Photo Gallery */}
        <div className="space-y-6">
          <PhotoCarousel 
            photos={hackathon.photos} 
            currentIndex={currentPhotoIndex}
            onIndexChange={setCurrentPhotoIndex}
          />
          
          {/* Achievement */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Achievement</h3>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-accent-foreground font-medium">
                🏆 {hackathon.achievement}
              </p>
            </div>
          </div>

          {/* Hackathon Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{hackathon.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{hackathon.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{hackathon.teamSize} members</span>
            </div>
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="space-y-6">
          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {hackathon.longDescription}
            </p>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Team Members</h3>
            <div className="flex flex-wrap gap-2">
              {hackathon.teamMembers.map((member: any, index: number) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/50 border border-primary/10 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-xs">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {hackathon.technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

const Awards = () => {
  const [platformStats, setPlatformStats] = useState({
    leetcode: { total: 0, easy: 0, medium: 0, hard: 0, loading: true },
    gfg: { total: 0, easy: 0, medium: 0, hard: 0, loading: true },
    hackerrank: { total: 0, easy: 0, medium: 0, hard: 0, loading: true }
  });

  // Fetch platform statistics
  const fetchPlatformStats = async (platform: string, username: string) => {
    try {
      // This would call your Supabase Edge Function
      const response = await fetch(`/api/coding-stats/${platform}/${username}`);
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${platform} stats:`, error);
      // Return mock data for now
      return {
        total: Math.floor(Math.random() * 200) + 50,
        easy: Math.floor(Math.random() * 80) + 20,
        medium: Math.floor(Math.random() * 60) + 15,
        hard: Math.floor(Math.random() * 40) + 5
      };
    }
  };

  useEffect(() => {
    const loadStats = async () => {
      try {
        // Replace these with your actual usernames
        const leetcodeData = await fetchPlatformStats('leetcode', 'your-leetcode-username');
        const gfgData = await fetchPlatformStats('gfg', 'your-gfg-username');
        const hackerrankData = await fetchPlatformStats('hackerrank', 'your-hackerrank-username');

        setPlatformStats({
          leetcode: { ...leetcodeData, loading: false },
          gfg: { ...gfgData, loading: false },
          hackerrank: { ...hackerrankData, loading: false }
        });
      } catch (error) {
        console.error('Error loading platform stats:', error);
        // Set mock data if API fails
        setPlatformStats({
          leetcode: { total: 125, easy: 45, medium: 52, hard: 28, loading: false },
          gfg: { total: 89, easy: 35, medium: 32, hard: 22, loading: false },
          hackerrank: { total: 67, easy: 28, medium: 25, hard: 14, loading: false }
        });
      }
    };

    loadStats();
  }, []);

  const achievements = [
    {
      category: "Hackathons",
      icon: <Zap className="h-6 w-6" />,
      items: [
        {
          title: "DataQuest Hackathon - MSBC Group",
          description: "AI-powered RAG system for appliance manuals with QR code integration",
          badge: "2nd Place",
          certificateLink: "#",
          // Hackathon specific data
          date: "2024",
          location: "CHARUSAT UNIVERSITY",
          teamSize: 2,
          achievement: "2nd Place - DataQuest Hackathon",
          longDescription: "Built Companion AI - a smart RAG system for appliances that makes retrieving information fast, unified, and super easy. The system combines multiple appliance manuals in a single collection, provides semantic search capabilities, and includes both admin and user panels. Users can scan QR codes on appliances to instantly access relevant information in under 30 seconds. The solution features React Native mobile app, React + Next.js web app, and a sophisticated backend with LangChain, FastAPI, and NVIDIA NIM integration.",
          photos: [
            "/placeholder.svg", // Replace with your actual hackathon photos
            "/placeholder.svg",
            "/placeholder.svg"
          ],
          teamMembers: [
            { name: "Your Name", role: "Lead Developer" },
            { name: "Malay Sheta", role: "Co-Developer" }
          ],
          technologies: ["LangChain", "FastAPI", "React", "Next.js", "React Native", "NVIDIA NIM", "Qdrant", "Python"]
        },
        {
          title: "Hackwave 2.0 - Echelon Dev Society",
          description: "Multi-Agent System for Problem Statement Refinement using AI agents",
          badge: "Top 50 Finalist",
          certificateLink: "https://lnkd.in/d8iunBn9",
          // Hackathon specific data
          date: "2024",
          location: "CDGI, Indore",
          teamSize: 3,
          achievement: "Top 50 out of 900+ teams - National Level Hackathon",
          longDescription: "Thrilled to share that our team X-Force made it to the Top 50 out of 900+ teams in Hackwave 2.0, a national-level hackathon organized by Echelon Dev Society, CDGI. In the first round (online submission via Unstop), we presented our idea and competed against hundreds of amazing teams across India. From there, we were selected as finalists and got the opportunity to participate in the 36-hour offline hackathon hosted at CDGI, Indore. During the finale, we built a Multi-Agent System for Problem Statement Refinement from scratch — designed to classify, analyze, and collaboratively improve problem statements using specialized AI agents. The system features agents for domain expertise, UI/UX, technical architecture, revenue models, debates, and moderation, with a supervisor agent to coordinate and refine the outputs. The workflow is designed for collaborative refinement and decision-making.",
          photos: [
            "/placeholder.svg", // Replace with your actual hackathon photos
            "/placeholder.svg",
            "/placeholder.svg"
          ],
          teamMembers: [
            { name: "Rishi Thakkar", role: "Lead Developer & System Architect" },
            { name: "Prit Patel", role: "AI Agent Specialist" },
            { name: "Malay Sheta", role: "Backend Developer" }
          ],
          technologies: ["LangGraph", "LangChain", "FastAPI", "Gemini API", "React", "Python", "AI Agents", "Multi-Agent Systems"]
        },
        {
          title: "PyQuest Hackathon",
          description: "Python-based hackathon competition at college level",
          badge: "Runner Up",
          certificateLink: "#",
          // Hackathon specific data
          date: "March 2024",
          location: "College Campus",
          teamSize: 4,
          achievement: "Runner Up - Python Hackathon",
          longDescription: "Developed an innovative Python-based solution that addressed real-world challenges. Our team worked collaboratively to create a comprehensive application that demonstrated advanced programming skills and creative problem-solving abilities.",
          photos: [
            "/placeholder.svg", // Replace with your actual hackathon photos
            "/placeholder.svg",
            "/placeholder.svg"
          ],
          teamMembers: [
            { name: "Your Name", role: "Lead Developer" },
            { name: "Team Member 1", role: "Backend Developer" },
            { name: "Team Member 2", role: "Frontend Developer" },
            { name: "Team Member 3", role: "UI/UX Designer" }
          ],
          technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"]
        }
        // You can add more hackathon entries here when you provide the details
      ]
    },
    {
      category: "Coding Competitions",
      icon: <Trophy className="h-6 w-6" />,
      items: [
        {
          title: "Realy and Blind Coding",
          description: "College-level coding competition",
          badge: "Winner",
          certificateLink: "#"
        },
        {
          title: "OS Arena",
          description: "Operating Systems competition at college level",
          badge: "Runner Up",
          certificateLink: "#"
        }
      ]
    },
    {
      category: "Problem Solving",
      icon: <Target className="h-6 w-6" />,
      items: [
        {
          title: "LeetCode",
          description: "Competitive programming problems",
          badge: platformStats.leetcode.loading ? "Loading..." : `${platformStats.leetcode.total} Problems`,
          platform: "leetcode",
          stats: platformStats.leetcode
        },
        {
          title: "GeeksforGeeks",
          description: "Data structures and algorithms practice",
          badge: platformStats.gfg.loading ? "Loading..." : `${platformStats.gfg.total} Problems`,
          platform: "gfg",
          stats: platformStats.gfg
        },
        {
          title: "HackerRank",
          description: "Programming challenges and contests",
          badge: platformStats.hackerrank.loading ? "Loading..." : `${platformStats.hackerrank.total} Problems`,
          platform: "hackerrank",
          stats: platformStats.hackerrank
        }
      ]
    },
    {
      category: "Certifications",
      icon: <Award className="h-6 w-6" />,
      items: [
        {
          title: "HackerRank Java Basics Certificate",
          description: "Earned certification for Java fundamentals",
          badge: "Certified"
        },
        {
          title: "NPTEL DSA (Java) Certification",
          description: "Completed the Data Structures and Algorithms course with a Silver Badge and scored 77%",
          badge: "Silver Badge"
        },
        {
          title: "NPTEL DAA (Design and Analysis of Algorithms) Certification",
          description: "Completed the course with a score of 71%",
          badge: "71% Score"
        }
      ]
    }
  ];

  // Hackathon Card Component
  const HackathonCard = ({ hackathon }: { hackathon: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-elegant transition-all duration-300 group cursor-pointer">
          {/* Photo Section */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
            {hackathon.photos && hackathon.photos.length > 0 ? (
              <img
                src={hackathon.photos[0]}
                alt={hackathon.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="text-center">
                  <div className="p-4 rounded-full bg-primary/20 text-primary mb-4 mx-auto w-fit">
                    <Zap className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-muted-foreground">Hackathon photos coming soon</p>
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

          {/* Content Section */}
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h4 className="font-semibold text-foreground leading-tight flex-1">
                {hackathon.title}
              </h4>
              <Badge 
                variant="secondary" 
                className="ml-2 bg-primary/10 text-primary border-primary/20 text-xs"
              >
                {hackathon.badge}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {hackathon.description}
            </p>
            
            {/* Hackathon Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{hackathon.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                <span>{hackathon.teamSize} members</span>
              </div>
            </div>
            
            {/* Achievement */}
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-xs text-accent-foreground font-medium">
                🏆 {hackathon.achievement}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <HackathonModal hackathon={hackathon} />
    </Dialog>
  );

  return (
    <section id="awards" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in competitive programming, problem-solving, 
            and continuous learning through certifications.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {achievements
            .filter((category) => category.category !== "Problem Solving")
            .map((category, categoryIndex) => (
              category.category === "Hackathons" ? (
                // Special layout for Hackathons - title separate from cards
                <div key={categoryIndex} className="space-y-8">
                  {/* Hackathons Title Section */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">{category.category}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Competitive programming and hackathon achievements showcasing problem-solving skills and innovation.
                    </p>
                  </div>
                  
                  {/* Hackathon Cards - 3 Column Layout for Laptop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.items.map((item, itemIndex) => (
                      <HackathonCard key={itemIndex} hackathon={item} />
                    ))}
                  </div>
                </div>
              ) : (
                // Regular layout for other categories
                <Card key={categoryIndex} className="bg-gradient-card border-primary/10 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="p-4 rounded-lg bg-card/50 border border-primary/10 hover:bg-card/80 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-foreground leading-tight flex-1">
                              {item.title}
                            </h4>
                            <Badge 
                              variant="secondary" 
                              className="ml-2 bg-primary/10 text-primary border-primary/20 text-xs"
                            >
                              {item.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {item.description}
                          </p>
                          
                          {/* Show difficulty breakdown for problem solving platforms */}
                          {item.stats && !item.stats.loading && (
                            <div className="mb-3">
                              <div className="flex flex-wrap gap-1 mb-2">
                                <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                                  Easy: {item.stats.easy}
                                </Badge>
                                <Badge variant="outline" className="text-xs bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                                  Medium: {item.stats.medium}
                                </Badge>
                                <Badge variant="outline" className="text-xs bg-red-500/10 text-red-600 border-red-500/20">
                                  Hard: {item.stats.hard}
                                </Badge>
                              </div>
                            </div>
                          )}

                          {item.certificateLink && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                              onClick={() => window.open(item.certificateLink, '_blank')}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View Certificate
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 text-primary">
                <Code className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-bold text-lg">Continuous Learning</p>
                  <p className="text-sm text-primary/80">Always exploring new technologies and improving skills</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;