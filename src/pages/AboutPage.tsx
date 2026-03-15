import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Handshake, Users, FileCheck, Award, Building2, Briefcase, GraduationCap, BookOpen, Landmark } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative pt-20 pb-24 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal variant="fade-left" className="lg:col-span-7 space-y-8">
              <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase pl-1 border-l-2 border-accent">Special Edition - 2024</span>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-primary leading-[0.9] tracking-tight">
                Rooted in <br /><span className="font-bold italic">Tradition,</span><br />
                Driven by <span className="text-accent">Change.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-xl leading-relaxed mt-8 border-l-4 border-border pl-6">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img alt="Khajani Welfare Society women training" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="/images/about/hero-women-training.jpg" />
                <div className="absolute bottom-0 left-0 bg-card p-4 max-w-[80%] border-t-4 border-accent">
                  <p className="font-display text-primary italic text-lg leading-tight">Since 2006, bridging rural potential and modern opportunity.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal variant="fade-right" className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="font-display text-3xl text-primary font-bold mb-4">The Human Foundation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Our philosophy centers on the belief that geography should not dictate destiny.</p>
              </div>
            </Reveal>
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <Reveal variant="fade-up">
                  <img alt="Empowering women in rural India" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 mb-6" src="/images/about/apparel-beauty-lab.jpg" />
                </Reveal>
                <Reveal variant="fade-up" delay={150} className="flex flex-col justify-center">
                  <p className="text-lg text-foreground leading-relaxed drop-cap font-serif">
                    We envision a society where traditional artisans command global respect, where rural youth lead innovation, and where every woman has the economic independence to shape her own future. Our goal is not just charity, but the construction of self-sustaining ecosystems of growth.
                  </p>
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-display text-2xl text-primary font-bold mb-3">Core Values</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <Handshake className="text-accent mt-1 shrink-0" size={22} />
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Dignity</strong>
                          <span className="text-muted-foreground text-sm">Empowerment is cultivated, not given.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Users className="text-accent mt-1 shrink-0" size={22} />
                        <div>
                          <strong className="block text-primary font-bold font-display text-lg">Heritage</strong>
                          <span className="text-muted-foreground text-sm">Deep respect for the culture of the Brij region.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-display font-medium text-primary mb-6">17 Years of Impact</h2>
              <p className="text-muted-foreground italic font-serif text-xl">"A chronicle of change, a legacy of welfare."</p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block"></div>
            <div className="space-y-24">
              {[
                { year: "2006", title: "The Foundation", desc: "Khajani Welfare Society is registered in Mathura with a focus on basic literacy and hygiene for rural families.", side: "left" },
                { year: "2010", title: "Vocational Expansion", desc: "Launch of the first dedicated Sewing & Tailoring center. 500 women trained in the first year.", side: "right" },
                { year: "2015", title: "UPSDM Partnership", desc: "Became an official training partner for Uttar Pradesh Skill Development Mission, scaling operations to 5 districts.", side: "left" },
                { year: "2023", title: "Global Recognition", desc: "Received ISO 9001:2015 certification and partnered with World Bank initiatives for pro-poor tourism.", side: "right" },
              ].map((item, i) => (
                <Reveal key={item.year} variant={item.side === "left" ? "fade-right" : "fade-left"} delay={i * 100}>
                  <div className="relative flex md:flex-row flex-col items-center justify-between group">
                    {item.side === "left" ? (
                      <>
                        <div className="md:w-[45%] text-right pr-12 md:pr-16">
                          <span className="text-8xl font-display font-bold text-muted/50 absolute -top-10 right-10 -z-10 group-hover:text-muted transition-colors duration-500">{item.year}</span>
                          <h3 className="text-3xl font-display font-bold text-primary mb-2 relative z-10">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed border-r-2 border-accent pr-4 inline-block">{item.desc}</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-card shadow-lg z-10 hidden md:block"></div>
                        <div className="md:w-[45%] pl-12 md:pl-16"></div>
                      </>
                    ) : (
                      <>
                        <div className="md:w-[45%] pr-12 md:pr-16 hidden md:block"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-2 border-primary rounded-full z-10 hidden md:block group-hover:bg-primary transition-colors"></div>
                        <div className="md:w-[45%] pl-12 md:pl-16">
                          <span className="text-8xl font-display font-bold text-muted/50 absolute -top-10 left-10 -z-10 group-hover:text-muted transition-colors duration-500">{item.year}</span>
                          <h3 className="text-3xl font-display font-bold text-primary mb-2 relative z-10">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-accent pl-4 inline-block">{item.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal variant="fade-right" className="lg:col-span-4">
              <h2 className="text-5xl font-display font-medium mb-6">Leadership</h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed font-light mb-8">
                Guided by visionaries with decades of experience in social work, public administration, and education.
              </p>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Mrs. Abha Maheshwari", role: "President", desc: "A lawyer and social reformer with 45 years of experience in empowering women and providing skill training.", img: "/images/about/team-leadership.jpg" },
                  { name: "Mrs. Shipra Rathi", role: "Secretary", desc: "Known as 'Rozgaar Didi', 22+ years of experience in vocational and educational training. Gold medalist in M.A. Sociology.", img: "/images/about/hero-women-training.jpg" },
                  { name: "Dr. Hari Mohan Maheshwari", role: "Chairman, Advisory Board", desc: "Retired Chief Veterinary Officer with 50 years of experience in public service.", img: "/images/about/accomplishments.jpg" },
                ].map((person, i) => (
                  <Reveal key={person.name} variant="fade-up" delay={i * 150}>
                    <div className="text-center group">
                      <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-foreground/10 group-hover:border-accent transition-colors duration-300">
                        <img alt={person.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src={person.img} />
                      </div>
                      <h3 className="text-2xl font-display font-medium text-primary-foreground mb-1">{person.name}</h3>
                      <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-4">{person.role}</p>
                      <p className="text-primary-foreground/50 text-sm leading-relaxed">{person.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8">
              <div>
                <h2 className="text-5xl font-display font-medium text-primary">Presence in Brij</h2>
              </div>
              <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0 italic font-serif">"Serving over 100 villages within a 50km radius."</p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-card shadow-xl">
              <div className="relative h-[600px] w-full bg-muted overflow-hidden">
                <iframe
                  title="Khajani Welfare Society - Mathura HQ"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Khajani+Welfare+Society,+Gali+Sales+Tax,+Dampier+Nagar,+Mathura,+Uttar+Pradesh&zoom=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-12 flex flex-col justify-center bg-card relative">
                <div className="space-y-10">
                  {[
                    { num: "01", name: "Mathura HQ", desc: "Administrative hub & Advanced IT Training Center. The heart of our operations." },
                    { num: "02", name: "Vrindavan Cluster", desc: "Focus on textile, embroidery, and souvenir crafting for the tourism market." },
                    { num: "03", name: "Govardhan Unit", desc: "Agri-based skill development and organic farming workshops." },
                  ].map((loc) => (
                    <div key={loc.num} className="group cursor-pointer">
                      <div className="flex items-center mb-2">
                        <span className="text-accent font-bold text-sm mr-3">{loc.num}.</span>
                        <h3 className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">{loc.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm pl-8 border-l border-border ml-1.5">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Registrations & Certifications */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-display font-medium text-primary mb-6">Registrations &<br />Certifications</h2>
              <p className="text-muted-foreground italic font-serif text-xl">"Transparency and accountability are the pillars of trust."</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: "12AA Registration", desc: "Tax exemption under Section 12AA of the Income Tax Act.", id: "AADTK2215NE2021001" },
              { icon: Award, title: "80G Registration", desc: "Donors eligible for tax benefits under Section 80G.", id: "AADTK2215NF20168" },
              { icon: Building2, title: "NGO DARPAN", desc: "Registered on the NITI Aayog NGO DARPAN portal.", id: "UP/2020/0249575" },
              { icon: Briefcase, title: "CSR Registration", desc: "Eligible for Corporate Social Responsibility funding.", id: "CSR00005014" },
              { icon: GraduationCap, title: "NSDC Impanelment", desc: "National Skill Development Corporation training partner since 15/12/2018.", id: "TP 015247" },
              { icon: BookOpen, title: "Seekho aur Kamao", desc: "Registered under the Ministry of Minority Affairs scheme for skill development." },
              { icon: Landmark, title: "Nai Roshni Scheme", desc: "Registered under the Government welfare scheme for women's leadership development." },
            ].map((cert, i) => (
              <Reveal key={cert.title} variant="fade-up" delay={i * 80}>
                <div className="group border border-border bg-background p-8 hover:border-accent hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted group-hover:bg-accent/10 transition-colors rounded-sm">
                      <cert.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{cert.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{cert.desc}</p>
                  {cert.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ID: </span> 
                      <span className="text-xs font-mono text-primary">{cert.id}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
