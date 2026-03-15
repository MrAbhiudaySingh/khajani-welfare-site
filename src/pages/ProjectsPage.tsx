import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

const categories = ["All Projects", "Vocational", "Education", "Health", "Environment", "Culture"] as const;

type Category = typeof categories[number];

interface Project {
  title: string;
  description: string;
  category: Category;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project Brij-Hunar",
    description: "Empowering rural women through advanced pottery and rural training, connecting local artisans directly to urban markets to ensure…",
    category: "Vocational",
    image: "/images/projects/brij-hunar-icon.jpg",
    link: "/projects/brij-hunar",
  },
  {
    title: "Brij-Surabhi",
    description: "Preserving and promoting the cultural heritage of Brij through traditional arts, music, and craftsmanship programs across villages.",
    category: "Culture",
    image: "/images/projects/brij-surabhi-cow.jpg",
    link: "/projects/brij-surabhi",
  },
  {
    title: "Khajani Learning Academy",
    description: "Bridging the educational gap for girls from marginalized communities through remedial support, English classes, digital literacy, and life skills.",
    category: "Education",
    image: "/images/projects/kla-students.jpg",
    link: "/projects/kla",
  },
  {
    title: "Digi-Shala",
    description: "Bridging the digital divide by providing rural women with knowledge and tools to navigate the digital landscape confidently and securely.",
    category: "Education",
    image: "/images/projects/digi-shala-icon.jpg",
    link: "/projects/digi-shala",
  },
  {
    title: "EDUDAKSH",
    description: "Tailored remedial learning for government school girls aged 10-14, addressing educational disparities through targeted interventions.",
    category: "Education",
    image: "/images/projects/edudaksh-icon.jpg",
    link: "/projects/edudaksh",
  },
  {
    title: "Brij-Anshuman",
    description: "Empowering inmates at Mathura Central Jail through intensive skill development in garment construction, tailoring, and traditional crafts.",
    category: "Vocational",
    image: "/images/projects/brij-anshuman-icon.jpg",
    link: "/projects/brij-anshuman",
  },
  {
    title: "Brij-Surabhi Cow Welfare",
    description: "Harmonious blend of animal welfare and rural empowerment, transforming waste into eco-friendly Panchagavya commodities.",
    category: "Environment",
    image: "/images/projects/brij-surabhi-cow-craft.jpg",
    link: "/projects/brij-surabhi-cow-welfare",
  },
  {
    title: "Brij-Surabhi Temple Waste",
    description: "Transforming temple floral offerings into sustainable luxury products like incense, perfumes, and handmade paper.",
    category: "Environment",
    image: "/images/projects/brij-surabhi-cow.jpg",
    link: "/projects/brij-surabhi-temple-waste",
  },
  {
    title: "Brij-Sangini",
    description: "Holistic community health program empowering women through dedicated medical care, health checkup camps, and blood donation drives.",
    category: "Health",
    image: "/images/projects/brij-sangini-icon.jpg",
    link: "/projects/brij-sangini",
  },
  {
    title: "Brij-Seva",
    description: "Uplifting communities through essential services including Jal Seva, plantation drives, and Daan Utsav giving campaigns.",
    category: "Environment",
    image: "/images/projects/brij-seva-icon.jpg",
    link: "/projects/brij-seva",
  },
  {
    title: "Shakti Ek Adhaar",
    description: "Flagship International Women's Day event honoring feminine strength, resilience, and outstanding societal contributions.",
    category: "Culture",
    image: "/images/projects/shakti-ek-adhaar-1.jpg",
    link: "/projects/shakti-ek-adhaar",
  },
  {
    title: "Radha Krishna Poshak Training",
    description: "Preserving the sacred art of deity garment making through specialized artisan training in partnership with the World Bank aided UP Pro-Poor Tourism project.",
    category: "Culture",
    image: "/images/projects/poshak-sanjhi.jpg",
    link: "/projects/radha-krishna-poshak",
  },
  {
    title: "Royal Sanjhi Art Training",
    description: "Reviving the royal heritage of Brij stencil art through specialized MSME training programs in fashion, apparel, and interior design.",
    category: "Culture",
    image: "/images/projects/royal-sanjhi-training.jpg",
    link: "/projects/royal-sanjhi",
  },
  {
    title: "SHGs & Brij Surbhi Federation",
    description: "Empowering women through organized Self Help Groups, building sustainable livelihoods across 10 active SHGs with 120 women.",
    category: "Vocational",
    image: "/images/projects/shg-federation.jpg",
    link: "/projects/shg-federation",
  },
  {
    title: "UPSDM Certified Training",
    description: "Government-backed skill development programs in tailoring and beauty therapy, producing industry-ready professionals.",
    category: "Vocational",
    image: "/images/projects/upsdm-sewing.jpg",
    link: "/projects/upsdm-training",
  },
  {
    title: "Sanitary Napkin Initiative",
    description: "Ensuring dignity in education through sanitary napkin vending machines, health education, and safe disposal across 152 villages.",
    category: "Health",
    image: "/images/projects/sanitary-napkin.jpg",
    link: "/projects/sanitary-napkin",
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Projects");

  const filtered = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 text-center">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Our Impact Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-2 leading-tight">
            Core Initiatives <span className="font-serif italic">&</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-accent italic leading-tight mb-6">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Exploring our cornerstone initiatives dedicated to fostering sustainable growth, preserving cultural heritage, and empowering the communities of the Brij region.
          </p>
        </Reveal>
      </section>

      {/* Category Tabs */}
      <Reveal variant="fade-up" delay={100}>
        <section className="bg-background pb-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all border ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent shadow-md"
                    : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Project Grid */}
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <Reveal key={project.title} variant="fade-up" delay={i % 3 * 100}>
                <div className="bg-card border border-border group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {project.link ? (
                      <Link
                        to={project.link}
                        className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all gap-1"
                      >
                        View Project
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-muted-foreground text-xs font-bold uppercase tracking-widest gap-1 cursor-default">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4 leading-tight">
            Want to partner on a<br />
            <span className="text-secondary italic">Specific Initiative?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            We welcome corporate partnerships and individual sponsorships for specific projects. Let's build a tailored impact plan together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collaborations"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full uppercase tracking-widest text-sm shadow-xl transition-all"
            >
              Partner With Us
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-full uppercase tracking-widest text-sm hover:border-primary-foreground/60 transition-all"
            >
              Download Project Brochure
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
