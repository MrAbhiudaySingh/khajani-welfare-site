import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const CampaignsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-24 overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="fade-left" className="max-w-4xl">
            <span className="block text-accent font-bold tracking-[0.2em] text-xs uppercase mb-6">Social Movements Hub</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.9] mb-8">
              Beyond the <br /><span className="text-accent italic">Ordinary Care</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-l-4 border-accent pl-6 mt-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic max-w-2xl leading-relaxed">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-10 pointer-events-none">
          <span className="text-[400px] font-display font-bold text-primary leading-none -mr-20 -mt-20 block">K</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">
        {/* Chapter I: Shakti Ek Adhaar */}
        <section className="group pt-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <Reveal variant="fade-right" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter I : Empowerment</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Shakti Ek Adhaar:<br />Foundations of Strength
              </h2>
              <p className="drop-cap text-muted-foreground font-serif leading-relaxed text-lg">
                Celebrating the remarkable contributions of women across sectors. 'Shakti Ek Adhaar' is not just a campaign but a movement to honor the strength, resilience, and achievements of women who inspire change and build foundations for a better tomorrow.
              </p>
              <p className="text-base font-sans mt-6 text-muted-foreground">
                We focus on maternal health, child nutrition, and skill development, recognizing that the health of a community is directly proportional to the strength of its smallest units.
              </p>
              {/* <div className="mt-10 pt-8 border-t border-border">
                <a className="group/link inline-flex items-center gap-3 text-primary font-display text-xl italic hover:text-accent transition-colors" href="#">
                  Explore the Narrative
                  <ArrowRight className="transition-transform group-hover/link:translate-x-1 text-accent" size={20} />
                </a>
              </div> */}
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img alt="Shakti Ek Adhaar" className="w-full h-full object-cover transition duration-1000 transform group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="/images/projects/shakti-ek-adhaar.jpg" />
                <div className="absolute bottom-0 left-0 bg-card p-6 max-w-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">Latest Event</span>
                  <span className="font-display text-lg font-bold text-foreground">International Women's Day 2024</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter II: Brij Seva */}
        <section className="group relative">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-start">
            <Reveal variant="fade-left" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter II : Service</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Brij-Seva:<br />Reviving the Landscape
              </h2>
              <div className="bg-primary text-primary-foreground p-8 md:p-10 mb-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
                <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-center opacity-90 relative z-10">
                  "Service to the destitute is service to the divine."
                </p>
                <p className="text-center text-[10px] uppercase tracking-[0.3em] mt-6 text-primary-foreground/50">Khajani Core Values</p>
              </div>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                Dedicated to the welfare of the Braj region, 'Brij-Seva' focuses on holistic community development. From providing healthcare to the underprivileged to maintaining clean public spaces, this initiative is the heartbeat of our on-ground operations.
              </p>
              <div className="mt-8 flex flex-col gap-4 border-l-2 border-accent pl-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border"></span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Healthcare Camps</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border"></span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Food Distribution</span>
                </div>
              </div>
              {/* <div className="mt-10 pt-8">
                <a className="group/link inline-flex items-center gap-3 text-primary font-display text-xl italic hover:text-accent transition-colors" href="#">
                  View Impact Report
                  <ArrowRight className="transition-transform group-hover/link:translate-x-1 text-accent" size={20} />
                </a>
              </div> */}
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-7/12 relative mt-12 lg:mt-0">
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img alt="Brij-Seva" className="w-full h-full object-cover object-center" src="/images/projects/brij-seva-icon.jpg" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter III: Business Directory */}
        <section className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] relative overflow-hidden mt-12">
                  <img alt="Artisan" className="absolute inset-0 w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition duration-500" src="/images/projects/brij-hunar-tailoring.jpg" />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden bg-muted flex items-center justify-center p-8 text-center">
                  <div className="border border-border p-8 h-full w-full flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary mb-2">500+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Businesses Listed</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="lg:col-span-5 lg:pl-12 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Brij Business<br />Women Directory
              </h2>
              <p className="text-muted-foreground text-lg font-serif leading-relaxed mb-8">
                Creating a digital ecosystem for women entrepreneurs in the Brij region. This directory connects local artisans, small business owners, and service providers with a wider market, fostering financial independence.
              </p>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Digital Listing", desc: "A curated database of local talent." },
                  { num: "02", title: "Market Linkage", desc: "Direct access to buyers and fairs." },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted text-accent font-display text-xl italic group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors">{item.num}</div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-sm tracking-wide">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="mt-12">
                <a className="inline-block border border-foreground text-foreground px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" href="#">
                  Access Directory
                </a>
              </div> */}
            </Reveal>
          </div>
        </section>

        {/* Chapter IV: Jal Seva */}
        <section className="group">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24">
            <Reveal variant="fade-left" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter IV : Relief</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Jal Seva Campaign:<br />Quenching Brij Heat
              </h2>
              <p className="drop-cap text-muted-foreground font-serif leading-relaxed text-lg">
                As the summer sun scorches the plains, our Jal Seva initiative stands as an oasis. Running from the auspicious Akshay Tritiya to Nirjala Ekadashi, this campaign ensures no traveler or resident goes thirsty.
              </p>
              <p className="text-base font-sans mt-6 text-muted-foreground">
                We set up water kiosks at strategic pilgrim paths and crowded intersections, providing clean drinking water, buttermilk, and sharbat to thousands daily during the peak summer months.
              </p>
              {/* <div className="mt-10 pt-8 border-t border-border">
                <a className="group/link inline-flex items-center gap-3 text-primary font-display text-xl italic hover:text-accent transition-colors" href="#">
                  View Hydration Points
                  <ArrowRight className="transition-transform group-hover/link:translate-x-1 text-accent" size={20} />
                </a>
              </div> */}
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img alt="Jal Seva Campaign" className="w-full h-full object-cover transition duration-1000 transform group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="/images/projects/brij-seva-jal.jpg" />
                <div className="absolute top-6 right-6 bg-blue-600 text-white p-4 shadow-lg">
                  <span className="block text-center font-display text-2xl font-bold">50+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest">Kiosks Active</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter V: Daan Utsav */}
        <section className="group">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <Reveal variant="fade-right" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter V : Giving</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Daan Utsav:<br />The Festival of Giving
              </h2>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                Marking the harvest festival of Makar Sankranti, Daan Utsav embodies the spirit of selfless contribution. It is a time when the community comes together to ensure warmth and sustenance for the less fortunate.
              </p>
              <ul className="list-none pl-0 mt-6 space-y-4 font-sans text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Distribution of heavy woolens and blankets.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Community feasts serving traditional khichdi.
                </li>
              </ul>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img alt="Daan Utsav - Festival of Giving" className="w-full h-full object-cover sepia-[30%] group-hover:sepia-0 transition duration-700" src="/images/projects/daan-utsav.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 text-white max-w-sm">
                  <p className="font-display italic text-2xl">"Warmth is not just in the clothes we give, but in the hands that give them."</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter VI: Plantation Drive */}
        <section className="group relative">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
            <Reveal variant="fade-left" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter VI : Ecology</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Plantation Drive:<br />Rooting for Green
              </h2>
              <div className="border-l-4 border-green-600 pl-6 py-2 mb-8">
                <p className="font-display text-xl italic text-muted-foreground">
                  Restoring the verdant glory of Braj, one sapling at a time.
                </p>
              </div>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                Twice a year, we mobilize volunteers to plant 51 trees per drive, focusing on native species that support local biodiversity. This initiative is our pledge to future generations for a cleaner, greener environment.
              </p>
              {/* <div className="mt-10">
                <a className="inline-block border-b-2 border-green-600 text-foreground pb-1 text-sm font-bold uppercase tracking-widest hover:text-green-600 transition-colors" href="#">
                  Volunteer for Next Drive
                </a>
              </div> */}
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-7/12 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-tr-[50px]">
                  <img alt="Plantation Drive 1" className="w-full h-full object-cover hover:scale-110 transition duration-700" src="/images/projects/brij-seva-plantation.jpg" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-bl-[50px] mt-12">
                  <img alt="Plantation Drive 2" className="w-full h-full object-cover hover:scale-110 transition duration-700" src="/images/projects/brij-seva-plantation.jpg" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter VII: Raktdan Shivir */}
        <section className="group">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <Reveal variant="fade-right" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-red-100 text-red-800 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter VII : Health</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Raktdan Shivir:<br />Culture of Solidarity
              </h2>
              <p className="drop-cap text-muted-foreground font-serif leading-relaxed text-lg">
                Blood connects us all. Our periodic blood donation camps are a testament to community solidarity, where strangers become lifesavers.
              </p>
              <p className="text-base font-sans mt-6 text-muted-foreground">
                With professional medical partners, we ensure safe and hygienic collection. Each session typically collects 30+ units, directly supporting local blood banks and emergency trauma centers.
              </p>
            </Reveal>
            <Reveal variant="fade-left" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-8 border-card shadow-xl">
                <img alt="Blood Donation Camp at Khajani Welfare Society" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-1000" src="/images/projects/blood-donation-camp.jpg" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black/40">
                  <span className="border border-white text-white px-6 py-2 uppercase tracking-widest text-xs font-bold">Register as Donor</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter VIII: Mask Distribution */}
        <section className="group relative">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24">
            <Reveal variant="fade-left" className="lg:w-5/12 pt-8">
              {/* <span className="inline-block bg-muted text-muted-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Chapter VIII : Crisis</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Mask Distribution:<br />Guardian of Frontlines
              </h2>
              <div className="bg-muted p-8 border-t-4 border-border">
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Impact Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-3xl font-bold text-primary">5L+</span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Masks Distributed</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-primary">500</span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">PPE Kits</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground font-serif leading-relaxed text-lg mt-8">
                When the pandemic struck, Khajani stood firm. Our rapid response team facilitated the distribution of essential protective gear to frontline workers, police personnel, and vulnerable communities, acting as a shield against the crisis.
              </p>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="lg:w-7/12 relative">
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden">
                <img alt="Covid Relief" className="w-full h-full object-cover filter sepia contrast-125 hover:contrast-100 transition duration-700" src="/images/projects/brij-anshuman-icon.jpg" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Chapter IX: Menstrual Hygiene Awareness */}
        <section className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal variant="fade-right" className="lg:col-span-7 relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl">
                <img alt="Menstrual Hygiene Session" className="w-full h-full object-cover hover:scale-105 transition duration-1000" src="/images/projects/sanitary-napkin.jpg" />
                <div className="absolute top-0 left-0 bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest">Education</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full flex items-center justify-center shadow-lg hidden lg:flex z-10">
                <span className="text-center font-display font-bold text-primary leading-tight">Break<br />The<br />Stigma</span>
              </div>
            </Reveal>
            <Reveal variant="fade-left" delay={150} className="lg:col-span-5 lg:pl-12">
              {/* <span className="block text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Chapter IX : Awareness</span> */}
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-none">
                Breaking the Silence
              </h2>
              <h3 className="text-xl font-display italic text-muted-foreground mb-6">Menstrual Hygiene Awareness</h3>
              <p className="text-muted-foreground text-lg font-serif leading-relaxed mb-8">
                We are dismantling age-old taboos through education. Conducting health sessions in schools and colleges, we empower young women with knowledge about menstrual health, hygiene management, and the confidence to speak up.
              </p>
              {/* <a className="inline-flex items-center gap-2 border-b-2 border-accent text-accent font-bold uppercase text-xs tracking-widest pb-1 hover:text-accent/70 hover:border-accent/70 transition-colors" href="#">
                Partner with Schools
                <ArrowRight size={14} />
              </a> */}
            </Reveal>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="bg-primary relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent blur-[100px]"></div>
        </div>
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">
            The Future is a <br /><span className="text-accent italic">Collective Canvas.</span>
          </h2>
          <p className="mt-6 text-xl text-primary-foreground/60 font-serif italic max-w-2xl mx-auto">
            Your support fuels the initiatives that change lives. Be a part of the Khajani legacy today.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/donate" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition transform hover:-translate-y-1">
              Get Involved
            </Link>
            <Link to="/media" className="text-primary-foreground border-b border-primary-foreground/30 hover:border-primary-foreground pb-1 font-display text-lg italic transition-colors">
              Read our impact stories
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default CampaignsPage;
