import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "rishithakkar0555@gmail.com",
      href: "mailto:rishithakkar0555@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9824830760",
      href: "tel:+919824830760"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "rthakkar0555",
      href: "https://github.com/rthakkar0555"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "rishi-thakkar-b53424276",
      href: "https://www.linkedin.com/in/rishi-thakkar-b53424276/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just have a conversation about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group-hover:text-primary transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-hero/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ready to Work Together?</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to connect, I'd love to hear from you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="shadow-glow hover:shadow-elegant transition-all duration-300"
                  onClick={() => window.open('mailto:rishithakkar0555@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open('https://www.linkedin.com/in/rishi-thakkar-b53424276/', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;