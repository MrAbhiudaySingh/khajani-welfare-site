import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const programs = [
  {
    title: "Fashion & Apparel",
    desc: "Integrate Sanjhi art motifs into contemporary fashion and textiles. Learn the precise application of stencils on various fabrics to create high-end cultural couture.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4PeHsKvu40V3qmbY5jBN9SUrP_IcCCybJIO5qPFgNLEz7uGFMnSEgHQGPUnQHGofhhJlile4QO9-7MX84M-X_NhusbkhrFi_12wFNpJwJgIaZFUpTGeS1wIJZwaweNc3cTBMqp5vDxAq1iADKdSt2DcQg51C3IWRLd9Hk_D_altlL6TTVXyrUGAxBOEIs1IzThvpiZQ1Pd9aMDI_TF-Fs_G9MFdH6GC0vGIhR_jgCrkbUrnN3JWnHe4OY40I3alXmIa6vRg3PHnY",
  },
  {
    title: "Interior Design",
    desc: "Apply stencil art techniques to elevate interior spaces and home decor. Master the scale and application of Brij aesthetics for luxury residential and commercial projects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn3OJhWtxDOyQVXQOtdXg8vQtG0VQoBR-2yO6ZxiAaDl9JJ3hWhJPWVDtKk12fI2PI4Kye7wrbp-QVho8XuAbaXcFqXmfLr4nM0d7-GJOPPWTwXibqYUOOx4Oq70OxFn3c95bHH0hcQk0ag2NlEJv5JNJkbIGtW-cZTPv9dQ0BEsIkXQRSkFK2ctSer86e4etPi3KoLOTK2LiWB35pLLSiM08wU3e8l-kzIkH8tZ0iJMXYsu6Lf6UBJ5N0bpZhBIzbK7UOO9lK_-Q",
  },
];

const RoyalSanjhiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary py-20 px-6 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fade-right" className="flex flex-col gap-6">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                Cultural Heritage Program
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-primary-foreground">
                Reviving a Royal Heritage
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-lg">
                Royal Sanjhi Art Training brings a premium Brij aesthetic, blending cultural luxury
                with modern design methodologies to empower the next generation of artisans.
              </p>
              <div className="pt-6 flex gap-4">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-base font-bold tracking-wide shadow-md"
                >
                  Get Involved
                </Link>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={200}>
              <div
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7n3EdyUcgRoAnoe_NProYhibM8mwlSBf6rBKdEThGTVmK5PgFzU5ZFCnt7J7ontoELcBNskyiVB1KFJfSUkRLLI5BGw5NOfVst5M1aA2bVUaM5nUXBa57libIw0Z5rKyYEIXdnH1FaoGKbm4CZtXcfqdXKq3x9MioLnztjvSEE8To2zXkvtMCBIsDhiNqqrhW87vAp5-8apU0LeAb0HTVsjwYczjZeUjpSiBwY1owbqXkgsrqQ6il4HRvXbp6fobh9zw9cn5b4Yg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-background py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal variant="fade-up" className="mb-16 md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              MSME Partnerships & Training Programs
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We offer specialized courses in Royal Sanjhi Art to empower artisans, integrate
              traditional techniques into modern industries, and preserve this magnificent heritage.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {programs.map((program, i) => (
              <Reveal key={program.title} variant="fade-up" delay={i * 100}>
                <div className="bg-card border border-border p-8 flex flex-col hover:shadow-xl transition-shadow h-full">
                  <div
                    className="w-full aspect-[16/9] bg-cover bg-center mb-8 overflow-hidden"
                    style={{ backgroundImage: `url('${program.image}')` }}
                  />
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">
                    {program.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{program.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-accent py-24 text-center">
        <Reveal variant="fade-up" className="max-w-[1000px] mx-auto px-6">
          <h3 className="text-accent-foreground text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-wider">
            500+ Artisans Trained
          </h3>
          <p className="text-xl md:text-2xl text-accent-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Successfully trained and empowered to preserve the royal legacy of Brij stencil art,
            building a sustainable future for heritage crafts.
          </p>
        </Reveal>
      </section>
    </Layout>
  );
};

export default RoyalSanjhiPage;
