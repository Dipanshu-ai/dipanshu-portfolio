import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    institution: "Birla Institute of Technology and Science",
    degree: "Master of Technology",
    field: "Software Systems",
    duration: "2022-2025",
    highlights: [],
  },
  {
    institution: "Bengaluru City University",
    degree: "Bachelors in Computer Application",
    field: "Information Technology",
    duration: "2018-2021",
    highlights: [
      "Grade A across all semesters",
      "Mr. BCA 2018 awarded by the college",
      "NCC Student Volunteer (Social Work)",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <GraduationCap className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Academic Background</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in computer science and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="space-y-3">
                  <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                  <CardDescription className="text-lg text-foreground/80">
                    {edu.degree}
                  </CardDescription>
                  <p className="text-muted-foreground">{edu.field}</p>
                  <Badge variant="outline" className="w-fit flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.duration}
                  </Badge>
                </div>
              </CardHeader>
              {edu.highlights.length > 0 && (
                <CardContent>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
