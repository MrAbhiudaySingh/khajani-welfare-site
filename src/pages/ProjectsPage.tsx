import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  GraduationCap, Scissors, Users, Heart, TreePine, Flower2,
  HandHeart, Building2, ShieldAlert, Calendar, ArrowRight,
  BookOpen, Sparkles, Award, Droplets, Leaf, Rocket,
  ShoppingBag, Stethoscope, Umbrella
} from "lucide-react";

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

/* ── Impact Stat ── */
const ImpactStat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-accent/10 border border-accent/20 rounded-lg">
    <span className="text-2xl md:text-3xl font-display font-bold text-accent">{value}</span>
    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{label}</span>
  </div>
);

/* ── Mini Card ── */
const MiniCard = ({
  icon: Icon, title, desc, link,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  link?: string;
}) => {
  const content = (
    <div className="group flex flex-col gap-3 bg-card p-6 border border-border hover:border-accent/50 transition-all h-full shadow-sm">
      <div className="flex items-center justify-between">
        <Icon size={24} className="text-accent" />
        {link && <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />}
      </div>
      <h3 className="text-base font-display font-bold text-primary">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
  if (link) return <Link to={link} className="block h-full">{content}</Link>;
  return content;
};

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

      {/* ── 1. Education ── */}
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
                <img src="/images/projects/kla-students.jpg" alt="Khajani Learning Academy students" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">Learn Today, Lead Tomorrow</span>
                  <h3 className="text-primary-foreground text-2xl font-display font-bold mt-1">Khajani Learning Academy</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">Classes 6–10</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={100}>
              <div className="flex flex-col gap-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Providing academic support and holistic development for girls from marginalized communities — strengthening foundations while building confidence.
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
                <Link to="/projects/kla" className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Skill Development ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Scissors}
          label="Skill Development"
          title="Women Skill Training & Livelihood Programs"
          description="Empowering girls and women from marginalized communities through vocational skill training — enabling employment, entrepreneurship, and financial independence."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal variant="fade-up">
            <MiniCard
              icon={Scissors}
              title="Women Skill Programs"
              desc="Brij-Hunar: Vocational training in Beauty Therapy, Tailoring, and more. Brij-Nipun: Short-term skill camps for awareness and confidence."
              link="/projects/brij-hunar"
            />
          </Reveal>
          <Reveal variant="fade-up" delay={80}>
            <MiniCard
              icon={Award}
              title="UPSDM Training Programs"
              desc="Government-backed certified programs — Self Employed Tailor and Assistant Beauty Therapist courses."
              link="/projects/upsdm-training"
            />
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <MiniCard
              icon={Sparkles}
              title="MSME Skill Programs"
              desc="Specialized skill initiatives in partnership with MSME for art, craft, fashion, and design applications."
            />
          </Reveal>
          <Reveal variant="fade-up" delay={240}>
            <MiniCard
              icon={ShoppingBag}
              title="ProPoor Livelihood Initiatives"
              desc="World Bank aided UP Pro-Poor Tourism livelihood programs for women artisans in the Braj region."
            />
          </Reveal>
        </div>
        <Reveal variant="fade-up" delay={300}>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
            <ImpactStat value="400+" label="Trained Annually" />
            <ImpactStat value="20,000+" label="Since 2007" />
            <ImpactStat value="750+" label="Nipun Camps/Year" />
          </div>
        </Reveal>
      </section>

      {/* ── 3. Women Community Development ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={Users}
            label="Women Community Development"
            title="Women Community Development"
            description="Building sustainable livelihoods and community-driven enterprises through organized women's groups."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal variant="fade-up">
              <MiniCard
                icon={Users}
                title="Self Help Groups (SHGs)"
                desc="10 active SHGs with 120 women — building savings, credit access, and micro-enterprise opportunities."
                link="/projects/shg-federation"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <MiniCard
                icon={ShoppingBag}
                title="Braj Surabhi Area Level Federation"
                desc="Federation of SHGs promoting Braj art, craft, devotional products, and eco-friendly items through women-led enterprises."
                link="/projects/brij-surabhi"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="flex flex-col gap-3 bg-accent/5 border-2 border-dashed border-accent/30 p-6 h-full rounded-sm">
                <div className="flex items-center justify-between">
                  <Rocket size={24} className="text-accent" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded-full">In Progress</span>
                </div>
                <h3 className="text-base font-display font-bold text-primary">Brij Business Women's Directory</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Digital directory connecting women entrepreneurs across Braj — promoting women-owned businesses and artisan markets.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Community Health ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Heart}
          label="Community Health"
          title="Community Health & Social Awareness"
          description="Brij-Sangini — focusing on women's health awareness, hygiene education, and community medical support."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal variant="fade-up">
            <MiniCard
              icon={Stethoscope}
              title="Menstrual Hygiene Initiative"
              desc="Health check-up camps, menstrual hygiene awareness sessions, sanitary product distribution, and vending machines across 152 villages."
              link="/projects/sanitary-napkin"
            />
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <MiniCard
              icon={Droplets}
              title="Blood Donation Camps"
              desc="Organized blood donation events partnering with district hospitals and medical partners to ensure reliable, safe blood supply."
              link="/projects/brij-sangini"
            />
          </Reveal>
        </div>
      </section>

      {/* ── 5. Environment ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={TreePine}
            label="Environment"
            title="Environment & Sustainability"
            description="Eco-friendly initiatives transforming waste into sustainable products and promoting environmental conservation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal variant="fade-up">
              <MiniCard
                icon={Leaf}
                title="Plantation Drives"
                desc="Community-led tree planting and green initiatives for environmental conservation across the Braj region."
                link="/projects/brij-seva"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <MiniCard
                icon={Flower2}
                title="Waste Flower Management"
                desc="Transforming temple floral offerings into sustainable luxury products — incense, perfumes, and handmade paper."
                link="/projects/brij-surabhi-temple-waste"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <MiniCard
                icon={TreePine}
                title="Panchgavya Initiatives"
                desc="Transforming cow waste into eco-friendly Panchagavya commodities — blending animal welfare with rural empowerment."
                link="/projects/brij-surabhi-cow-welfare"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. Cultural Heritage ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Flower2}
          label="Cultural Heritage"
          title="Cultural Heritage Preservation"
          description="Preserving and promoting the rich cultural traditions of the Braj region through specialized training."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal variant="fade-up">
            <MiniCard
              icon={Flower2}
              title="Sanjhi Art Promotion"
              desc="Reviving the royal heritage of Brij stencil art through specialized MSME training in fashion, apparel, and interior design."
              link="/projects/royal-sanjhi"
            />
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <MiniCard
              icon={Award}
              title="Mathura Zari Poshak (GI) Promotion"
              desc="Preserving the sacred art of deity garment making through artisan training — World Bank aided UP Pro-Poor Tourism project."
              link="/projects/radha-krishna-poshak"
            />
          </Reveal>
        </div>
      </section>

      {/* ── 7. Community Service ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={HandHeart}
            label="Community Service"
            title="Community Service & Braj Welfare"
            description="Brij-Seva — dedicated to supporting communities through seasonal and essential services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fade-up">
              <MiniCard
                icon={HandHeart}
                title="Daan Utsav"
                desc="Blanket and essential distribution during Makar Sankranti — serving the most vulnerable communities."
                link="/projects/brij-seva"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <MiniCard
                icon={Droplets}
                title="Jal Seva Campaign"
                desc="Running continuously for 5 years — distributing drinking water, sharbat, and buttermilk for travelers during summer."
                link="/projects/brij-seva"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. Institutional Programs ── */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader
          icon={Building2}
          label="Institutional Programs"
          title="Institutional Programs"
        />
        <Reveal variant="fade-up">
          <MiniCard
            icon={Building2}
            title="Skill Training for Women Inmates – District Jail Mathura"
            desc="Brij-Anshuman: Vocational skill training for women inmates, supporting rehabilitation and livelihood opportunities after release. Regular training batches conducted."
            link="/projects/brij-anshuman"
          />
        </Reveal>
      </section>

      {/* ── 9. Relief Work ── */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeader
            icon={ShieldAlert}
            label="Relief Work"
            title="Relief & Emergency Response"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fade-up">
              <MiniCard
                icon={ShieldAlert}
                title="COVID Relief"
                desc="Emergency relief distribution including food, medical supplies, and essential support during the COVID-19 pandemic."
              />
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <MiniCard
                icon={Heart}
                title="Disaster / Emergency Relief"
                desc="Rapid response activities for flood, fire, and other natural disaster relief — supporting affected families and communities."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 10. Events ── */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-up" className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={20} className="text-accent" />
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground leading-tight">Annual Events & Celebrations</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="fade-up">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl group">
                <img src="/images/projects/shakti-ek-adhaar-1.jpg" alt="Shakti Ek Adhaar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">Annual Day</span>
                  <h3 className="text-primary-foreground text-2xl font-display font-bold mt-1">Shakti Ek Adhaar</h3>
                  <p className="text-primary-foreground/80 text-sm mt-2 leading-relaxed">
                    Annual Day of Khajani Welfare Society — honoring women leaders, educators, entrepreneurs, and social contributors.
                  </p>
                  <Link to="/projects/shakti-ek-adhaar" className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest mt-3 hover:gap-2 transition-all gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl bg-primary-foreground/10 flex flex-col items-center justify-center text-center p-10 border border-primary-foreground/20">
                <Umbrella size={48} className="text-accent mb-4" />
                <span className="text-accent text-xs font-bold tracking-widest uppercase">Community Festival</span>
                <h3 className="text-primary-foreground text-2xl font-display font-bold mt-2">Umbrella Fest</h3>
                <p className="text-primary-foreground/70 text-sm mt-3 leading-relaxed max-w-sm">
                  A vibrant community festival celebrating culture, creativity, and togetherness in the Braj region.
                </p>
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
            We welcome corporate partnerships and individual sponsorships. Let's build a tailored impact plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collaborations" className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all">
              Partner With Us
            </Link>
            <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-primary font-bold rounded-full uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-all">
              Donate Now
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
