import { useState } from "react";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Code, Megaphone, Building2 } from "lucide-react";

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Volunteer (Educational)",
    availableFrom: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbw_YY7ecAhA2tVYmh1xucywWrGdGEdFJqy6_rYtRXQRmMKTYLcg1YN9m8redond8rJR/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Thank you for your application! We will reach out to schedule an orientation.");
      setFormData({ name: "", email: "", interest: "Volunteer (Educational)", availableFrom: "", motivation: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    { icon: GraduationCap, title: "Mentor Girls in Education", desc: "Guide young women through academic challenges and provide life-skills coaching for future success." },
    { icon: Code, title: "Teach Vocational Courses", desc: "Share your expertise in Fashion Design, IT, or Beauty Wellness to create sustainable livelihoods." },
    { icon: Megaphone, title: "Fundraising & Campaigns", desc: "Help us raise awareness and secure resources through strategic digital and physical campaigns." },
    { icon: Building2, title: "Professional Internships", desc: "Formal internship programs for students and professionals to drive social research and NGO management." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <header className="bg-primary text-primary-foreground py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="fade-up">
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-sm mb-6 block">Be the Catalyst</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display">
              Join the Movement: <span className="italic opacity-90">Reforming Brij</span> Through Service
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Your time and skills are the catalysts for change. Documenting a legacy of welfare since 2007.
            </p>
            <div className="mt-12">
              <a href="#apply" className="bg-accent text-accent-foreground px-10 py-4 text-lg font-semibold hover:bg-accent/90 transition-colors inline-block">
                Start Your Journey
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal variant="fade-left" className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8 leading-tight font-display text-primary">A Purpose Beyond the Self</h2>
            <p className="text-lg leading-relaxed text-muted-foreground drop-cap mb-6">
              Khajani Welfare Society has spent nearly two decades bridging the gap between potential and opportunity in the Brij region. Our volunteers are not just helpers; they are architects of a more equitable future. By lending your expertise, you help us scale our impact across 152 villages, ensuring that every woman and girl has the tools to write her own success story.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-accent pl-6 py-2">
              "The heart of a volunteer is not measured by size, but by the depth of the commitment to make a difference."
            </p>
          </Reveal>
          <Reveal variant="fade-right" delay={200} className="order-1 md:order-2 relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-2">
              <img
                alt="Volunteers in action"
                className="w-full h-[500px] object-cover"
                src="/images/projects/shakti-ek-adhaar-3.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
          </Reveal>
        </div>
      </section>

      {/* Avenues of Impact */}
      <section className="bg-card py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 font-display">Avenues of Impact</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="bg-background p-8 border border-border hover:shadow-lg transition-shadow group">
                  <div className="mb-6">
                    <item.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-accent text-accent-foreground py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <Reveal variant="fade-up">
            <p className="text-5xl md:text-6xl font-bold text-secondary font-display">20K+</p>
            <p className="uppercase tracking-widest text-sm font-semibold opacity-90 mt-2">Women Empowered</p>
          </Reveal>
          <Reveal variant="fade-up" delay={100}>
            <p className="text-5xl md:text-6xl font-bold font-display">152+</p>
            <p className="uppercase tracking-widest text-sm font-semibold opacity-90 mt-2">Villages Served</p>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <p className="text-5xl md:text-6xl font-bold text-secondary font-display">12+</p>
            <p className="uppercase tracking-widest text-sm font-semibold opacity-90 mt-2">Years of Legacy</p>
          </Reveal>
        </div>
      </section>




      {/* Application Form */}
      <section className="bg-background py-24 px-6 md:px-12" id="apply">
        <div className="max-w-3xl mx-auto bg-card p-10 md:p-16 shadow-sm border border-border">
          <Reveal variant="fade-up">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-primary">Application for Service</h2>
              <p className="text-muted-foreground">Please provide your details and we'll reach out to schedule an orientation.</p>
            </div>
          </Reveal>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Full Name</label>
                <input
                  className="w-full border-0 border-b-2 border-border bg-background focus:ring-0 focus:border-accent py-3 outline-none text-foreground"
                  placeholder="Enter your name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email Address</label>
                <input
                  className="w-full border-0 border-b-2 border-border bg-background focus:ring-0 focus:border-accent py-3 outline-none text-foreground"
                  placeholder="email@example.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Interest Area</label>
                <select
                  className="w-full border-0 border-b-2 border-border bg-background focus:ring-0 focus:border-accent py-3 outline-none text-foreground"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option>Volunteer (Educational)</option>
                  <option>Volunteer (Vocational)</option>
                  <option>Internship (Project Based)</option>
                  <option>Corporate Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Available From</label>
                <input
                  className="w-full border-0 border-b-2 border-border bg-background focus:ring-0 focus:border-accent py-3 outline-none text-foreground"
                  type="date"
                  value={formData.availableFrom}
                  onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Why do you want to join us?</label>
              <textarea
                className="w-full border-0 border-b-2 border-border bg-background focus:ring-0 focus:border-accent py-3 outline-none text-foreground resize-none"
                placeholder="Tell us about your motivation..."
                rows={4}
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground py-5 text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default VolunteerPage;
