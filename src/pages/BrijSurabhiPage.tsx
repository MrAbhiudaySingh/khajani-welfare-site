import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { TreePine, Users, Flower2, ArrowUpRight, GraduationCap, Wrench } from "lucide-react";

const BrijSurabhiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative pt-32 pb-20 px-4 sm:px-8 overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal variant="fade-right" className="lg:col-span-5 relative z-10 pt-8">
            <div className="inline-block border-b border-secondary pb-1 mb-8">
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-secondary">Special Edition — 2024</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-primary leading-[0.9] mb-8">
              Brij-<br /><span className="italic text-secondary">Surabhi</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-muted-foreground leading-relaxed italic max-w-md border-l-2 border-secondary pl-6 py-2 mb-10">
              "A divine convergence of cow welfare and sustainable waste management. Transforming sacred waste into fragrant blessings."
            </p>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-bold tracking-widest uppercase">
              {["Zero Waste", "Eco-Friendly", "Women Empowerment"].map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span> {tag}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="lg:col-span-7 relative">
            <div className="relative z-10 aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
              <img alt="Brij Surabhi project activities" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-card font-display italic text-lg text-right">Serving the sacred land of Brij.</p>
              </div>
            </div>
            <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          </Reveal>
        </div>
      </header>

      {/* Quote Section */}
      <Reveal variant="fade-up">
        <section className="py-24 px-4 sm:px-8 bg-card relative">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-t-[100px] border border-secondary/30 p-2">
                <img alt="Mrs. Hema Malini" className="w-full h-full object-cover rounded-t-[90px] grayscale contrast-125" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-display font-bold text-xl text-primary">Mrs. Hema Malini</h3>
                <p className="text-xs uppercase tracking-widest text-secondary mt-1">Visionary Mentor</p>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-6xl text-secondary opacity-40 font-display">"</span>
              <p className="text-3xl md:text-4xl font-display leading-tight text-primary mb-8">
                Brij-Surabhi is not just a project; it is an <span className="text-secondary italic">offering to the divine</span>.
              </p>
              <p className="text-muted-foreground font-light">Under the gracious patronage of Mrs. Hema Malini, Member of Parliament (Mathura), we strive to restore the pristine glory of the Brij region by turning waste into wealth.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Cow Dung Products */}
      <section className="py-32 px-4 sm:px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal variant="fade-right" className="lg:col-span-5 order-2 lg:order-1">
              <span className="bg-secondary text-card px-3 py-1 text-[10px] font-bold tracking-widest uppercase inline-block mb-4">Gau-Dhan</span>
              <h2 className="text-5xl font-display font-bold text-primary mb-6">Cow Dung <br />Products</h2>
              <div className="drop-cap text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                Addressing the environmental hazard of stray cattle waste, this division focuses on scientifically processing cow dung into value-added products. By creating <strong className="text-primary font-medium">Gau-Kasht</strong> (Cow Dung Logs), we provide an eco-friendly alternative to wood for cremation and fuel.
              </div>
              <div className="space-y-6 border-t border-border pt-8">
                <div className="flex items-start gap-4">
                  <TreePine className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-display font-bold text-primary">Eco-Friendly Fuel</h4>
                    <p className="text-sm text-muted-foreground">Reduces deforestation and carbon emissions significantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-display font-bold text-primary">Livelihood</h4>
                    <p className="text-sm text-muted-foreground">Generates employment for rural women in production units.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:col-span-7 order-1 lg:order-2 relative group cursor-pointer">
              <div className="overflow-hidden shadow-2xl">
                <img alt="Cow Dung Products" className="w-full aspect-square md:aspect-[16/11] object-cover transition-all duration-700 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOOJ7EbGJ11KdEFaYYJIu_QvQT5mHWoL0I-3QMSQhaPRk9NtrwEo9p3bL9uKulqiPINPrj0f9WM2HCb96AedEwT0gQvj-8QkN4KJdq6__E96kYsRhocnEgwFThEWrTCYkKWbcPjWjrcmfhOophNQvcf3YDyb0tgQcIm10C3qNtg_DRcQaBtLC6GCozeUIF4xS1ALl12_Xyks15WgV1bQ0eBD6APhOWK5HMYk7yKpPVvRHM9baPeRg97oRqrvmB7GJa_1kmts2CJwo" />
              </div>
              <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-8 translate-y-4 translate-x-4 lg:translate-x-8 lg:translate-y-8 z-10 w-64 text-center">
                <span className="block text-xs font-bold tracking-widest uppercase mb-1 opacity-70">Division 01</span>
                <span className="font-display text-2xl italic">Gau-Kasht</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Floral Waste */}
      <section className="py-32 px-4 sm:px-8 bg-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7 relative group">
              <div className="relative z-10 shadow-2xl overflow-hidden">
                <img alt="Temple Flowers Processing" className="w-full aspect-[4/3] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 text-center">
                  <Flower2 className="text-secondary mb-4" size={40} />
                  <h3 className="font-display text-3xl italic">From Waste to Fragrance</h3>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="lg:col-span-5">
              <span className="bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold tracking-widest uppercase inline-block mb-4">Pushp-Seva</span>
              <h2 className="text-5xl font-display font-bold text-primary mb-6">Floral Waste <br />to Fragrance</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">
                Millions of tons of floral waste from temples are dumped into the Yamuna river daily. We collect these sacred offerings and upcycle them into premium organic products.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { num: "01", cat: "Fragrance", title: "Organic Incense", desc: "Charcoal-free sticks hand-rolled by artisans." },
                  { num: "02", cat: "Purity", title: "Essential Oils", desc: "Pure extracts distilled from petals." },
                  { num: "03", cat: "Color", title: "Natural Dyes", desc: "Eco-friendly textile dyes." },
                  { num: "04", cat: "Earth", title: "Vermicompost", desc: "Returning organic matter to soil." },
                ].map((item) => (
                  <div key={item.num}>
                    <span className="block text-xs font-bold tracking-widest text-secondary mb-2 uppercase">{item.num}. {item.cat}</span>
                    <h4 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <Reveal variant="fade-up" className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-16">
            The Future is a <br /><span className="text-secondary italic">Collective Canvas.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/10">
            {[
              { num: "500+", label: "Women Employed" },
              { num: "20T", label: "Floral Waste Recycled" },
              { num: "15k", label: "Trees Saved" },
              { num: "12", label: "Villages Impacted" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-display font-bold text-secondary">{s.num}</span>
                <span className="text-xs tracking-[0.2em] uppercase mt-4 opacity-70">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <Link to="/donate" className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-card hover:text-accent transition-colors duration-300">Get Involved</Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default BrijSurabhiPage;
