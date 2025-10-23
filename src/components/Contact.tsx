import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Mail className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to discussing opportunities in EPM, Anaplan solutions, or any exciting projects
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:dipanshusehgalsocial@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">dipanshusehgalsocial@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919996209244"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 9996209244</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/dipanshu-sehgal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>

              <a 
                href="https://dipanshusehgal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-sm text-muted-foreground">dipanshusehgal.com</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="gradient-primary glow-primary">
                <a href="mailto:dipanshusehgalsocial@gmail.com">Send Me an Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
