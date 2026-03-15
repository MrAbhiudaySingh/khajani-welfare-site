import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, GraduationCap, Wrench } from "lucide-react";

const BrijHunarPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fade-right" className="order-2 lg:order-1">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Special Edition — 2024</span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-8 leading-[0.9]">
                Beyond the <br /><span className="text-accent italic">Ordinary Care</span>
              </h1>
              <div className="flex items-start gap-6 mb-10 border-l-2 border-accent pl-6 py-2">
                <p className="text-xl text-muted-foreground italic font-display leading-relaxed">
                  "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement through Project Brij-Hunar."
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-full transition-all shadow-xl text-sm tracking-widest uppercase">
                  Explore Project
                </button>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img alt="Vocational training session" className="w-full h-full object-cover" src="/images/projects/brij-hunar-training.jpg" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground shadow-xl z-10">
                <ArrowUpRight size={36} className="transform rotate-0" />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal variant="fade-right" className="lg:col-span-5">
            <div className="relative">
              <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase absolute -top-3 left-0 z-10">Chapter I: Skills</span>
              <h2 className="text-4xl font-display font-bold text-primary mb-8 mt-4 leading-tight">Craftsmanship as a <br />Human Foundation</h2>
              <div className="aspect-[4/3] bg-muted overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-lg">
                <img alt="Skills training in progress" className="w-full h-full object-cover" src="/images/projects/brij-hunar-class.jpg" />
              </div>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="lg:col-span-7 lg:pl-12 pt-8">
            <p className="drop-cap mb-6 text-lg leading-relaxed font-serif text-muted-foreground">
              In the culturally rich yet economically challenging region of Brij, unemployment among youth has been a persistent hurdle. <strong className="text-primary">Project Brij-Hunar</strong> was conceived to transform this landscape by equipping young individuals with market-relevant skills.
            </p>
            <p className="mb-6 text-lg leading-relaxed font-serif text-muted-foreground">
              From precision machining to hospitality management, our courses are designed in consultation with industry leaders. By focusing on marginalized communities, Brij-Hunar isn't just a training program—it's a social mobility engine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center mb-4 text-accent shadow-sm">
                  <GraduationCap size={22} />
                </div>
                <h4 className="font-display font-bold text-xl text-primary mb-2">NSQF Aligned</h4>
                <p className="text-sm text-muted-foreground">Curriculum compliant with National Skills Qualifications Framework standards.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center mb-4 text-accent shadow-sm">
                  <Wrench size={22} />
                </div>
                <h4 className="font-display font-bold text-xl text-primary mb-2">Industry Labs</h4>
                <p className="text-sm text-muted-foreground">State-of-the-art workshops mimicking real factory environments.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Process</span>
              <h2 className="text-5xl md:text-6xl font-display">How We Empower <br /><span className="italic text-primary-foreground/70">Communities</span></h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Mobilization", desc: "Grassroots connect through 'Kaushal Raths' (Skill Vans) and village camps." },
              { step: 2, title: "Training", desc: "3-6 months of intensive classroom and lab training including IT literacy." },
              { step: 3, title: "Assessment", desc: "Third-party certification by Sector Skill Councils. Mock interviews." },
              { step: 4, title: "Placement", desc: "Job fairs and campus drives. Post-placement tracking for 6 months." },
            ].map((item, i) => (
              <Reveal key={item.step} variant="fade-up" delay={i * 100}>
                <div className="group h-full">
                  <div className="bg-primary-foreground/5 p-8 h-full border border-primary-foreground/10 hover:bg-card hover:text-primary transition-all duration-300 relative">
                    <div className="w-12 h-12 rounded-full bg-card text-primary flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">{item.step}</div>
                    <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/60 group-hover:text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-background">
        <Reveal variant="scale">
          <div className="bg-primary rounded-none shadow-2xl overflow-hidden mb-24 relative">
            <div className="absolute inset-0 bg-accent/10"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10 relative z-10">
              {[
                { num: "3,500+", label: "Youth Trained" },
                { num: "72%", label: "Female Participation" },
                { num: "120+", label: "Employer Partners" },
                { num: "₹15k", label: "Avg. Salary" },
              ].map((s) => (
                <div key={s.label} className="p-10 text-center">
                  <span className="block text-4xl md:text-5xl font-display font-bold text-secondary mb-2">{s.num}</span>
                  <span className="text-xs font-bold tracking-widest text-primary-foreground uppercase opacity-80">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal variant="fade-up">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-5xl font-display font-bold text-primary mb-3">Stories of Change</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { quote: "Before joining the Brij-Hunar project, I had never touched a computer. Today, I work as a Data Entry Operator in a reputed logistics firm.", name: "Amit Kumar", batch: "Batch 2021 • Logistics", img: "/images/projects/brij-hunar-computer-class.jpg" },
            { quote: "My family was hesitant about me working. The counseling team convinced my parents. I learned sewing and tailoring, and now I run my own boutique from home.", name: "Priya Singh", batch: "Batch 2022 • Apparel", img: "/images/projects/brij-hunar-tailoring.jpg" },
          ].map((t, i) => (
            <Reveal key={t.name} variant="fade-up" delay={i * 150}>
              <div className="bg-card p-10 border border-border hover:shadow-xl transition-shadow relative h-full">
                <span className="text-6xl font-serif text-muted/30 absolute top-4 left-4 -z-0">"</span>
                <div className="relative z-10">
                  <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed font-serif">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 grayscale hover:grayscale-0 transition-all rounded-full overflow-hidden">
                      <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-lg font-display">{t.name}</h5>
                      <p className="text-xs text-accent font-bold uppercase tracking-wide">{t.batch}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Training Gallery */}
        <Reveal variant="fade-up" className="mt-24">
          <h2 className="text-4xl font-display font-bold text-primary mb-8 text-center">Training in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/projects/brij-hunar-computer-class.jpg", alt: "Computer training class" },
              { src: "/images/projects/brij-hunar-tailoring.jpg", alt: "Tailoring and fashion training" },
              { src: "/images/projects/brij-hunar-sewing-hall.jpg", alt: "Sewing workshop hall" },
              { src: "/images/projects/brij-hunar-beauty.jpg", alt: "Beauty and cosmetology training" },
              { src: "/images/projects/brij-nipun-workshop.jpg", alt: "Brij Nipun skill workshop" },
              { src: "/images/projects/brij-nipun-classroom.jpg", alt: "Brij Nipun classroom session" },
              { src: "/images/projects/brij-nipun-training.jpg", alt: "Brij Nipun training center" },
              { src: "/images/projects/brij-hunar-class.jpg", alt: "Hands-on class session" },
            ].map((img, i) => (
              <Reveal key={i} variant="fade-up" delay={i * 80}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">The Future is a <br /><span className="text-secondary italic">Collective Canvas</span></h2>
          <p className="text-primary-foreground/70 mb-10 text-lg">Your support fuels the initiatives that change lives.</p>
          <Link to="/donate" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-12 rounded-full uppercase tracking-widest text-sm transition-all shadow-lg">Get Involved</Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default BrijHunarPage;
