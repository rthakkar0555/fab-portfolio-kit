import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Award, BookOpen, Code } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      category: "Coding Competitions",
      icon: <Trophy className="h-6 w-6" />,
      items: [
        {
          title: "Coding Competition Achievements",
          description: "Winner in one and runner-up in two college-level coding contests",
          badge: "Multiple Wins"
        }
      ]
    },
    {
      category: "Problem Solving",
      icon: <Target className="h-6 w-6" />,
      items: [
        {
          title: "Competitive Programming",
          description: "Solved over 250 problems combined across HackerRank, LeetCode, and GeeksforGeeks",
          badge: "250+ Problems"
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
          {achievements.map((category, categoryIndex) => (
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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
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