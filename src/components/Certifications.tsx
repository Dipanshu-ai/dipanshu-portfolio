import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Anaplan Data Orchestrator", date: "Jan 2025" },
  { name: "AWS Certified AI Practitioner", date: "Nov 2024" },
  { name: "Anaplan Certified Solution Architect", date: "Jan 2024" },
  { name: "IBM Python for Data Science, AI and Development", date: "Nov 2023" },
  { name: "AWS Certified Cloud Practitioner", date: "Aug 2023" },
  { name: "Google Data Analytics Professional Certification", date: "June 2023" },
  { name: "Agile Project Management and Delivery", date: "Dec 2022" },
  { name: "Level 3 Certified Model Builder", date: "Aug 2022" },
  { name: "Level 2 Certified Model Builder", date: "Nov 2021" },
  { name: "Level 1 Certified Model Builder", date: "Nov 2021" },
  { name: "The Anaplan Way", date: "Nov 2021" },
];

export const Certifications = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Award className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <p className="font-medium leading-tight">{cert.name}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
