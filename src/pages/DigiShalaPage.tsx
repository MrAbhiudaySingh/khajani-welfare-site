import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Monitor, Globe, Smartphone, ShieldCheck } from "lucide-react";

const DigiShalaPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6Cxja-BNQdg3lmRX51v73GEGH7fP3AyNc_XXZXyj8Xq_HYOFSs-LZp-Pb1zYeb_bLQ_0_gknoep2UcWn27S0OTyabtwQ7agcHChz1dBYqIgs48MJ4BYJEhTi7Sh2DR6YEOQyYHwBHwysXQBSigS5lTtew1OzHGdNjokwHSE_j3wqwfFZ78vqPLDzalGE9IU4K7WCeziNh3BtmJJ4nfllsEvpWIGnBGgvG343GzcHVVA-MkzDsTD2OovBwkiqSB6ETiDcydfETsDs')" }}
      >
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <Reveal variant="fade-up" className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
          <h1 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Bridging the Digital Divide, One Woman at a Time
          </h1>
          <p className="text-primary-foreground/90 text-xl font-medium mt-6 italic font-display">
            Digi-Shala / Digi-Pathshala
          </p>
        </Reveal>
      </section>

      {/* About */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <Reveal variant="fade-right" className="md:col-span-5 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img alt="Women learning digital skills" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_OU3pEZP6Et84VvJWBLL5xIn8aBi7_ZL2Lq-wJM8YdXsuXNNtyOv8hMHIc7CIT8ES44rpQV-bgMPrhrHmMZIrqJ_s1yGM0eW_srJtKfygb0CAyE12P7WQuaoIeEBWOijGJWeVhCtk9F-vYC2Nm7lo5wjrSr3CF6BOoKz0H0lXNV2pjnsxnfAMN3Vm8XlIVK5x29QQn2E7IaE9exqhFyuVbhwjkHB2zYGPVEzZ_YJkw8w97-IqPJTS7qQvnjZ2lyg5Kf83-DJ5_x4" />
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tight mb-6">
              Empowering Through <span className="text-accent">Digital Literacy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In today's interconnected world, digital literacy is not just a skill—it's a fundamental requirement for empowerment. Through Digi-Shala, we provide rural women with the knowledge and tools they need to navigate the digital landscape confidently and securely.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-accent py-20 px-6 text-center">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-accent-foreground text-6xl md:text-8xl font-display font-bold leading-none tracking-tight mb-4 drop-shadow-md">10,000+</h2>
          <p className="text-accent-foreground text-2xl md:text-3xl font-bold uppercase tracking-widest">Women Empowered</p>
          <div className="w-24 h-1 bg-accent-foreground mt-8 opacity-50" />
        </Reveal>
      </section>

      {/* Skills */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <Reveal variant="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold leading-tight uppercase text-primary">Skills Taught</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Monitor, title: "Basic Computer", desc: "Operating system navigation, typing, and essential software basics." },
            { icon: Globe, title: "Internet Navigation", desc: "Safe browsing, using search engines, and accessing online resources." },
            { icon: Smartphone, title: "Digital Payments", desc: "Using UPI, mobile banking apps, and understanding financial security." },
            { icon: ShieldCheck, title: "Cyber Safety", desc: "Protecting personal data, identifying scams, and online privacy fundamentals." },
          ].map((item, i) => (
            <Reveal key={item.title} variant="fade-up" delay={i * 100}>
              <div className="bg-background border border-border p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center h-full">
                <item.icon className="text-accent mb-6" size={36} />
                <h3 className="text-xl font-display font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="w-full bg-primary text-primary-foreground py-20 px-6">
        <Reveal variant="fade-up" className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-accent text-sm font-bold uppercase tracking-widest mb-12">Institutional Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-80">
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold tracking-tight">Balrampur Chini Mills</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold tracking-tight font-display italic">Dainik Jagran</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-bold tracking-tight">@circle</span>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default DigiShalaPage;
