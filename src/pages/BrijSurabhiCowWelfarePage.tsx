import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const BrijSurabhiCowWelfarePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full h-[600px] bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/projects/brij-surabhi-cow-craft.jpg')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start pt-20">
          <Reveal variant="fade-up">
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground font-bold leading-tight max-w-4xl mb-6">
              Turning Compassion<br />Into Livelihood
            </h1>
            <p className="text-xl text-primary-foreground/70 max-w-2xl font-light leading-relaxed mb-10">
              Project Brij-Surabhi Cow Welfare Division represents a harmonious blend of animal welfare and rural empowerment, transforming waste into eco-friendly commodities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-accent-foreground font-bold mb-2">200+ Women Trained</h2>
          <p className="text-accent-foreground/90 text-lg uppercase tracking-wider font-medium">In Panchagavya Product Crafting</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Reveal variant="fade-right" className="lg:col-span-7">
            <h2 className="text-4xl font-display font-bold text-primary mb-8">About The Project</h2>
            <p className="text-2xl font-display text-primary leading-snug mb-8 border-l-4 border-accent pl-6 py-2">
              Empowering local communities while preserving indigenous traditions through the sustainable utilization of Panchagavya resources.
            </p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              The Brij-Surabhi Cow Welfare Division represents a harmonious blend of animal welfare and rural empowerment. By establishing training centers dedicated to Panchagavya products, we have successfully transformed what was once considered waste into valuable, eco-friendly commodities.
            </p>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Our comprehensive training programs equip local artisans, predominantly women from marginalized backgrounds, with the skills needed to craft premium-quality artifacts from cow dung and other natural materials.
            </p>
            <blockquote className="bg-card p-10 border border-border my-12 text-center relative">
              <p className="text-2xl font-display italic text-primary relative z-10">
                "This project doesn't just save cows; it elevates entire communities, proving that ecological mindfulness is economically viable."
              </p>
            </blockquote>
            <h3 className="text-3xl font-display font-bold mt-12 mb-6 text-primary">Training in Panchagavya</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The core of our curriculum focuses on the meticulous preparation and molding of cow dung into durable, aesthetically pleasing forms. Trainees learn natural dyeing techniques, utilizing turmeric, kumkum, and earth pigments.
            </p>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="lg:col-span-5">
            <div className="sticky top-8">
              <h3 className="font-display text-3xl font-bold text-primary mb-8 border-b border-border pb-4">Our Products</h3>
              <div className="flex flex-col gap-8">
                {[
                  { img: "/images/projects/brij-surabhi-diya.jpg", title: "10,000 Diyas", desc: "Handcrafted by local artisans for Diwali celebrations using traditional techniques." },
                  { img: "/images/projects/brij-surabhi-idol-painting.jpg", title: "250 Lakshmi Ganesh Idols", desc: "Eco-friendly festive idols crafted from purified cow dung and natural clay." },
                ].map((product) => (
                  <div key={product.title} className="bg-card border border-border p-6 hover:shadow-xl transition-shadow group">
                    <div className="w-full aspect-video mb-6 overflow-hidden bg-muted">
                      <img alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.img} />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-primary mb-2">{product.title}</h4>
                    <p className="text-muted-foreground mb-4">{product.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default BrijSurabhiCowWelfarePage;
