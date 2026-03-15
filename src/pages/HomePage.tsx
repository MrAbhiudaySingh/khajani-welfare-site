import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PlayCircle, Users, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <Reveal variant="fade-left" className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6 border border-accent/20">
                Est. 2007 • Empowering Lives
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight font-display font-bold text-primary mb-6 leading-[1.1]">
                Empowering<br />
                <span className="relative inline-block text-primary">
                  Women,
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/60 -z-10"></span>
                </span>
                <span className="block text-primary">Building Futures</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-accent pl-6 italic">
                "Khajani Welfare Society is dedicated to transforming lives through skill development, cultural preservation, and inclusive education across the Braj region."
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/donate"
                  className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-accent-foreground bg-accent hover:bg-accent/90 shadow-xl transition-all hover:scale-105"
                >
                  Start a Change
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-center px-8 py-4 border-2 border-border text-base font-bold rounded-full text-primary hover:border-accent hover:text-accent bg-card transition-all group"
                >
                  <PlayCircle className="mr-2 group-hover:text-accent transition-colors" size={20} /> Our Story
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
              <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="relative w-full max-w-lg aspect-square">
                <div className="hero-mask w-full h-full shadow-2xl relative z-10 bg-card">
                  <img
                    alt="Women working on pottery"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    src="/images/projects/brij-hunar-training.jpg"
                  />
                </div>
                <div className="absolute bottom-8 -left-4 lg:-left-12 bg-card p-6 rounded-2xl shadow-xl border border-border z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-primary/5 p-3 rounded-full">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-primary leading-none">20,000+</h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">Women Impacted</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Reveal variant="fade">
        <section className="py-12 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Trusted Partners & Supporters</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 hover:opacity-100 transition duration-500">
              {["UPSDM", "MSME", "SIDBI", "NSDC"].map((name) => (
                <span key={name} className="font-display font-bold text-2xl md:text-3xl text-primary tracking-wide">{name}</span>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Impact Stats */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent rounded-full opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 text-secondary border border-primary-foreground/20">
                Real-Time Impact 2024
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-secondary mb-4">
                50,000<span className="text-primary-foreground font-light">+</span>
              </h2>
              <p className="text-2xl text-primary-foreground/70 font-light max-w-xl mx-auto">
                Families impacted across the Brij Region through our integrated welfare programs.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "152+", label: "Villages Served" },
              { num: "8K+", label: "Lives Touched Yearly" },
              { num: "20K+", label: "Women Empowered" },
              { num: "12+", label: "Years of Legacy" },
            ].map((stat, i) => (
              <Reveal key={stat.label} variant="fade-up" delay={i * 100}>
                <div className="text-center group">
                  <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2 font-display group-hover:text-primary-foreground transition-colors duration-300">{stat.num}</h3>
                  <div className="h-0.5 w-8 bg-primary-foreground/20 mx-auto mb-3"></div>
                  <p className="text-primary-foreground/60 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">Collaborators in Progress</h2>
              <p className="text-4xl md:text-5xl font-display font-bold text-primary italic">The strategic network behind our impact</p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border bg-card shadow-xl">
              {[
                { num: "1", title: "Gov Outreach", desc: "Strategic alignment for health infrastructure and rural medical licensing." },
                { num: "2", title: "Eco-Systems Inc", desc: "Technical partnership for sustainable water filtration across 50 villages." },
                { num: "3", title: "Health Trust", desc: "Direct funding for essential medicine distribution and specialist fees." },
              ].map((item) => (
                <div key={item.num} className="p-10 border-b lg:border-b-0 lg:border-r border-border hover:bg-muted transition duration-300 text-center flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold font-serif mb-6 shadow-lg rounded-sm">{item.num}</div>
                  <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <div className="p-10 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-display italic text-3xl mb-4">Join the Network</h4>
                  <Link to="/collaborations" className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group-hover:text-primary-foreground transition flex items-center justify-center gap-2">
                    Apply for Partnership <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            The Future is a<br />
            <span className="text-secondary italic">Collective Canvas.</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Your support fuels the initiatives that change lives. Be a part of the Khajani legacy today.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full text-accent-foreground bg-accent hover:bg-accent/90 shadow-2xl transition transform hover:-translate-y-1"
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
};

export default HomePage;
