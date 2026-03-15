import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CheckCircle, Scissors, Flame, Drama, Wrench } from "lucide-react";

const BrijAnshumanPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative w-full h-[600px] md:h-[700px] bg-center bg-cover bg-no-repeat flex items-end pb-20 px-10 md:px-20"
        style={{ backgroundImage: "linear-gradient(to top, rgba(var(--primary-rgb, 10, 25, 48), 0.95), rgba(var(--primary-rgb, 10, 25, 48), 0.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTQzNDGnOvQs3CTSkgcNAyeluwqtQbW9IyWPiwEqZCYcGc_7MybdyfW5kaZfy1NZ8x4z8AbMQPIf7oHWdclr0iC0SVlETUKu42I3Be8kBlf0S5s_oze5sunvpfyfXCtcxFWQL31VsI62XPtO5ZfEa4t6m_EiTsmHQvx6iye7fX0-JpH5ZvqZ_NkMobQiqZwAzgvf41xfldcRtb1j8hnwVpKLIMH7A4PFiIuR2vVQvJTF5dNiftqXTlKt_84Y2pmh2cRP7VeXrF-DU')" }}
      >
        <Reveal variant="fade-up" className="max-w-4xl relative z-10">
          <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Rebuilding Lives Beyond Bars
          </h1>
        </Reveal>
      </section>

      {/* About */}
      <section className="max-w-[1400px] mx-auto w-full px-10 md:px-20 py-24 flex flex-col md:flex-row gap-16 lg:gap-32">
        <Reveal variant="fade-right" className="md:w-3/5">
          <h2 className="text-4xl font-display font-bold text-primary mb-8">Mathura Jail Program</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Project Brij-Anshuman focuses on empowering inmates through intensive skill development. By providing comprehensive training in garment construction, tailoring, and traditional crafts, the initiative aims to facilitate successful reintegration into society.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The program restores dignity, instills discipline, and equips individuals with sustainable livelihoods upon release, transforming their time served into time invested in their future.
          </p>
        </Reveal>
        <Reveal variant="fade-left" delay={150} className="md:w-2/5 border-l-2 border-accent pl-10 md:pl-16 flex flex-col justify-center">
          <h3 className="text-2xl font-display font-bold text-primary mb-6">Key Objectives</h3>
          <ul className="space-y-6">
            {[
              { title: "Skill Development", desc: "Mastery of vocational trades." },
              { title: "Rehabilitation", desc: "Mental and emotional well-being." },
              { title: "Livelihood Creation", desc: "Ensuring post-release employment." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <CheckCircle className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Courses */}
      <section className="bg-card py-24">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20">
          <Reveal variant="fade-up">
            <div className="mb-16">
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">Curriculum</span>
              <h2 className="text-4xl font-display font-bold text-primary">Vocational Courses Offered</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: "Poshak Making", desc: "Training in traditional poshak crafting, establishing foundational sewing skills and cultural appreciation." },
              { icon: Flame, title: "Candle Crafting", desc: "Decorative and utility candle making skills, providing an alternative creative outlet and income stream." },
              { icon: Drama, title: "Mask Making", desc: "Rapid pivot to production of face masks during the pandemic, contributing vital resources to the community." },
              { icon: Wrench, title: "Advanced Tailoring", desc: "Complex garment making skills, pattern drafting, and finishing techniques for professional-grade output." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="bg-background p-10 border-t-4 border-accent shadow-sm hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-primary mb-6" size={36} />
                  <h3 className="text-xl font-display font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-accent py-32 px-10 text-center">
        <Reveal variant="fade-up">
          <h2 className="text-accent-foreground text-7xl md:text-9xl font-display font-bold tracking-tighter mb-6">600+</h2>
          <p className="text-accent-foreground text-2xl md:text-4xl font-bold tracking-widest uppercase">Inmates Trained</p>
          <p className="text-accent-foreground/80 mt-6 max-w-xl mx-auto text-lg">Providing tangible skills that translate to immediate employment opportunities post-release.</p>
        </Reveal>
      </section>

      {/* Collaboration */}
      <section className="w-full bg-primary py-32 px-10 text-center text-primary-foreground">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Institutional Collaboration</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-primary-foreground/70 text-xl leading-relaxed font-display">
            In strategic partnership with Mathura Central Jail authorities, ensuring a secure, supportive, and highly productive environment for rehabilitation and skill acquisition.
          </p>
        </Reveal>
      </section>
    </Layout>
  );
};

export default BrijAnshumanPage;
