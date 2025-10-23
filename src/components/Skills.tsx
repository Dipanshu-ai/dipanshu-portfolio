import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, BarChart3, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    category: "Technical Skills",
    icon: Code2,
    skills: ["Anaplan", "SQL", "Python", "Microsoft Excel", "Power BI"],
  },
  {
    category: "Cloud & Data",
    icon: Cloud,
    skills: ["AWS Certified", "Snowflake", "Informatica", "Data Orchestrator"],
  },
  {
    category: "Analytics",
    icon: BarChart3,
    skills: ["Sales Forecasting", "FP&A", "Supply Chain Planning", "KPI Dashboards"],
  },
  {
    category: "Methodologies",
    icon: Wrench,
    skills: ["Agile", "JIRA", "ALM", "Problem Solving"],
  },
  {
    category: "Business Skills",
    icon: Users,
    skills: ["Client Relationship Management", "Communication", "Time Management", "Writing"],
  },
  {
    category: "Domain Expertise",
    icon: Database,
    skills: ["EPM", "Budgeting", "Incentive Management", "Inventory Management"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Code2 className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Technical & Functional Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning technical implementation, business analysis, and strategic thinking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
