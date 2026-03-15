import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Droplets, TreePine, Heart, Shirt, BookOpen, UtensilsCrossed } from "lucide-react";

const BrijSevaPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary text-primary-foreground min-h-[80vh] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 z-0 opacity-40 mix-blend-luminosity grayscale">
          <div className="bg-cover bg-center border-r border-primary-foreground/20" style={{ backgroundImage: "url('/images/projects/brij-seva-jal.jpg')" }} />
          <div className="bg-cover bg-center border-r border-primary-foreground/20" style={{ backgroundImage: "url('/images/projects/brij-seva-plantation.jpg')" }} />
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/daan-utsav.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        <Reveal variant="fade-up" className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-8">
          <p className="uppercase tracking-[0.3em] text-accent font-bold text-sm">Project Brij-Seva Social Welfare</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
            Serving the Community,<br />Nurturing the Earth
          </h1>
          <div className="w-24 h-1 bg-accent my-4" />
          <p className="text-xl md:text-2xl font-display italic max-w-3xl text-primary-foreground/70 leading-relaxed">
            A dedicated effort to uplift communities through essential services, environmental restoration, and structured giving across the Brij region.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="w-full bg-accent text-accent-foreground py-12 px-8 border-y-4 border-primary">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { num: "10k+", label: "Daily Beneficiaries" },
            { num: "5,000", label: "Trees Planted" },
            { num: "50+", label: "Active Locations" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-4">
              <span className="font-display text-5xl font-bold mb-2">{s.num}</span>
              <span className="uppercase tracking-widest text-sm font-bold opacity-90">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Initiatives */}
      <section className="w-full max-w-7xl mx-auto px-8 py-20 flex flex-col gap-32">
        {/* Jal Seva */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal variant="fade-right" className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Droplets className="text-accent" size={36} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Jal Seva</h2>
            </div>
            <h3 className="text-2xl font-display italic text-secondary">Quenching Thirst During Summer</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our Jal Seva initiative focuses on providing clean and safe drinking water to the community during the harsh summer months. We establish water stations at key transit points, markets, and community centers.
            </p>
            <div className="mt-6 border-l-4 border-accent pl-6 py-2">
              <p className="font-bold text-primary uppercase tracking-wider text-sm mb-1">Impact</p>
              <p className="text-muted-foreground">Serving over 10,000 individuals daily across 50+ key transit points during peak summer.</p>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4" />
            <div
              className="w-full aspect-[4/3] bg-cover bg-center relative z-10 border-2 border-primary grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: "url('/images/projects/brij-seva-jal.jpg')" }}
            />
          </Reveal>
        </article>

        {/* Plantation Drives */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal variant="fade-right" className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary -translate-x-4 translate-y-4" />
            <div
              className="w-full aspect-[4/3] bg-cover bg-center relative z-10 border-2 border-primary grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: "url('/images/projects/brij-seva-plantation.jpg')" }}
            />
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <TreePine className="text-accent" size={36} />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Plantation Drives</h2>
            </div>
            <h3 className="text-2xl font-display italic text-secondary">Restoring the Green Cover</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Inspired by the lush heritage of Brij, our monsoon plantation drives aim to restore local flora. We focus on planting indigenous fruit-bearing and shade-providing trees.
            </p>
            <div className="mt-6 border-l-4 border-accent pl-6 py-2">
              <p className="font-bold text-primary uppercase tracking-wider text-sm mb-1">Success Rate</p>
              <p className="text-muted-foreground">85% survival rate among the 5,000+ saplings planted last season.</p>
            </div>
          </Reveal>
        </article>

        {/* Daan Utsav */}
        <article className="flex flex-col gap-12">
          <Reveal variant="fade-up" className="text-center flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <Heart className="text-accent" size={48} />
            <h2 className="font-display text-4xl md:text-6xl font-bold text-primary">Daan Utsav</h2>
            <h3 className="text-2xl font-display italic text-secondary">The Joy of Giving</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Celebrated during the festive season, Daan Utsav is our flagship initiative to encourage the spirit of giving back. We facilitate structured donation drives for essentials, winter clothing, and educational supplies.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { icon: Shirt, title: "Winter Relief", desc: "Distributing blankets and warm clothing to the homeless before the harsh winter sets in." },
              { icon: BookOpen, title: "Education Kits", desc: "Providing school supplies, bags, and books to children from underprivileged backgrounds." },
              { icon: UtensilsCrossed, title: "Annadaan", desc: "Organizing community meals and dry ration distribution for daily wage earners." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="bg-card border-2 border-border p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 h-full">
                  <item.icon className="text-accent mb-6" size={36} />
                  <h4 className="font-display text-2xl font-bold mb-4 text-primary">{item.title}</h4>
                  <div className="w-12 h-0.5 bg-accent mb-4" />
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default BrijSevaPage;
