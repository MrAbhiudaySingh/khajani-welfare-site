import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Search, GraduationCap, TrendingUp, CheckCircle } from "lucide-react";

const EdudakshPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/projects/edudaksh-classroom.jpg')" }}
        />
        <Reveal variant="fade-up" className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-12">
          <h1 className="text-primary-foreground font-display text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            Tailored Learning for Tomorrow's Leaders
          </h1>
        </Reveal>
      </section>

      {/* About */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <Reveal variant="fade-right" className="md:col-span-5 sticky top-32">
            <div className="w-16 h-1 bg-accent mb-8" />
            <h2 className="text-primary font-display text-4xl md:text-5xl font-bold leading-tight">
              Empowering Through Targeted Support
            </h2>
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="md:col-span-7 text-muted-foreground text-lg leading-relaxed space-y-8">
            <p className="text-2xl leading-snug font-display text-primary border-l-4 border-accent pl-6 py-2">
              Launched in 2023, the EDUDAKSH initiative is specifically focused on addressing the educational disparities faced by government school girls aged 10-14.
            </p>
            <p>
              Our mission is to provide tailored remedial learning to ensure every child has the strong foundation they need to succeed in their future endeavors.
            </p>
            <p>
              By intervening during these crucial developmental years, EDUDAKSH bridges the critical learning gap, transforming educational outcomes and opening up new pathways for future leadership.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What EDUDAKSH Offers */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Differentiation</span>
              <h2 className="text-primary font-display text-4xl font-bold">What EDUDAKSH Offers</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Assesses individual learning level", desc: "We begin by understanding exactly where each student stands through comprehensive diagnostics." },
              { icon: GraduationCap, title: "Targeted remedial sessions", desc: "Focused interventions designed to build core competencies in mathematics and language skills." },
              { icon: TrendingUp, title: "Continuous progress monitoring", desc: "Regular, rigorous assessments ensure that learning goals are being met and strategies adjusted." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="bg-background p-10 border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300 h-full">
                  <item.icon className="text-accent mb-8" size={40} />
                  <h3 className="text-primary font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-accent py-20 px-6">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto text-center">
          <h2 className="text-accent-foreground font-display text-3xl md:text-4xl font-bold mb-16">Our Direct Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-accent-foreground">
            {[
              { num: "2023", label: "Year Launched" },
              { num: "10-14", label: "Target Age Group" },
              { num: "100%", label: "Remedial Focus" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-6xl md:text-7xl font-display font-bold mb-3 tracking-tight">{s.num}</div>
                <div className="font-semibold uppercase tracking-widest text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Infrastructure */}
      <section className="bg-primary py-24 px-6 text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="fade-right" className="order-2 lg:order-1 pr-0 lg:pr-12">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Ecosystem</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Infrastructure & Environment</h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 font-light">
              Providing a safe, well-equipped, and supportive environment is crucial for effective remedial learning.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Dedicated Classrooms", desc: "Optimized for small-group, intensive learning sessions." },
                { title: "Foundational Materials", desc: "Unfettered access to specialized learning toolkits." },
                { title: "Safe Spaces", desc: "Secure and highly inclusive environments designed specifically for girls." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle className="text-accent mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="block text-primary-foreground font-semibold text-lg mb-1">{item.title}</strong>
                    <span className="font-light text-primary-foreground/70">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('/images/projects/edudaksh-training.jpg')" }}
            />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default EdudakshPage;
