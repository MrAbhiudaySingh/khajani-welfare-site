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
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA')" }}
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
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqS07CVWLumwcs0u8rxvrtL46bZ2ZxNuJ8ebROutfBOsvR4MNlXrgKH4z00r3KcdibB8iI_i7oTQp_my0txX9RSeQNU5TWtezHirr3ACIc0K4oUfd9EpFnSsBQsxl0ZjPn2_AGLNmWUWLq6cSkRYYXw1Y-Bz267wPQp2MXqPhMSr0fqoH4wJeujjbuqTqVtgPyj9QaAY9kjrEBfbiVNdsZIF82QFmaN34d3oAoW2d5JEUXH3NzQVyI2VTxS5QtrCB0K89AeCBg5Fc')" }}
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
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCufxppwqvNAnj7N4-Lgg14SPuG7B51l-TDvoPAUZzwjkSW9Q7wI7tznKrl7uLGxk2upHwg-2S9uhBVwdPqy7b86lFEpWJRejSG3mKeHkvF3U-jMdogmoRZ2BF47QnGPoR3P7F73FMZS_AKtGwOO48u0ShL7rUQvn2hr8Ftt8GFgtWVmcTfissk09rAvMhgnWKUgjN0hTHI-Tey2xp_VbmOdDAbUoUt8EBUF6KWPKfPXqPG5Wgk6CgnGfAdaW1swPVD8afiyOxLp4Q", title: "Dhoopbatti", desc: "Artisanal incense cones crafted from recycled temple marigolds and natural resins." },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGtcacm6mb7EirVNP2o38SYUKlWrhhHpK8vPwNTNvts9uyymUXpeyNRt-OUDavY-py4syN5cFlKW-gqFrkzCZDzMtIb4_-o0ic5wuvBY4TpnIEg_dILFzDjjII66E4hO1xsxN0WOf6sTy36L8emsWEHY65pUUyRKbgE0DmSH_XhsdEHNaVUz15-YZn5JEt27BfwvvpryTV3kFyI9mRqtlQW6b3y-2HSxzFitNog6u-_3pHEKZaIaxKioWMPHggPrpFrBGvjJIROTI", title: "Agarbatti", desc: "Premium hand-rolled incense sticks infused with essential oils from sacred lotus offerings." },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGfIWgg7vYyuNRl2NzTktaF7ZHi0_-6MvH_jRidQDVqtmdFtbzMiMVsq2G8OzJDEQwjfrdzVjsdAm_PY2AZYh64o3xJnM0ORJ-VyAOgvQWsbxxkGKTRFzF1Hd5q9aIjxPfCoKROGnniARS56V5rGfXEbh-F1tvYukErh4BEuQq0HMDKF4MaZG3Kzl89mXwMYmtjtrfKgSwXjFTovtbjP6gdTSA83x_W9NCmRV816yhCv1EW2yzdWTodIc0k1LcrUiTpDK6TOekBbw", title: "Itra", desc: "Traditional, alcohol-free botanical perfumes distilled from specific temple blossoms." },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGbesye9-Y5Zl6HWUinMOvO6obDNYDD934cG4RUQGFpZyZfdqomsR7bvXKI3PIbCl1JLmMtXRzBZNS2gT4iKHMhITmE5MUhBffpDJprgZ08Fgj97HeCLf450Yy2Oym4JO5HanVqb6-89exBdDdF7Tn6NaroF--z2YTuAgCJ7sORQFq7yeYBpY0loxr1UsMmJ5Vjkyfd0ZZKxwm_2scP05aRS2MRbGzyvPIJjKn6m4wwdCsclCQJ22xoOdSybomi6Y8NPEm41zeV8g", title: "Handmade Paper", desc: "Textured, eco-friendly stationery incorporating pressed petals and organic fibers." },
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
