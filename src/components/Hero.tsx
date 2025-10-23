import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Dipanshu Sehgal</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Anaplan Solution Architect
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Certified Anaplan Solution Architect with 4+ years of experience in Enterprise Performance Management. 
            I specialize in digital transformation, building models from scratch, and driving strategic outcomes 
            across Sales Forecasting, FP&A, Supply Chain Management, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="gradient-primary glow-primary group"
              onClick={() => scrollToSection("#experience")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <a href="/Dipanshu_Sehgal_Resume.pdf" download="Dipanshu_Sehgal_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="https://www.linkedin.com/in/dipanshu-sehgal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:dipanshusehgalsocial@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
