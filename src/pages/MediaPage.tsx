import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Newspaper, Download, Mail } from "lucide-react";

const newsClippings = [
  { image: "/images/media/news-clipping-1.jpg", source: "A Sipru / Dainik Jagran", desc: "Coverage of Khajani Welfare Society's initiatives for women empowerment and skill training in the Brij region.", date: "July 2021" },
  { image: "/images/media/news-clipping-2.jpg", source: "Amar Ujala / Dainik Jagran", desc: "Feature coverage on EduDaksh program launch and society's impact on rural communities.", date: "2023" },
  { image: "/images/media/news-clipping-3.jpg", source: "Regional Press", desc: "Multi-article compilation covering awards, cultural programs, and community outreach activities.", date: "2022" },
  { image: "/images/media/news-clipping-4.jpg", source: "Live Hindustan / Amar Ujala", desc: "Feature stories on women's skill training programs and Khajani's impact across 18,000+ beneficiaries.", date: "2021-2022" },
  { image: "/images/media/news-clipping-5.jpg", source: "Amar Ujala", desc: "Reporting on KWS programs reaching 800+ women with skill training across 5,000 villages.", date: "2018" },
  { image: "/images/media/news-clipping-6.jpg", source: "Amar Ujala / A Sipru", desc: "Coverage of sanitary napkin vending machine installation serving 2,000+ women and community welfare activities.", date: "2022" },
  { image: "/images/media/news-clipping-7.jpg", source: "A Sipru", desc: "Reporting on Digital literacy programs and EduDaksh remedial education initiative launch.", date: "Dec 2021" },
  { image: "/images/media/news-clipping-8.jpg", source: "A Sipru / Dainik Jagran", desc: "Coverage of Jal Seva camps, skill training programs, and Brij-Anshuman inmate training initiative.", date: "2021-2022" },
  { image: "/images/media/news-clipping-9.jpg", source: "Regional Press", desc: "Multi-article compilation covering society registrations, women's day celebrations, and training milestones.", date: "2021-2023" },
];

const pressReviews = [
  { image: "/images/media/press-review-1.jpg", title: "Dainik Jagran Feature" },
  { image: "/images/media/press-review-2.jpg", title: "Regional Coverage" },
  { image: "/images/media/press-review-3.jpg", title: "Award Ceremony" },
  { image: "/images/media/press-review-4.jpg", title: "Community Impact" },
  { image: "/images/media/press-review-5.jpg", title: "Skill Training" },
  { image: "/images/media/press-review-6.jpg", title: "Women Empowerment" },
];

const MediaPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="bg-card relative overflow-hidden pt-24 pb-16 border-b border-border">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 transform origin-top-right"></div>
        <Reveal variant="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Archive & Coverage</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-tight">
              Beyond the <br /><span className="text-accent italic">Headlines.</span>
            </h1>
            <div className="h-1 w-24 bg-secondary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Documenting our journey of impact through the lens of leading regional and national publications. A chronicle of change since 2007.
            </p>
          </div>
        </Reveal>
      </header>

      {/* News Clippings Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal variant="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-2">In The News</h2>
              <p className="text-muted-foreground italic font-display text-lg">Actual press clippings and newspaper coverage.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-muted-foreground">
              <Newspaper size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">{newsClippings.length} Articles</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsClippings.map((clipping, i) => (
            <Reveal key={i} variant="fade-up" delay={i % 3 * 100}>
              <article className="bg-card rounded-lg shadow-sm hover:shadow-xl border border-border transition-all duration-300 group flex flex-col h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={clipping.image}
                    alt={`News coverage - ${clipping.source}`}
                    className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-sm">{clipping.source}</span>
                    <span className="text-xs text-muted-foreground">{clipping.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{clipping.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Press Reviews Strip */}
        <Reveal variant="fade-up">
          <div className="mt-24 mb-8">
            <h3 className="text-3xl font-display font-bold text-foreground mb-2">Press Reviews & Coverage</h3>
            <p className="text-muted-foreground italic font-display text-lg mb-8">Individual article clippings and reviews from various publications.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {pressReviews.map((review, i) => (
            <Reveal key={i} variant="fade-up" delay={i * 80}>
              <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src={review.image}
                  alt={review.title}
                  className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 text-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{review.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Press Kit CTA */}
        <Reveal variant="scale">
          <div className="mt-32 rounded-3xl overflow-hidden bg-primary relative shadow-2xl">
            <div className="absolute inset-0 bg-primary opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
              <div className="text-left">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">Media Enquiries & Press Kit</h3>
                <p className="text-primary-foreground/60 text-lg mb-10 max-w-lg font-light leading-relaxed">
                  Download our official press kit containing high-resolution logos, leadership bios, and brand guidelines.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a className="bg-secondary text-secondary-foreground hover:bg-card hover:text-primary transition-all px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 shadow-lg" href="#">
                    <Download size={18} />
                    Download Press Kit
                  </a>
                  <a className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3" href="#">
                    <Mail size={18} />
                    Contact PR Team
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="bg-card p-6 rounded-xl shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500 max-w-sm w-full">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-2xl mx-auto mb-4 shadow-md">K</div>
                    <p className="text-primary font-bold text-lg mb-1">Khajani Welfare Society</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">Official Brand Assets 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </Layout>
  );
};

export default MediaPage;
