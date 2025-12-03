import { CheckCircle2, FileCheck, Rocket } from "lucide-react";

interface HowItWorksProps {
  dict: {
    howItWorks: {
      title: string;
      description: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
  };
}

const HowItWorks = ({ dict }: HowItWorksProps) => {
  const icons = [FileCheck, CheckCircle2, Rocket];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{dict.howItWorks.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {dict.howItWorks.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dict.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < dict.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
