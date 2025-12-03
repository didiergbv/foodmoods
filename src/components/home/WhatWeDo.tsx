import { ShoppingBag, Smartphone, TrendingUp } from "lucide-react";

interface WhatWeDoProps {
  dict: {
    whatWeDo: {
      title: string;
      description: string;
      catalogManagement: {
        title: string;
        description: string;
      };
      orderManagement: {
        title: string;
        description: string;
      };
      optimization: {
        title: string;
        description: string;
      };
    };
  };
}

const WhatWeDo = ({ dict }: WhatWeDoProps) => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{dict.whatWeDo.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {dict.whatWeDo.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{dict.whatWeDo.catalogManagement.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {dict.whatWeDo.catalogManagement.description}
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{dict.whatWeDo.orderManagement.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {dict.whatWeDo.orderManagement.description}
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">{dict.whatWeDo.optimization.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {dict.whatWeDo.optimization.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
