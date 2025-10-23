import { Link, useLocation } from "react-router-dom";
import { BookOpen, Briefcase, GraduationCap, Home, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
const navItems = [{
  name: "Home",
  path: "/",
  icon: Home
}, {
  name: "Experience",
  path: "#experience",
  icon: Briefcase
}, {
  name: "Skills",
  path: "#skills",
  icon: User
}, {
  name: "Education",
  path: "#education",
  icon: GraduationCap
}, {
  name: "Reading List",
  path: "/reading-list",
  icon: BookOpen
}, {
  name: "Contact",
  path: "#contact",
  icon: Mail
}];
export const Navigation = () => {
  const location = useLocation();
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleNavClick = (path: string) => {
    if (path.startsWith("#")) {
      scrollToSection(path);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => {
            const Icon = item.icon;
            if (item.path.startsWith("#")) {
              return <button key={item.name} onClick={() => handleNavClick(item.path)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </button>;
            }
            return <Link key={item.name} to={item.path} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>;
          })}
          </div>

          <Button className="gradient-primary glow-primary">
            <a href="mailto:dipanshusehgalsocial@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </nav>;
};