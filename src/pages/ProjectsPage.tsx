import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  Scissors, GraduationCap, Heart, TreePine, Users, Calendar, Rocket,
  ShoppingBag, ArrowRight, Droplets, Stethoscope, Leaf, Flower2, HandHeart,
  BookOpen, Sparkles, Award, Building2
} from "lucide-react";

/* ── Impact Stat Card ── */
const ImpactStat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-accent/10 border border-accent/20 rounded-lg">
    <span className="text-2xl md:text-3xl font-display font-bold text-accent">{value}</span>
    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{label}</span>
  </div>
);

/* ── Program Card ── */
const ProgramCard = ({
  icon: Icon, title, description, tags, link, impacts,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  impacts?: { value: string; label: string }[];
}) => (
  <div className="group flex flex-col gap-5 bg-card p-8 shadow-lg border border-border hover:border-accent/50 transition-all duration-300 h-full">
    <div className="flex items-center justify-between">
      <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-md">
        <Icon size={28} />
      </div>
      {link && <ArrowRight className="text-muted-foreground group-hover:text-accent transition-colors" size={20} />}
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-display font-bold text-primary leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
    {impacts && impacts.length > 0 && (
      <div className="grid grid-cols-2 gap-2 mt-1">
        {impacts.map((imp) => (
          <ImpactStat key={imp.label} value={imp.value} label={imp.label} />
        ))}
      </div>
    )}
    {tags && tags.length > 0 && (
      <div className="mt-auto pt-4 flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 bg-background border border-border text-primary text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div>
    )}
    {link && (
      <Link
        to={link}
        className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1 mt-auto"
      >
        Learn More <ArrowRight size={14} />
      </Link>
    )}
  </div>
);

/* ── Section Header ── */
const SectionHeader = ({
  label, title, description, icon: Icon,
}: {
  label: string;
  title: string;
  description?: string;
  icon: React.ElementType;
}) => (
  <Reveal variant="fade-up" className="flex flex-col gap-4 max-w-3xl mb-10">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center rounded-md">
        <Icon size={20} />
      </div>
      <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight tracking-tight">{title}</h2>
    {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
  </Reveal>
);

const ProjectsPage = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="bg-background pt-20 pb-16 text-center">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Since 2007 • Transforming Lives
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-2 leading-tight">
            Our Programs <span className="font-serif italic">&</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-accent italic leading-tight mb-6">
            Initiatives
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Khajani Welfare Society has been working since 2007 to empower women and communities in the Braj region through skill development, education, health, cultural preservation, and community service.
          </p>
        </Reveal>
      </section>

      {/* ── 1. Women Skill Training & Livelihood ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Scissors}
          label="Core Programs"
          title="Women Skill Training & Livelihood Programs"
          description="Empowering girls and women from marginalized communities through vocational skill training and livelihood opportunities — enabling employment, entrepreneurship, and financial independence."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal variant="fade-up">
            <ProgramCard
              icon={Scissors}
              title="Brij-Hunar"
              description="Vocational skill training program focused on employable skills and self-employment opportunities for women. Courses include Assistant Beauty Therapist and Self Employed Tailor."
              link="/projects/brij-hunar"
              tags={["Beauty Therapist", "Tailoring", "UPSDM", "MSME"]}
              impacts={[
                { value: "400+", label: "Trained Annually" },
                { value: "20,000+", label: "Since 2007" },
              ]}
            />
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <ProgramCard
              icon={Sparkles}
              title="Brij-Nipun"
              description="Short-term skill and activity-based training camps designed to build awareness, practical exposure, and confidence among women."
              tags={["Skill Camps", "Awareness", "Confidence Building"]}
              impacts={[
                { value: "750+", label: "Women Annually" },
              ]}
            />
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <ProgramCard
              icon={Building2}
              title="Brij-Anshuman"
              description="Vocational skill training programs conducted for women inmates of Mathura Jail, supporting rehabilitation and livelihood opportunities after release."
              link="/projects/brij-anshuman"
              tags={["Jail Inmates", "Rehabilitation", "Vocational"]}
              impacts={[
                { value: "Regular", label: "Training Batches" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ── 2. Education & Youth Development ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={GraduationCap}
            label="Education"
            title="Education & Youth Development"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Reveal variant="fade-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/images/projects/kla-students.jpg"
                  alt="Khajani Learning Academy students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">Learn Today, Lead Tomorrow</span>
                  <h3 className="text-primary-foreground text-2xl font-display font-bold mt-1">Khajani Learning Academy</h3>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={100}>
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Khajani Learning Academy provides academic support and holistic development opportunities for girls from marginalized communities studying in <strong className="text-primary">Classes 6 to 10</strong>.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Mathematics", "Science", "Social Science", "English"].map((s) => (
                    <div key={s} className="flex items-center gap-2 bg-background border border-border px-4 py-3 rounded-md">
                      <BookOpen size={16} className="text-accent" />
                      <span className="text-sm font-semibold text-primary">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Personality Development", "Exposure Trips", "Cultural Activities"].map((a) => (
                    <span key={a} className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">{a}</span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <ImpactStat value="100+" label="Girls Supported" />
                  <ImpactStat value="120" label="Target 2026-27" />
                </div>
                <Link
                  to="/projects/kla"
                  className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Community Health ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Heart}
          label="Community Health"
          title="Community Health & Social Awareness"
          description="Brij-Sangini — a community initiative focusing on women's health awareness and hygiene education."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Stethoscope,
              title: "Women Health Check-up Camps",
              desc: "Comprehensive medical screenings, specialist consultations, and preventive healthcare guidance tailored for women's health needs.",
            },
            {
              icon: Droplets,
              title: "Menstrual Hygiene Awareness",
              desc: "Education sessions on menstrual hygiene, distribution of sanitary products, and awareness campaigns across 152 villages.",
            },
            {
              icon: Heart,
              title: "Blood Donation Camps",
              desc: "Organized blood donation events partnering with district hospitals and medical partners to ensure reliable blood supply.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} variant="fade-up" delay={i * 100}>
              <div className="flex flex-col gap-4 bg-card p-8 border border-border hover:border-accent/50 transition-all h-full shadow-lg">
                <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-md">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-display font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade-up" delay={300}>
          <div className="mt-6 text-center">
            <Link
              to="/projects/brij-sangini"
              className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1"
            >
              View Brij-Sangini Details <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── 4. Community Service ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={HandHeart}
            label="Community Service"
            title="Community Service & Braj Welfare"
            description="Brij-Seva — dedicated to supporting communities through seasonal and emergency support programs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: "Jal Seva Campaign", desc: "Running continuously for 5 years — distributing drinking water, sharbat, and buttermilk for travelers during summer." },
              { icon: HandHeart, title: "Daan Utsav", desc: "Blanket and essential distribution during Makar Sankranti, serving the most vulnerable." },
              { icon: Leaf, title: "Plantation Drives", desc: "Environmental conservation through community-led tree planting and green initiatives." },
              { icon: Heart, title: "Relief Support", desc: "COVID relief and disaster/emergency response activities for affected communities." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 80}>
                <div className="flex flex-col gap-3 bg-background p-6 border border-border hover:border-accent/50 transition-all h-full">
                  <item.icon size={24} className="text-accent" />
                  <h3 className="text-base font-display font-bold text-primary">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade-up" delay={350}>
            <div className="mt-6 text-center">
              <Link
                to="/projects/brij-seva"
                className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1"
              >
                View Brij-Seva Details <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Women Entrepreneurship ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={ShoppingBag}
          label="Entrepreneurship"
          title="Women Entrepreneurship Promotion"
          description="Brij-Surabhi — supporting Self Help Group (SHG) women through promotion of Braj art, craft, devotional products, and eco-friendly items."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal variant="fade-up">
            <ProgramCard
              icon={ShoppingBag}
              title="Brij-Surabhi"
              description="Livelihood initiative strengthening local women-led enterprises and preserving traditional Braj craftsmanship. Products include Panchagavya commodities, recycled flower products, incense, and handmade paper."
              link="/projects/brij-surabhi"
              tags={["SHGs", "Braj Art & Craft", "Eco-Friendly Products", "Panchagavya"]}
            />
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <ProgramCard
              icon={Users}
              title="SHGs & Braj Surabhi Federation"
              description="Empowering women through organized Self Help Groups, building sustainable livelihoods and community-driven enterprises across the Braj region."
              link="/projects/shg-federation"
              tags={["10 Active SHGs", "120 Women", "Area Level Federation"]}
            />
          </Reveal>
        </div>
      </section>

      {/* ── 6. Cultural Heritage ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={Flower2}
            label="Cultural Heritage"
            title="Cultural Heritage Preservation"
            description="Preserving and promoting the rich cultural traditions of the Braj region through specialized training and awareness programs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fade-up">
              <ProgramCard
                icon={Flower2}
                title="Sanjhi Art Promotion"
                description="Reviving the royal heritage of Brij stencil art through specialized MSME training programs in fashion, apparel, and interior design applications."
                link="/projects/royal-sanjhi"
                tags={["MSME Training", "Fashion", "Interior Design"]}
              />
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <ProgramCard
                icon={Award}
                title="Mathura Zari Poshak (GI) Promotion"
                description="Preserving the sacred art of deity garment making through specialized artisan training in partnership with the World Bank aided UP Pro-Poor Tourism project."
                link="/projects/radha-krishna-poshak"
                tags={["GI Tagged", "World Bank", "ProPoor Tourism"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. Upcoming Initiative ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Rocket}
          label="Upcoming Initiative"
          title="Brij Women Business Directory"
          description="A digital directory connecting women entrepreneurs across the Braj region — promoting women-owned businesses, connecting artisans with wider markets, and supporting entrepreneurship."
        />
        <Reveal variant="fade-up">
          <div className="bg-accent/5 border-2 border-dashed border-accent/30 rounded-lg p-10 text-center">
            <Rocket size={40} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-primary mb-2">Currently Under Development</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              This initiative is being developed to create a comprehensive directory that will empower women entrepreneurs and artisans in the Braj region.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 8. Annual Event ── */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <Reveal variant="fade-right" className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-accent" />
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Annual Event</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4">
                Shakti Ek Adhaar
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                The Annual Day celebration of Khajani Welfare Society, where women from different fields are recognized for their contributions to society. The event honors women leaders, educators, entrepreneurs, and social contributors who inspire change and strengthen communities.
              </p>
              <Link
                to="/projects/shakti-ek-adhaar"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
              >
                Learn More
              </Link>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/projects/shakti-ek-adhaar-1.jpg"
                  alt="Shakti Ek Adhaar annual event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-background py-24 text-center">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Want to partner on a<br />
            <span className="text-accent italic">Specific Initiative?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            We welcome corporate partnerships and individual sponsorships for specific projects. Let's build a tailored impact plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collaborations"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
            >
              Partner With Us
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-primary font-bold rounded-full uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all"
            >
              Donate Now
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
