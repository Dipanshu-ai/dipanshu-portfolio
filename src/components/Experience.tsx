import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Galderma",
    role: "Supply Chain: Distribution Requirements Planning",
    duration: "1.5 years (Ongoing)",
    achievements: [
      "Developed Distribution Requirements Planning solution for inventory replenishment across networks",
      "Designed data hub from scratch integrating Snowflake and Informatica",
      "Delivered BOM explosion, Supersession, and Stock Target calculations",
      "Created KPI dashboards and Executive reports for Inventories, Supply, Demand",
    ],
  },
  {
    company: "HP",
    role: "Sales Forecasting and Inventory Management",
    duration: "1.5 Years",
    achievements: [
      "Delivered end-to-end model development from scratch to go-live for EMEA, APJ and LATAM",
      "Optimized the Sales Forecasting model by 40%",
      "Led UAT, hypercare activities, and one-on-one end-user support during forecast cycles",
      "Implemented ALM concepts and trained team members",
    ],
  },
  {
    company: "Phillips",
    role: "Incentive and Compensation Management",
    duration: "1 Year",
    achievements: [
      "Developed Bonus calculation utilized by 40,000+ users",
      "Implemented APAC-specific proration logic",
      "Developed Commission calculation for China, Hong Kong and Taiwan",
      "Delivered core functionality demonstrations to stakeholders",
    ],
  },
  {
    company: "Electronic Arts",
    role: "FP&A",
    duration: "8 Months",
    achievements: [
      "Designed solutions for What-If Planning and Budget Scenarios",
      "Collaborated with financial analysts to gather requirements",
      "Guided team members on FP&A-related functional knowledge",
      "Demonstrated solutions to stakeholders",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Briefcase className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4+ years at Wipro Limited, delivering enterprise solutions across multiple domains
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.company}</CardTitle>
                    <CardDescription className="text-lg text-foreground/80">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
