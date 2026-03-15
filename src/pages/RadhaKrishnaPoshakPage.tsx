import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const skills = [
  {
    title: "Design & Conceptualization",
    desc: "Understanding traditional motifs and translating devotional themes into intricate textile patterns.",
    image: "/images/projects/poshak-sanjhi.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Fabric Preparation",
    desc: "Selecting, treating, and preparing premium silks and cottons suitable for deity adornment.",
    image: "/images/projects/brij-hunar-tailoring.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Precision Cutting",
    desc: "Mastering specific measurements and unique cuts required for authentic Radha Krishna attire.",
    image: "/images/projects/brij-hunar-sewing-hall.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Specialized Sewing",
    desc: "Advanced stitching techniques required to assemble complex, multi-layered garments seamlessly.",
    image: "/images/projects/brij-hunar-class.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Embellishing & Zari Work",
    desc: "The pinnacle of the craft: adding intricate sequins, beadwork, and metallic thread (zari) embroidery to elevate the poshak to divine standards.",
    image: "/images/projects/brij-hunar-beauty.jpg",
    aspect: "aspect-[21/9]",
    wide: true,
  },
];

const RadhaKrishnaPoshakPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="w-full relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/images/projects/poshak-sanjhi.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto py-20 px-6">
          <Reveal variant="fade-up">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
              Cultural Heritage Program
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-none tracking-tight">
              Honoring Tradition,
              <br />
              Enabling Livelihoods
            </h1>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <h2 className="text-primary-foreground/90 text-xl md:text-2xl font-medium leading-relaxed mt-4 italic">
              Radhakrishna Poshak Making Training Program
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="max-w-[1200px] mx-auto w-full px-6 py-20">
        <Reveal variant="fade-up">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="w-16 h-1 bg-accent mb-2" />
            <p className="text-muted-foreground text-sm font-bold tracking-[0.15em] uppercase">
              Partnership Overview
            </p>
            <h2 className="text-primary text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight">
              World Bank Aided UP Pro-Poor Tourism Project
            </h2>
            <p className="text-muted-foreground text-xl font-normal leading-relaxed text-justify">
              This initiative focuses on the intricate art of Radha Krishna Poshak making, providing
              specialized training to local artisans. Through our partnership with the World Bank
              aided UP Pro-Poor Tourism project, we aim to sustain this rich cultural heritage while
              creating viable, long-term livelihood opportunities for the community in the Brij
              region.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Impact Bar */}
      <section className="w-full bg-accent py-12 lg:py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        <Reveal variant="fade-up" className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
          <p className="text-accent-foreground/90 text-lg font-bold tracking-[0.2em] uppercase mb-4">
            Program Impact
          </p>
          <h2 className="text-accent-foreground text-5xl md:text-7xl font-display font-bold leading-none tracking-tight mb-6">
            125 Artisans Trained
          </h2>
          <p className="text-accent-foreground/90 text-xl md:text-2xl font-medium max-w-2xl italic">
            Successfully completed the intensive 30-day training program in traditional poshak
            crafting.
          </p>
        </Reveal>
      </section>

      {/* Skills Grid */}
      <section className="max-w-[1200px] mx-auto w-full px-6 py-20">
        <Reveal variant="fade-up" className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-1 bg-accent mb-6" />
          <h2 className="text-primary text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight uppercase">
            Mastered Craftsmanship Skills
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.title}
              variant="fade-up"
              delay={i * 100}
              className={skill.wide ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className="group flex flex-col bg-card border border-border p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className={`w-full ${skill.aspect} bg-cover bg-center mb-6`}
                  style={{ backgroundImage: `url("${skill.image}")` }}
                />
                <h3 className="text-primary text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{skill.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Support Traditional Artisans
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Help us preserve the sacred art of Poshak making and empower more artisans with sustainable livelihoods.
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

export default RadhaKrishnaPoshakPage;
