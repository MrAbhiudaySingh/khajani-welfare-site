import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Store, GraduationCap, Trash2 } from "lucide-react";

const pillars = [
  {
    icon: Store,
    title: "Access: 25 Installations",
    desc: "Installed sanitary napkin vending machines in 25 rural schools, ensuring easy and discreet access for students.",
  },
  {
    icon: GraduationCap,
    title: "Education: Health Sessions",
    desc: "Conducted extensive health education sessions to promote hygiene and empower informed choices.",
  },
  {
    icon: Trash2,
    title: "Safety: Proper Disposal",
    desc: "Provided electric napkin destroyers for safe, hygienic, and environmentally friendly disposal.",
  },
];

const SanitaryNapkinPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary relative overflow-hidden py-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/images/projects/sanitary-napkin.jpg")',
          }}
        />
        <div className="relative z-20 max-w-4xl text-center px-6 py-20">
          <Reveal variant="fade-up">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm block mb-6">
              Health & Hygiene Initiative
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
              Dignity in Education, Health in Every School
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
              Empowering young girls with access to basic hygiene and health education through modern sanitary napkin vending machines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-center">
        <Reveal variant="fade-right" className="w-full md:w-1/2">
          <h2 className="text-4xl font-display font-bold text-primary leading-tight mb-6">
            A Comprehensive Approach to Menstrual Health
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our initiative goes beyond just providing sanitary napkins. We've implemented a holistic system that ensures reliable access, provides essential health education to destigmatize menstruation, and includes safe, environmentally friendly disposal methods. By installing these machines in rural schools, we are removing a significant barrier to education for thousands of young girls.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Support This Initiative
          </Link>
        </Reveal>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} variant="fade-left" delay={i * 100}>
              <div className="bg-card p-8 border border-border shadow-sm flex items-start gap-6">
                <pillar.icon className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vending Machine Showcase */}
      <section className="w-full bg-muted py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-4">
              Our Vending Machines in Action
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Automatic sanitary napkin vending machines installed in schools — enabling girls to stay in school with dignity and confidence.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="/images/projects/sanitary-napkin-vending.jpg"
                alt="Automatic Sanitary Napkin Vending Machine installed in schools by Khajani Welfare Society - enabling girls to stay in school"
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-accent py-20 px-6 text-center">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground leading-tight tracking-tight mb-6">
            8,000+ Lives Impacted Annually across 152 Villages
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Your support directly funds new installations and vital education programs, ensuring health and dignity for every student.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-card text-accent font-bold uppercase tracking-widest text-sm hover:bg-card/90 transition-all"
          >
            Support This Initiative
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default SanitaryNapkinPage;
