import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Award, Check } from "lucide-react";

const programs = [
  {
    tag: "Tailoring Program",
    hours: "300 Hours",
    title: "Self Employed Tailor",
    desc: "A comprehensive curriculum focusing on garment construction, pattern making, and entrepreneurial skills essential for setting up an independent tailoring business.",
    skills: ["Advanced Stitching Techniques", "Business Management & Marketing", "Quality Control Standards"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNx0f7uRXSBOJ3hL2BkftdKogG77U7nhVi6t3zkvxsWGhYmLsN-cu75-GJ-WX7kWcuYgzEMrHYM5A6Og8q6b0hBLRs1JYjDRnSRiZyOpt69IjNAIbwmOC9bypJLEgtQ6I8BAl8c7o1MonLhUIuPvOmlTLY3RTaqdVLZjbxgcpoUSFHh_ML4PpmTvHPphYGENSD_NzXHG18mwwvD-h56ddm8VpFdS5tBD7dB3oLkjsqNaNXlRUrWj97w0jKoYfwPew6Dtd2k2xG9M8",
  },
  {
    tag: "Wellness Program",
    hours: "250 Hours",
    title: "Assistant Beauty Therapist",
    desc: "Expert training covering skincare, makeup artistry, and salon management, preparing candidates for professional roles in the growing wellness industry.",
    skills: ["Skincare Fundamentals", "Professional Makeup Application", "Client Consultation Ethics"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq2Fw0hs4QdzWZ6yLBXdrMOp-ncef6v_Vd6PBDywJn_hWZRwOgYJbW8VSYe5Y9rCL_XJCKolMxeeQca7ZxXbpjJ48fRpSV0JxUoMHFd9sr7eE08CNAhkt-dh8Pk7oq6WLEJCDPvdtUgVRY6XDq5SS9EIiKraMuzBzoT2A06L5P-_b5gMBxnBD1Gwp_U3jUcctMwKzAG-FI69uFDUF3PBVWcRyhuRXnzfYCuh0E-ARQ1Jm8ddqKFswtZ2MrBOIO468iG1V0ujC9oxw",
  },
];

const UPSDMTrainingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 z-10 mix-blend-multiply" />
          <img
            alt="A modern training classroom with students"
            className="w-full h-full object-cover object-center opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3mVW_d8whlvLoRFww93gL58v7rzAuyndWIu-RiiF3kZtqUGzy1hZrCkMoU8fENm-G2dlPa3IJL2iry5p1o6XJoHzM-0vCM03oZ8Tz0uDp-hNFBPtPq4Ff6fDrra1oKzm4vuHBGqVgx0D_L818v6KWvEmwPfhTt-h9H-xdKrCGCoOo8JKlEm7B8arm7rN9wF4g9TnPF7qGw_yWRy-eA5u4bXISzlRT5mBS9xifovjugkXkqTRajTF6gEWKWH_s498objmUR-FlcV8"
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-8 text-center py-20">
          <Reveal variant="fade-up">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              UPSDM Certified Training
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Government-Backed Skills for Real Employment
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Empowering communities through rigorous UPSDM certified training programs designed for immediate industry readiness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Award Bar */}
      <section className="w-full bg-accent py-12 px-6">
        <Reveal variant="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <Award className="text-accent-foreground shrink-0" size={48} />
            <div>
              <h2 className="text-accent-foreground text-2xl md:text-3xl font-display font-bold mb-2">
                Best UPSDM Skill Training Provider Award — 2025
              </h2>
              <p className="text-accent-foreground/80 text-sm md:text-base max-w-2xl leading-relaxed">
                Recognized for outstanding contribution to skill development and employment generation under the Uttar Pradesh Skill Development Mission.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <Reveal variant="fade-right" className="md:w-5/12 md:sticky md:top-32">
              <h2 className="text-primary text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Bridging the Gap Between Talent and Opportunity
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our partnership with the Uttar Pradesh Skill Development Mission (UPSDM) focuses on delivering high-quality, practical training in high-demand sectors.
              </p>
              <div className="w-16 h-1 bg-accent" />
            </Reveal>
            <div className="md:w-7/12 flex flex-col gap-10">
              {programs.map((program, i) => (
                <Reveal key={program.title} variant="fade-up" delay={i * 150}>
                  <article className="bg-card p-8 border border-border group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold tracking-widest uppercase text-accent">{program.tag}</span>
                      <span className="text-xs font-mono bg-background px-3 py-1 border border-border">{program.hours}</span>
                    </div>
                    <div className="aspect-[16/9] mb-8 overflow-hidden">
                      <img
                        alt={program.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        src={program.image}
                      />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary mb-4">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{program.desc}</p>
                    <ul className="flex flex-col gap-3">
                      {program.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-3">
                          <Check className="text-accent mt-0.5 shrink-0" size={18} />
                          <span className="text-primary text-sm font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPSDMTrainingPage;
