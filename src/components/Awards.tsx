import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Award, BookOpen, Code, ExternalLink, RefreshCw } from "lucide-react";

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
        },
        {
          title: "PyQuest Hackathon",
          description: "Python-based hackathon competition at college level",
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

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Awards & Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in competitive programming, problem-solving, 
            and continuous learning through certifications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {achievements
            .filter((category) => category.category !== "Problem Solving")
            .map((category, categoryIndex) => (
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