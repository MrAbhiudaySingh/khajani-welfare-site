import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Building2, GraduationCap, Users } from "lucide-react";

const pillars = [
  {
    num: "1",
    icon: <Building2 size={28} />,
    title: "Government & Institutional Partnerships",
    desc: "Collaboration with government departments and institutional bodies helps us implement skill development and education initiatives effectively. Through these partnerships, we have conducted vocational training programs and community development initiatives that empower young women and girls.",
  },
  {
    num: "2",
    icon: <GraduationCap size={28} />,
    title: "Educational & Skill Development Partners",
    desc: "Our educational collaborators support learning initiatives such as remedial education, personality development, and vocational training. Together we create opportunities that help girls become confident, capable, and independent.",
  },
  {
    num: "3",
    icon: <Users size={28} />,
    title: "Community & Social Organizations",
    desc: "Local social groups, women's organizations, and community leaders play a vital role in our journey. Their support helps us identify beneficiaries, mobilize communities, and strengthen the impact of our programs across Mathura and surrounding areas.",
  },
];

const CollaborationsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-left" className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Institutional Framework</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary leading-[0.95] mb-8">
              Collaborators in<br /><span className="text-accent">Impact</span>
            </h1>
            <div className="border-l-4 border-accent pl-8 py-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic leading-relaxed">
                The Strategic Network Behind Our Mission
              </p>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-muted opacity-50 -z-10 hidden lg:block"></div>
      </div>

      {/* About Collaborations */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                For more than 17 years, Khajani Welfare Society has worked with institutions, government bodies, community groups, and responsible organizations that believe in empowering girls and strengthening society.
              </p>
              <p>
                These collaborations help us expand our reach, improve program quality, and create sustainable opportunities for girls from marginalized communities in Brij Bhoomi.
              </p>
              <p className="text-primary font-display font-semibold text-xl">
                Together, we are building a future where every girl has access to education, skills, confidence, and dignity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((item, i) => (
              <Reveal key={item.num} variant="fade-up" delay={i * 150}>
                <div className="bg-background p-10 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-serif mb-6 shadow-lg rounded-sm">
                    {item.num}
                  </div>
                  <h3 className="font-display font-bold text-primary text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default CollaborationsPage;
