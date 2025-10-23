import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      
      <footer className="py-8 border-t border-border text-center text-muted-foreground">
        <p>© 2025 Dipanshu Sehgal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
