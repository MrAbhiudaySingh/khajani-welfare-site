import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Handshake, GraduationCap, Users, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const avenues = [
  {
    icon: <Handshake size={28} />,
    title: "CSR Partnerships",
    desc: "Long-term strategic alignment with your corporate social responsibility mandates to ensure scalable impact.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Skill Development",
    desc: "Directly sponsor vocational training centers and curriculum development for underprivileged rural women.",
  },
  {
    icon: <Users size={28} />,
    title: "Employee Engagement",
    desc: "Foster a culture of purpose through volunteer programs, skill-sharing, and immersion workshops for your team.",
  },
];

const CollaborationsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    industry: "",
    contact: "",
    email: "",
    program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Corporate Partnership Inquiry from ${formData.company}`);
    const body = encodeURIComponent(
      `Company: ${formData.company}\nIndustry: ${formData.industry}\nContact Person: ${formData.contact}\nEmail: ${formData.email}\nProgram Interest: ${formData.program}`
    );
    window.location.href = `mailto:khajaniwelfaresociety@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Please send the pre-filled email to complete your inquiry." });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent"></div>
          <div
            className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/projects/brij-hunar-training.jpg')" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-left" className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold tracking-widest uppercase mb-6">
              Corporate Social Responsibility
            </span>
            <h1 className="font-display text-5xl lg:text-7xl text-primary-foreground mb-8 leading-[1.1] font-bold">
              Partner for Purpose: Corporate Social{" "}
              <span className="text-accent italic">Responsibility</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 font-light leading-relaxed mb-10">
              Join us in empowering the women of Brij through sustainable, skill-based partnerships that create lasting economic freedom.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#partner-form"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:-translate-y-0.5 transition-transform shadow-lg"
              >
                Partner With Us
              </a>
              <a
                href="/about"
                className="border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-xl font-bold transition-colors"
              >
                View Our Impact
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Case for Partnership */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <Reveal variant="fade-right" className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Artisan women working together on traditional crafts"
                  className="w-full h-[500px] object-cover"
                  src="/images/projects/brij-hunar-beauty.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-primary-foreground font-display text-xl italic">
                    "Empowerment is not just about resources, it's about building ecosystems of dignity."
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-8">The Case for Partnership</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Corporate alignment with Khajani Welfare Society supports UN Sustainable Development Goals and creates measurable ground-level impact. By partnering with us, your organization contributes directly to gender equality, poverty alleviation, and economic empowerment in rural India.
                </p>
                <p>
                  We go beyond transactional philanthropy. Our model focuses on{" "}
                  <strong className="text-primary">vocational excellence</strong> and{" "}
                  <strong className="text-primary">entrepreneurial training</strong>, ensuring that every rupee invested translates into a life transformed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-border">
                <div>
                  <div className="text-4xl font-bold text-accent font-display mb-2">15k+</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Women Empowered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent font-display mb-2">42</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Corporate Partners</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Collaboration Avenues */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">Collaboration Avenues</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strategic pathways for your organization to create meaningful change.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {avenues.map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 150}>
                <div className="group p-10 rounded-2xl border border-border bg-background hover:bg-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-primary group-hover:text-primary-foreground transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section id="partner-form" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-accent/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-up">
            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5">
              {/* Left Panel */}
              <div className="md:col-span-2 bg-accent p-10 md:p-12 text-accent-foreground">
                <h2 className="font-display text-3xl font-bold mb-6">Start a Conversation</h2>
                <p className="opacity-90 leading-relaxed mb-8">
                  Ready to align your brand with purpose? Fill out the form and our partnership team will reach out within 48 hours.
                </p>
                <ul className="space-y-4">
                  {["Detailed Impact Reporting", "Brand Visibility Opportunities", "80G Tax Benefits"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Form */}
              <div className="md:col-span-3 p-10 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Company Name</label>
                      <Input required placeholder="Acme Corp" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Industry</label>
                      <Input placeholder="Tech / Finance / etc." value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Contact Person</label>
                      <Input required placeholder="Jane Doe" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                      <Input required type="email" placeholder="jane@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">How would you like to partner?</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option value="">Select a Program</option>
                      <option value="CSR Direct Funding">CSR Direct Funding</option>
                      <option value="Vocational Sponsorship">Vocational Sponsorship</option>
                      <option value="Employee Volunteering">Employee Volunteering</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-4 font-bold shadow-xl">
                    <Send size={16} /> Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default CollaborationsPage;
