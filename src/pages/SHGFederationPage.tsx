import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const shgs = [
  { name: "Nipun", desc: "Focusing on advanced tailoring and precise garment construction techniques." },
  { name: "Saksham", desc: "Specializing in traditional embroidery and localized craft preservation." },
  { name: "Pragati", desc: "Dedicated to bulk uniform manufacturing for local schools and institutions." },
  { name: "Ujjwal", desc: "Producing eco-friendly bags and sustainable packaging materials." },
  { name: "Jagriti", desc: "Expertise in intricate beadwork and artisanal accessory design." },
  { name: "Navya", desc: "Creating contemporary apparel blending modern designs with traditional fabrics." },
  { name: "Srishti", desc: "Focused on upcycling materials and innovative sustainable fashion initiatives." },
  { name: "Kiran", desc: "Managing the production of handcrafted, premium home decor textiles." },
  { name: "Asha", desc: "Providing specialized training and mentoring to new federation members." },
  { name: "Jyoti", desc: "Handling rigorous quality assurance and final finishing of all Federation products." },
];

const SHGFederationPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <img
            alt="Group of women working at sewing machines"
            className="w-full h-full object-cover object-center"
            src="/images/projects/shg-federation.jpg"
          />
        </div>
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <Reveal variant="fade-right">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              SHGs & Federation
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight max-w-4xl">
              Together We Rise
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mt-8">
              Empowering women through skill development, organized community efforts, and sustainable self-reliance in the heart of Brij.
            </p>
          </Reveal>
        </div>
      </section>

      {/* About the Federation */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal variant="fade-right" className="lg:col-span-5">
            <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">The Organization</h2>
            <h3 className="text-primary text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              The Brij Surbhi Federation
            </h3>
            <div className="w-16 h-1 bg-accent mb-8" />
          </Reveal>
          <Reveal variant="fade-left" delay={100} className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-display leading-relaxed text-primary mb-8">
              The Brij Surbhi Federation acts as the central pillar, overseeing the operations, growth, and sustainability of various Self Help Groups (SHGs) across the region.
            </p>
            <p className="text-muted-foreground leading-loose mb-6">
              By fostering collaboration, providing crucial resources, and ensuring rigorous quality control, the Federation enables local women to transform their inherent skills into viable, sustainable livelihoods.
            </p>
            <p className="text-muted-foreground leading-loose">
              The collective strength of the Federation creates a profound ripple effect of economic and social empowerment, elevating entire families and revitalizing the community fabric from the ground up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-accent py-24 px-6 text-center">
        <Reveal variant="fade-up">
          <span className="text-accent-foreground/80 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Impact</span>
          <h2 className="text-accent-foreground text-4xl md:text-6xl font-display font-bold leading-tight max-w-5xl mx-auto">
            120 Women Organized into 10 Active SHGs
          </h2>
        </Reveal>
      </section>

      {/* SHG Grid */}
      <section className="w-full bg-secondary/30 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">The Network</h2>
              <h3 className="text-primary text-4xl md:text-5xl font-display font-bold leading-tight">
                Our Active Groups
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              Ten dedicated Self Help Groups specializing in diverse crafts and manufacturing disciplines.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shgs.map((shg, i) => (
              <Reveal key={shg.name} variant="fade-up" delay={(i % 3) * 100}>
                <div className="bg-card p-10 border border-border group hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-primary text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent block" /> {shg.name}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{shg.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Support Women's Self-Reliance
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Help us expand the Federation and empower more women through skill development and community organization.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default SHGFederationPage;
