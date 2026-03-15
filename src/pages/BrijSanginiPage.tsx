import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Stethoscope, Droplets, ArrowRight } from "lucide-react";

const BrijSanginiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary w-full py-20 px-6 text-primary-foreground">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <Reveal variant="fade-right" className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Project Brij-Sangini</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                Healthier Women,<br />Stronger Communities
              </h1>
              <p className="text-primary-foreground/70 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                Project Brij-Sangini focuses on holistic community health, empowering women through dedicated medical care, education, and support systems.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/donate" className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-base font-bold tracking-wide shadow-md">
                Get Involved
              </Link>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="w-full md:w-1/2">
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center"
              style={{ backgroundImage: "url('/images/projects/brij-sangini-icon.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="w-full bg-accent py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex justify-center items-center text-center">
          <Reveal variant="fade-up">
            <h2 className="text-accent-foreground text-4xl md:text-6xl font-display font-bold tracking-tight leading-tight">
              500+ <span className="font-medium text-3xl md:text-5xl opacity-90 block mt-2 md:inline md:mt-0 md:ml-4">Women Benefitted</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Key Programs */}
      <section className="max-w-[1200px] mx-auto w-full px-6 py-20 flex flex-col gap-12">
        <Reveal variant="fade-up">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-primary text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight">
              Key Program Initiatives
            </h2>
            <p className="text-muted-foreground text-lg font-normal leading-relaxed">
              Delivering essential healthcare services directly to the community through specialized medical interventions.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Stethoscope,
              title: "Health Checkup Camps",
              desc: "Comprehensive medical screenings, specialist consultations, and preventive healthcare guidance tailored specifically for women's unique health needs.",
              tags: ["Screenings", "Consultations", "Pharmacy"],
            },
            {
              icon: Droplets,
              title: "Blood Donation Drives",
              desc: "Organized, safe community blood donation events partnering with premium medical facilities to ensure a steady, reliable supply of safe blood.",
              tags: ["Safe Collection", "Awareness", "Community Driven"],
            },
          ].map((program, i) => (
            <Reveal key={program.title} variant="fade-up" delay={i * 100}>
              <div className="group flex flex-col gap-6 bg-card p-10 shadow-lg border border-border hover:border-accent/50 transition-all duration-300 h-full">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-sm">
                    <program.icon size={32} />
                  </div>
                  <ArrowRight className="text-muted group-hover:text-accent transition-colors" size={24} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-primary text-2xl font-display font-bold leading-tight">{program.title}</h3>
                  <p className="text-muted-foreground text-lg font-normal leading-relaxed">{program.desc}</p>
                </div>
                <div className="mt-auto pt-6 flex gap-3 flex-wrap">
                  {program.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-background border border-border text-primary text-sm font-semibold shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BrijSanginiPage;
