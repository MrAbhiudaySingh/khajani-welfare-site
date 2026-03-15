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
    image: "/images/projects/brij-hunar-training.jpg",
    link: "/projects/brij-hunar",
  },
  {
    title: "Brij-Surabhi",
    description: "Preserving and promoting the cultural heritage of Brij through traditional arts, music, and craftsmanship programs across villages.",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA",
    link: "/projects/brij-surabhi",
  },
  {
    title: "Khajani Learning Academy",
    description: "Bridging the educational gap for girls from marginalized communities through remedial support, English classes, digital literacy, and life skills.",
    category: "Education",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgR5w_iKPIelWfMDvW0MsEgR_gkp08BPk8ss1w1x-VMxt31qraSf_TEw_M1bcYjiOWgjaoPlZqHUEJ4l9aCcEVEuomv_rEwBK5K6XNyrltSCxFEDlupuPGlSmfgo_do4XVc8hLcLYBPp9Ykoc6BOx2R7DbnQvP1ozz3zQ8rYohkpm6hG8EhCYy1hLYUEdhwxPo18D-CquC1DKFQUwZrdkBL7kUYXFAWbtrTkXKbYpNAU08Wrb15vspTC6giyPhtsD3ktpNmupQxJc",
    link: "/projects/kla",
  },
  {
    title: "Digi-Shala",
    description: "Bridging the digital divide by providing rural women with knowledge and tools to navigate the digital landscape confidently and securely.",
    category: "Education",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OU3pEZP6Et84VvJWBLL5xIn8aBi7_ZL2Lq-wJM8YdXsuXNNtyOv8hMHIc7CIT8ES44rpQV-bgMPrhrHmMZIrqJ_s1yGM0eW_srJtKfygb0CAyE12P7WQuaoIeEBWOijGJWeVhCtk9F-vYC2Nm7lo5wjrSr3CF6BOoKz0H0lXNV2pjnsxnfAMN3Vm8XlIVK5x29QQn2E7IaE9exqhFyuVbhwjkHB2zYGPVEzZ_YJkw8w97-IqPJTS7qQvnjZ2lyg5Kf83-DJ5_x4",
    link: "/projects/digi-shala",
  },
  {
    title: "EDUDAKSH",
    description: "Tailored remedial learning for government school girls aged 10-14, addressing educational disparities through targeted interventions.",
    category: "Education",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgR5w_iKPIelWfMDvW0MsEgR_gkp08BPk8ss1w1x-VMxt31qraSf_TEw_M1bcYjiOWgjaoPlZqHUEJ4l9aCcEVEuomv_rEwBK5K6XNyrltSCxFEDlupuPGlSmfgo_do4XVc8hLcLYBPp9Ykoc6BOx2R7DbnQvP1ozz3zQ8rYohkpm6hG8EhCYy1hLYUEdhwxPo18D-CquC1DKFQUwZrdkBL7kUYXFAWbtrTkXKbYpNAU08Wrb15vspTC6giyPhtsD3ktpNmupQxJc",
    link: "/projects/edudaksh",
  },
  {
    title: "Brij-Anshuman",
    description: "Empowering inmates at Mathura Central Jail through intensive skill development in garment construction, tailoring, and traditional crafts.",
    category: "Vocational",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTQzNDGnOvQs3CTSkgcNAyeluwqtQbW9IyWPiwEqZCYcGc_7MybdyfW5kaZfy1NZ8x4z8AbMQPIf7oHWdclr0iC0SVlETUKu42I3Be8kBlf0S5s_oze5sunvpfyfXCtcxFWQL31VsI62XPtO5ZfEa4t6m_EiTsmHQvx6iye7fX0-JpH5ZvqZ_NkMobQiqZwAzgvf41xfldcRtb1j8hnwVpKLIMH7A4PFiIuR2vVQvJTF5dNiftqXTlKt_84Y2pmh2cRP7VeXrF-DU",
    link: "/projects/brij-anshuman",
  },
  {
    title: "Brij-Surabhi Cow Welfare",
    description: "Harmonious blend of animal welfare and rural empowerment, transforming waste into eco-friendly Panchagavya commodities.",
    category: "Environment",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOOJ7EbGJ11KdEFaYYJIu_QvQT5mHWoL0I-3QMSQhaPRk9NtrwEo9p3bL9uKulqiPINPrj0f9WM2HCb96AedEwT0gQvj-8QkN4KJdq6__E96kYsRhocnEgwFThEWrTCYkKWbcPjWjrcmfhOophNQvcf3YDyb0tgQcIm10C3qNtg_DRcQaBtLC6GCozeUIF4xS1ALl12_Xyks15WgV1bQ0eBD6APhOWK5HMYk7yKpPVvRHM9baPeRg97oRqrvmB7GJa_1kmts2CJwo",
    link: "/projects/brij-surabhi-cow-welfare",
  },
  {
    title: "Brij-Surabhi Temple Waste",
    description: "Transforming temple floral offerings into sustainable luxury products like incense, perfumes, and handmade paper.",
    category: "Environment",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXNr6Hnnqm2BbpUiwGQAwr935-T4Oe0PXFN1VALA1jB3X2M3ecdF6I7qAHoBzcXUtfcIz-LjSxYXVNOQpQJIkykWiqMvqYbicumcnxsuXFfoT9zhZmdaO6jDEWY-eUoeX_rmNddyTwPaQuq7Wwj-EZAH-R8jAl190hv8xRM0D6GGzdXX1FOXwDFspD9gOFZcnZV6KMboxoUw-Q4_wbOM5uivNfR4qR2QTmexPUrso3BWwGUMwZRYo6dNH8ZiW3-y0ZoDK_S58bDA",
    link: "/projects/brij-surabhi-temple-waste",
  },
  {
    title: "Brij-Sangini",
    description: "Holistic community health program empowering women through dedicated medical care, health checkup camps, and blood donation drives.",
    category: "Health",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQPS-endf8wqmYGXf4tPUTGDAjluEDQZ4i7ZAH0jsUtCkucXy5VC6_1AFokFEpz1qRKzx_EjXf2Im2L7WtzSpe26x57irJZAGuyKFR7trxgPq3vHzRVuRyRYIdJSrSSY3klkoKYfYks1nsfg_UxcoDEEygKSyHeDGf33Yv32QUj4rnuyakp9p04Gmu1bobhCMRxvtwf5SN42Su-_W11mxrPAr6nSaUD4eI_Y0zqotuhIy6zyNEeFDS89kS0otvS_1XK2T8172Rw8",
    link: "/projects/brij-sangini",
  },
  {
    title: "Brij-Seva",
    description: "Uplifting communities through essential services including Jal Seva, plantation drives, and Daan Utsav giving campaigns.",
    category: "Environment",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKRDk2Ba-LoWtau4Y6ed0WeMm5kNUqnYwYrda7j7xv4zM1F-ZFpCGcpeo4tsDosRHne34Za48-Ub2xUjDCZJSbr-aDskBngBj2hTjxc6AuMtBUYnLYVCLd0B8n9TCFeaDzkOctMpqbjhFFTFsA-tcFEek-ndMS3-Zumgc8A4afgiDQA4TFCksOC55BT44rBfDD8ez4OGFPjEGKHydGE0RN5Y8m9Tg-vV30lUXAg-xh9vmjZYhK8Oxp4mM0MXHkd6pi7DpK-kPXWVw",
    link: "/projects/brij-seva",
  },
  {
    title: "Shakti Ek Adhaar",
    description: "Flagship International Women's Day event honoring feminine strength, resilience, and outstanding societal contributions.",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2tPVkze6FJmnjTzSn8342hvK_Ehfdc6tHF9bcB_aZfoz8fO4eFoNmoZArIbbUi011aEPGnG_itb5sLKFwhysPNodf74HInklGvIUa5knOm374zmqHo7TiTg-6nXgETF2L2XJn9PiM61Y_myqUmLOU2PLQoV_XVVf4QtXvuLAl5KJPn2cG7RtWajP0knACtgmugzfFyYiZJM92uyeLvcQqAdmeUlcra4oGyb6KqMnpH9flbFOLOOvLPr9F7M3rLVbirCeluBdYuMo",
    link: "/projects/shakti-ek-adhaar",
  },
  {
    title: "Radha Krishna Poshak Training",
    description: "Preserving the sacred art of deity garment making through specialized artisan training in partnership with the World Bank aided UP Pro-Poor Tourism project.",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyXzr7tOBdf68nAnwCHcFFGMMFu4cLl3erehmbgH5AsERQI7C07eqD1VeIZq2cXuoAUSw8ob4tBIztMadd1xkVcdu38X7i_zJr-Y1HcSEzTV2qGA-nTHXatgxEie9ojvSex8LFM8uc4Tw3CIAB7EXdg6ryt8zbRU6MkCHFMpOn3dTWTQYH4xxg5MYD9RdnVGLqpYd294k7T3gCLcv3Ab1jyWu2UvVj9kKlMO0eclSmew_ilu0q_RA_kQp8_g_ZxlkiSlOAVjE82dg",
    link: "/projects/radha-krishna-poshak",
  },
  {
    title: "Royal Sanjhi Art Training",
    description: "Reviving the royal heritage of Brij stencil art through specialized MSME training programs in fashion, apparel, and interior design.",
    category: "Culture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7n3EdyUcgRoAnoe_NProYhibM8mwlSBf6rBKdEThGTVmK5PgFzU5ZFCnt7J7ontoELcBNskyiVB1KFJfSUkRLLI5BGw5NOfVst5M1aA2bVUaM5nUXBa57libIw0Z5rKyYEIXdnH1FaoGKbm4CZtXcfqdXKq3x9MioLnztjvSEE8To2zXkvtMCBIsDhiNqqrhW87vAp5-8apU0LeAb0HTVsjwYczjZeUjpSiBwY1owbqXkgsrqQ6il4HRvXbp6fobh9zw9cn5b4Yg",
    link: "/projects/royal-sanjhi",
  },
  {
    title: "SHGs & Brij Surbhi Federation",
    description: "Empowering women through organized Self Help Groups, building sustainable livelihoods across 10 active SHGs with 120 women.",
    category: "Vocational",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_xvQ4xPq8hpCF3v-KuxKMBmmZxS7Iz0eq-oeBCWSYhYc1BcW9vE4wvBk7N36Gt6OKG2F4YHB849pnRy9pkXi0KYrOw377Lmk45EslYdYPYRaPfjBwri7GA3bU6Fkd4YUzgTFrZVxJh_Zr1fQZ9JGIpeLnuZhDb49jAg5aLQiMZX-wKjkBsX4vmcdekikCE0ins3wi3KdaPPmF-GYLSdXKNgJbfB3UN5CXp1hpXr9ciTh2nleIaLv_J7NW_rJrwCBpHRmi4nDNAwQ",
    link: "/projects/shg-federation",
  },
  {
    title: "UPSDM Certified Training",
    description: "Government-backed skill development programs in tailoring and beauty therapy, producing industry-ready professionals.",
    category: "Vocational",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3mVW_d8whlvLoRFww93gL58v7rzAuyndWIu-RiiF3kZtqUGzy1hZrCkMoU8fENm-G2dlPa3IJL2iry5p1o6XJoHzM-0vCM03oZ8Tz0uDp-hNFBPtPq4Ff6fDrra1oKzm4vuHBGqVgx0D_L818v6KWvEmwPfhTt-h9H-xdKrCGCoOo8JKlEm7B8arm7rN9wF4g9TnPF7qGw_yWRy-eA5u4bXISzlRT5mBS9xifovjugkXkqTRajTF6gEWKWH_s498objmUR-FlcV8",
    link: "/projects/upsdm-training",
  },
  {
    title: "Sanitary Napkin Initiative",
    description: "Ensuring dignity in education through sanitary napkin vending machines, health education, and safe disposal across 152 villages.",
    category: "Health",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLszVNC1ME5_uV4vVZ3Jb-7H-6GNx2YimQcXV4n5XR9Ws8HoqXlU86lNiwpEWnFll84x-aBdAP7LygLsx095lxNnrdwiispC0XohyLfc7GOyCD98VvI6O5b6JqTkpqtepS9lnRbvbDah2q7VgTb6KB4BHP-oVetfL1GtZUfLSaTdGgy-tphh-scn28LLRu95LrNnqlGi4wG6Xat5mm9Cu8CB_eTdXDv-Staj_laW9jA6vDcvsX0CijuEXNLG03FkmoRHXlroKW6s",
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
