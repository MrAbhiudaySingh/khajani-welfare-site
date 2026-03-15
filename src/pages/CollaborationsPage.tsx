import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Paintbrush, Store } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  brush: <Paintbrush size={22} />,
  storefront: <Store size={22} />,
};

const CollaborationsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-left" className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Institutional Framework</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.95] mb-8">
              Government & Global<br /><span className="text-accent">Collaborations</span>
            </h1>
            <div className="border-l-4 border-accent pl-8 py-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic leading-relaxed">
                "We build sustainable pathways for empowerment through strategic institutional partnerships and certified training frameworks."
              </p>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted opacity-50 -z-10 hidden lg:block"></div>
      </div>

      {/* UPSDM */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="fade-left" delay={100} className="lg:col-span-5 lg:order-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">State Partnership</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 mt-4 leading-tight">Uttar Pradesh Skill Development Mission (UPSDM)</h2>
              <p className="drop-cap text-muted-foreground text-lg leading-relaxed mb-8">
                Our flagship collaboration with UPSDM has created a certified pathway for women in the Braj region. This isn't merely training; it is a masterclass in traditional and modern tailoring techniques.
              </p>
              <div className="bg-primary text-primary-foreground p-8 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent"></div>
                <h4 className="font-bold text-accent text-xs uppercase tracking-[0.2em] mb-3">Key Outcome</h4>
                <p className="text-2xl font-display leading-tight">125 participants successfully certified and placed in commercial units.</p>
              </div>
            </Reveal>
            <Reveal variant="fade-right" className="lg:col-span-7 lg:order-1 relative">
              <div className="relative z-10">
                <img alt="Women in tailoring workshop" className="w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition duration-700" src="/images/projects/upsdm-tailor.jpg" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-primary -z-10"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MSME */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Central Government</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">Ministry of MSME</h2>
              <p className="text-primary-foreground/60 text-lg leading-relaxed">
                Preserving cultural heritage while ensuring economic viability through partnership with the Ministry of Micro, Small & Medium Enterprises.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: "brush", title: "Royal Sanjhi Art", desc: "Training women in the intricate, centuries-old paper cutting art of Sanjhi, indigenous to Mathura and Vrindavan." },
              { icon: "storefront", title: "Digital Marketing", desc: "Equipping artisans with digital literacy and marketing skills to sell their goods on e-commerce platforms." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 150}>
                <div className="bg-primary-foreground/5 p-10 border-t-4 border-accent group hover:bg-primary-foreground/10 transition duration-300">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition duration-300 text-primary-foreground">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-display text-3xl text-primary-foreground mb-4">{item.title}</h3>
                  <p className="text-primary-foreground/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* World Bank */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal variant="fade-right">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Global Initiative</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-none">World Bank<br /> Pro-Poor Tourism</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-primary font-display italic mb-8">
                "Integrating local artisans into the tourism value chain to ensure that economic benefits reach the grassroots level."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under the UP Pro-Poor Tourism Development Project funded by the World Bank, Khajani Welfare Society implemented a comprehensive artisan development program focusing on design intervention, quality control, and direct market linkages.
              </p>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="flex flex-col justify-center">
              <div className="bg-card p-10 shadow-xl border border-border relative overflow-hidden">
                <span className="absolute -right-4 -bottom-8 text-[12rem] font-display font-bold text-muted/30 pointer-events-none select-none">125</span>
                <div className="relative z-10">
                  <span className="block text-6xl font-display font-bold text-accent mb-2">125</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-primary border-b border-border pb-4 mb-6 block">Artisans Integrated</span>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Local women successfully trained, equipped, and connected to structured tourist markets, establishing sustainable livelihood models.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Reveal variant="fade">
        <section className="py-20 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase mb-16">Institutional Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["UPSDM", "MSME", "WORLD BANK", "SIDBI", "NSDC"].map((p) => (
                <div key={p} className="px-6 py-4 border border-border bg-background hover:border-accent hover:shadow-md transition-all duration-300 group">
                  <span className="font-display font-bold text-xl md:text-2xl text-muted-foreground group-hover:text-primary transition-colors">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </Layout>
  );
};

export default CollaborationsPage;
