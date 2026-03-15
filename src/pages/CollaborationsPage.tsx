import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Users, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:khajaniwelfaresociety@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Please send the pre-filled email to complete your inquiry." });
  };

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

      {/* Partner Form */}
      <section id="partner-form" className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="fade-right">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Join the Network</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Partner With Khajani Welfare Society
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                We welcome collaborations with institutions, corporates, foundations, and individuals who wish to contribute towards empowering girls and preserving the cultural strength of Brij.
              </p>
              <p className="text-accent font-display italic text-xl">
                Together, we can create meaningful change.
              </p>
            </Reveal>

            <Reveal variant="fade-left" delay={150}>
              <form onSubmit={handleSubmit} className="bg-card text-foreground p-8 md:p-10 shadow-2xl space-y-5">
                <h3 className="text-xl font-bold text-primary mb-2">Send a Partnership Inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Your Name</label>
                    <Input required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Organization</label>
                    <Input placeholder="Your organization" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Email Address</label>
                    <Input required type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Phone Number</label>
                    <Input required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Message</label>
                  <Textarea placeholder="How would you like to collaborate?" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={16} /> Send Inquiry
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CollaborationsPage;
