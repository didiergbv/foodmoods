import { Quote } from "lucide-react";

interface TestimonialsProps {
  dict: {
    testimonials: {
      title: string;
      description: string;
      items: Array<{
        quote: string;
        author: string;
        role: string;
      }>;
    };
  };
}

const Testimonials = ({ dict }: TestimonialsProps) => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{dict.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {dict.testimonials.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
