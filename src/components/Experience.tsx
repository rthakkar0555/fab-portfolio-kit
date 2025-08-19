import { Briefcase, Calendar, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="container mx-auto px-6 py-16">
      <header className="mb-8 text-center">
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Strong foundation in competitive programming and practical AI agent orchestration using modern tools.
        </p>
      </header>

      <article aria-label="Web Development Intern experience">
        <Card>
          <CardHeader className="gap-2">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-md bg-muted p-2">
                <Briefcase className="h-5 w-5 text-foreground" aria-hidden />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">Web Development Intern (MERN Stack) — Mamo Technolabs LLP</CardTitle>
                <CardDescription className="mt-1 flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden />
                  <span>May 2025 – June 2025</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li>Completed a hands-on internship focused on full-stack development using the MERN stack.</li>
              <li>Developed and integrated RESTful APIs with front-end components.</li>
              <li>Collaborated in an agile environment and practiced Git-based team workflows.</li>
            </ul>

            <div className="mt-6">
              <Button asChild variant="secondary">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7344372394192437249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View internship certificate post on LinkedIn"
                  className="inline-flex items-center gap-2"
                >
                  <LinkIcon className="h-4 w-4" aria-hidden />
                  View Certificate on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default Experience;
