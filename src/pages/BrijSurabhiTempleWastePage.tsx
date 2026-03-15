import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const BrijSurabhiTempleWastePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary text-primary-foreground py-24 px-10 relative border-b-[8px] border-accent">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row gap-16 items-center z-10 relative">
          <Reveal variant="fade-right" className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8">
              From Floral Waste to Fragrant Futures
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Transforming temple floral offerings into sustainable luxury products, empowering local communities and preserving the Brij aesthetic.
            </p>
            <div>
              <Link to="/donate" className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors shadow-lg">
                Support This Project
              </Link>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="w-full lg:w-[500px]">
            <div
              className="aspect-[4/3] bg-cover bg-center shadow-2xl border-4 border-primary-foreground/10"
              style={{ backgroundImage: "url('/images/projects/brij-surabhi-flower-recycling.jpg')" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Mentorship */}
      <section className="w-full py-24 px-10 bg-background">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row gap-16 items-center">
          <Reveal variant="fade-right" className="flex-1 order-2 md:order-1">
            <h2 className="text-4xl font-display font-bold text-primary mb-2">Mentorship</h2>
            <h3 className="text-2xl font-bold text-accent mb-8">MP Hema Malini</h3>
            <div className="pl-6 border-l-4 border-accent">
              <p className="text-2xl leading-relaxed text-primary italic font-medium font-display">
                "The Brij-Surabhi initiative is not just about waste management; it's a profound spiritual recycling. By transforming sacred floral offerings into fragrant, sustainable products, we honor the divine while providing tangible livelihoods for our local artisans."
              </p>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="w-full md:w-5/12 order-1 md:order-2">
            <div
              className="aspect-[3/4] bg-cover bg-center shadow-xl border-[16px] border-card rotate-2"
              style={{ backgroundImage: "url('/images/projects/brij-surabhi-flower-recycling.jpg')" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="w-full py-24 px-10 bg-card border-t border-border">
        <div className="max-w-[1200px] w-full mx-auto">
          <Reveal variant="fade-up">
            <div className="flex justify-between items-end mb-12 border-b-2 border-border pb-4">
              <h2 className="text-4xl font-display font-bold text-primary uppercase tracking-tight">Sustainable Products</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "/images/projects/brij-surabhi-diya.jpg", title: "Dhoopbatti", desc: "Artisanal incense cones crafted from recycled temple marigolds and natural resins." },
              { img: "/images/projects/brij-surabhi-idol-painting.jpg", title: "Agarbatti", desc: "Premium hand-rolled incense sticks infused with essential oils from sacred lotus offerings." },
              { img: "/images/projects/brij-surabhi-temple.jpg", title: "Itra", desc: "Traditional, alcohol-free botanical perfumes distilled from specific temple blossoms." },
              { img: "/images/projects/brij-surabhi-flower-recycling.jpg", title: "Handmade Paper", desc: "Textured, eco-friendly stationery incorporating pressed petals and organic fibers." },
            ].map((product, i) => (
              <Reveal key={product.title} variant="fade-up" delay={i * 100}>
                <div className="bg-background overflow-hidden shadow-lg p-6 flex flex-col text-center border border-border hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className="w-full aspect-square bg-cover bg-center mb-6 border border-border" style={{ backgroundImage: `url('${product.img}')` }} />
                  <h4 className="text-2xl font-display font-bold text-primary mb-3 uppercase tracking-wide">{product.title}</h4>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">{product.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-accent text-accent-foreground py-24 px-10 border-t-[8px] border-primary">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row items-center gap-16 justify-between">
          <Reveal variant="fade-right" className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl font-display font-bold mb-6 uppercase tracking-tight">The Impact</h2>
            <p className="text-xl text-accent-foreground/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8">
              Your support helps divert thousands of tons of floral waste from rivers while empowering rural women artisans in the Brij region.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link to="/donate" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Donate Now
              </Link>
              <Link to="/collaborations" className="inline-flex items-center justify-center bg-transparent border-2 border-accent-foreground text-accent-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent-foreground hover:text-accent transition-colors">
                Partner With Us
              </Link>
            </div>
          </Reveal>
          <Reveal variant="fade-left" delay={150} className="flex-1 grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:text-left w-full">
            {[
              { num: "50+", label: "Tons Recycled" },
              { num: "200+", label: "Women Employed" },
              { num: "10+", label: "Temples Engaged" },
              { num: "100%", label: "Eco-Friendly" },
            ].map((s) => (
              <div key={s.label} className="border-l-4 border-primary pl-6">
                <div className="text-6xl font-display font-bold mb-2 text-primary">{s.num}</div>
                <div className="text-sm font-bold text-accent-foreground uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default BrijSurabhiTempleWastePage;
