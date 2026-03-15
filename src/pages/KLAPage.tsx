import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { BookOpen, Globe, Monitor, Brain, Lightbulb, Library, Shield } from "lucide-react";

const KLAPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-60 mix-blend-multiply"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgR5w_iKPIelWfMDvW0MsEgR_gkp08BPk8ss1w1x-VMxt31qraSf_TEw_M1bcYjiOWgjaoPlZqHUEJ4l9aCcEVEuomv_rEwBK5K6XNyrltSCxFEDlupuPGlSmfgo_do4XVc8hLcLYBPp9Ykoc6BOx2R7DbnQvP1ozz3zQ8rYohkpm6hG8EhCYy1hLYUEdhwxPo18D-CquC1DKFQUwZrdkBL7kUYXFAWbtrTkXKbYpNAU08Wrb15vspTC6giyPhtsD3ktpNmupQxJc')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-8 text-center mt-20">
          <Reveal variant="fade-up">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-8">
              Every Girl Deserves<br />
              <span className="text-accent italic font-medium">an Equal Chance</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
              Khajani Learning Academy (KLA) is dedicated to bridging the educational gap for girls from marginalized communities, providing them with the tools and environment they need to succeed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Reveal variant="fade-right" className="md:col-span-5 md:col-start-2 relative">
              <div className="absolute -inset-4 bg-card rounded-lg -z-10 translate-x-4 translate-y-4" />
              <img
                alt="Students in a focused learning environment"
                className="w-full rounded shadow-xl object-cover aspect-[3/4]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCS-iEwlxH1yRpzlOWnmkpYdc-K1W5qDSX0Jo26gSP32fRjc-vfV_hete18E_ZuJfaPnJH0BuKOOyHomVozG0cjlW7zAlFFkARyddFtC6jEkHcuEHokSD4Y7R8B5N-GMZUDE33BL0eDKl-d6CPKqrUdXxyZjyR47KSYtpefbkT8EhfQlHBiPTR3WwLY7FpUzvSucrBV6tfvxWgwQNDUyhKLDyM-ki-H7Krjlb-qE73_AKDf6W6F4m01e7ddfiS82mt7udGnLMThzo"
              />
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <h2 className="text-4xl font-display font-bold text-primary mb-6 leading-tight">
                Empowering Through<br />Targeted Support
              </h2>
              <div className="h-1 w-20 bg-accent mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For many girls in underserved areas, enrolling in school is only the first step. Staying in school and achieving meaningful educational outcomes requires continuous, targeted support that addresses the specific challenges they face.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                KLA was established to provide a safe, nurturing, and academically rigorous after-school environment where girls can receive the remedial help, life skills, and confidence building necessary to thrive.
              </p>
              <div className="flex items-center gap-4 p-6 bg-card rounded-lg border-l-4 border-accent">
                <BookOpen className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="font-display font-bold text-primary text-xl">Our Core Mission</h3>
                  <p className="text-muted-foreground text-sm mt-1">To ensure no girl's potential is lost due to a lack of academic support.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What KLA Offers */}
      <section className="py-24 px-4 sm:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary mb-4">What KLA Offers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">A comprehensive approach to holistic education and personal development.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Remedial Support", desc: "Personalized tutoring in core subjects to help students bridge learning gaps and catch up to their grade levels." },
              { icon: Globe, title: "English Classes", desc: "Dedicated language labs and conversational practice to build fluency and confidence in English communication." },
              { icon: Monitor, title: "Digital Literacy", desc: "Hands-on training in computer basics, internet research, and essential software to prepare for the modern workforce." },
              { icon: Brain, title: "Life Skills", desc: "Workshops focusing on critical thinking, problem-solving, financial literacy, and personal health and hygiene." },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group h-full">
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Callout */}
      <section className="py-20 bg-accent text-accent-foreground text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <Reveal variant="fade-up" className="relative z-10 mx-auto max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 italic tracking-tight drop-shadow-lg">100+</h2>
          <p className="text-2xl md:text-4xl font-medium tracking-wide">schoolgirls actively supported</p>
          <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl mx-auto font-light">Every single day, we provide a safe space for learning, growth, and empowerment.</p>
        </Reveal>
      </section>

      {/* Infrastructure */}
      <section className="py-24 px-4 sm:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fade-right" className="order-2 lg:order-1">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Foundation</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Infrastructure &<br />Environment</h2>
              <div className="space-y-8">
                {[
                  { icon: Lightbulb, title: "Modern Classrooms", desc: "Well-lit, ventilated spaces equipped with smart boards and comfortable seating." },
                  { icon: Library, title: "Resource Library", desc: "A growing collection of books, academic journals, and digital resources." },
                  { icon: Shield, title: "Safe Campus", desc: "Secure premises with dedicated transport options ensuring safety." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary-foreground mb-2">{item.title}</h3>
                      <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img alt="Library resources" className="rounded-lg w-full h-full object-cover translate-y-8 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5tLHyZRX5z71cM0Uxg3Xz-5ZKY7mnbFup3-YbCQSbGXP5kVz-lx_cfljpniTTrP5oSBfdZdOVbmR2oQ2Ku9Oa83d2q7KIXP7ZCGSK2LqxYujJaga2HZGxJRijx4tiqPltW-UhOF6BfhGEnbPi9h9EWHPDB2RkfmCVIUVFk7VZVoXDxrtP02s7lRPkl4wmutm9mSx4TbCBCsFFBmF0P5_JjKEg6Z6CUV1m2deHnIjnG9KL8qDjPqHccibl1QlukdSIEYe-NhJ5Bw" />
              <img alt="Modern classroom setup" className="rounded-lg w-full h-full object-cover -translate-y-8 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2AnTTFfjRsu35Nn6uOgi5dnryTo6BbMunfSXLyvHvZXhlayB6Jks8UVlhGhB21oD3W-Ce3MrzddKom06KuLJEGEOHKuCqJlE-xhvSRKpcMTn0woTWlZhT0A8m-6dzhLmAKZnQlL91GZqnjA_lgY07Z_cJjqJ7u2oN4XphIBvE6Xdd61m445kSZBbgnILu7eI2Jp5eghoOEwgrOFwBXhircOmu06hSF30K8AnincPpmRUReyOVWN4rCXpoTJdPdU46ACzFwMdc5xM" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-card border-t border-border text-center">
        <Reveal variant="fade-up" className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">Support Their Journey</h2>
          <p className="text-xl text-muted-foreground mb-10 font-light">Your contribution directly funds remedial classes, infrastructure, and resources for the girls at KLA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all">
              Make a Donation
            </Link>
            <Link to="/collaborations" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 text-primary font-bold rounded-full uppercase tracking-widest text-sm hover:border-primary/60 transition-all">
              Partner With Us
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default KLAPage;
