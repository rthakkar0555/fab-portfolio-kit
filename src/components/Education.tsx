import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Charotar University of Science and Technology (CHARUSAT)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2nd Year (2025 - Present)",
      cgpa: "9.5",
      coursework: "Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, Engineering Mathematics",
      location: "CSPIT"
    },
    {
      institution: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
      degree: "Higher Secondary Education (HSC) - Science Stream",
      period: "Completed: 2023",
      marks: true, // Flag to indicate this entry has special marks display
      coursework: "Physics, Chemistry, Mathematics",
      location: "GSEB"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in Computer Science with excellent performance and 
            relevant coursework in software development and algorithms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gradient-card border-primary/10 hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    {edu.location === "CSPIT" ? (
                      <img 
                        src="/img/cspit.png" 
                        alt="CSPIT college logo" 
                        className="h-12 w-12 object-contain rounded-lg"
                      />
                    ) : edu.location === "GSEB" ? (
                      <img 
                        src="/img/gseb.png" 
                        alt="GSEB logo" 
                        className="h-12 w-12 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                        <GraduationCap className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">2023-2027</span>
                      </div>
                    </div>
                    
                    {edu.location && (
                      <p className="text-primary font-medium mb-2">{edu.location}</p>
                    )}
                    
                    <p className="text-foreground font-medium mb-3">{edu.degree}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-4 w-4 text-primary" />
                      {edu.cgpa ? (
                        <span className="text-primary font-semibold">CGPA: <span className="bg-yellow-50 text-black px-1 rounded font-medium">{edu.cgpa}</span></span>
                      ) : edu.marks ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-semibold">Percentile Rank: <span className="bg-yellow-50 text-black px-1 rounded font-medium">99.40</span></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-semibold">ACPC Rank: <span className="bg-yellow-50 text-black px-1 rounded font-medium">321</span></span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-2">Relevant Coursework:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.coursework}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;